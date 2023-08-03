import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as EditIcon } from './edit_button_icon.svg';

const EditButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <IconButton {...props}>
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;