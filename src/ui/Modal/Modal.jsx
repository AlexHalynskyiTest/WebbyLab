import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({isShown, onClose, onAccept, header, text, yesButtonName, noButtonName }) => {

  if(!isShown) {
    return null
  }

  return (
    <div>
      {createPortal(
        <div onClick={onClose} className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-200 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
          <div onClick={e => e.stopPropagation()} className="relative w-full h-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  {header}
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500">
                  {text}
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                {yesButtonName && onAccept &&
                  <button onClick={onAccept} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    {yesButtonName}
                  </button>
                }
                {noButtonName && onClose &&
                  <button onClick={onClose} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                    {noButtonName}
                  </button>
                }
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('root')
      )}
    </div>
  );
};

export default Modal;