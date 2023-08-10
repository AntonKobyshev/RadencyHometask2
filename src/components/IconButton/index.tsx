import React from 'react';


interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: React.FC<IconButtonProps> = ({ ...buttonProps }) => {
  return <button {...buttonProps} className="h-5 w-5 p-0 border-0 bg-transparent" />;
};

export default IconButton;
