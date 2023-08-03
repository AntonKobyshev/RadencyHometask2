import React from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: React.FC<IconButtonProps> = ({ ...buttonProps }) => {
  return <button {...buttonProps} className={styles.button} />;
};

export default IconButton;
