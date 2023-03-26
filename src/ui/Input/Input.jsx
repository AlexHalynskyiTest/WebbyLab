import React from 'react';
import { ErrorMessage, Field } from 'formik';

const Input = ({ label, name, type='text'}) => {
  return (
    <div className="block mb-2">
      <div className="block mb-2 text-sm font-medium text-gray-900">{label}</div>
      <Field name={name} type={type} className="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      <ErrorMessage name={name} component="div" className="mt-2 text-sm text-red-600" />
    </div>
  );
};

export default Input;