import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as EditIcon } from './edit_button_icon.svg';

const EditButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <IconButton {...props}>
      <EditIcon className="bg-transparent bg-cover p-0 border-none h-8 w-full transition-transform duration-200 cursor-pointer hover:transform hover:scale-150" />
    </IconButton>
  );
};

export default EditButton;
