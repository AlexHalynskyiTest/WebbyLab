import React from 'react';
import { Link } from 'react-router-dom';

const StyledLink = ({text, ...props}) => {
  return (
    <Link {...props} className="inline-flex items-center font-medium text-blue-600 hover:underline">{text}</Link>
  );
};

export default StyledLink;