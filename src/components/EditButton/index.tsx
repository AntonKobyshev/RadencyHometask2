import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as EditIcon } from './edit_button_icon.svg';
import styles from './EditButton.module.css';

const EditButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <IconButton  {...props}>
      <EditIcon className={styles.edit_button} />
    </IconButton>
  );
};

export default EditButton;
