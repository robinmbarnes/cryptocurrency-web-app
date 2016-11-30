import React from 'react';
import styles from './styles.css';

export default function CenterBlock ({children}) {
  return (<div className={styles.centerBlock}>{children}</div>)
}
