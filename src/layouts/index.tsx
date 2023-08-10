import React from 'react';

const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="max-w-5xl mx-auto my-8 ">{children}</div>;
};

export default Root;