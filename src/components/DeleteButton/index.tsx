import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from './delete_button_icon.svg';
import styles from "./DeleteButton.module.css";

interface DeleteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  light?: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ light, ...buttonProps }) => {
  const iconClassName = light ? styles.light : "";
  return (
    <IconButton {...buttonProps}>
      <DeleteIcon className={iconClassName} />
    </IconButton>
  );
};

export default DeleteButton;
