import React from 'react';

const Button = ({name, ...props}) => {
  return (
    <button {...props} className="my-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 py-1.5 text-center">
      {name}
    </button>
  );
};

export default Button;