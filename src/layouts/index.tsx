import React from 'react';
import styles from './Root.module.css';

const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Root;