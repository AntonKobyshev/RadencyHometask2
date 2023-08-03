import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from './delete_button_icon.svg';

interface DeleteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  return (
    <IconButton {...props}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
