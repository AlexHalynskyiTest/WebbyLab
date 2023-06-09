import React from 'react';

const SearchInput = ({ label, ...props}) => {
  return (
    <div className="block mb-2">
      <div className="block mb-2 text-sm font-medium text-gray-900">{label}</div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input {...props}
               className="h-8 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchInput;