import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

export default function BubbleLoader () {
  const bubbles = [];
  for (let i = 1; i <= 6; i++) {
    const classList = classNames(
      styles.bubble,
      styles[`bubble${i}`]
    );
    bubbles.push(<div className={classList} key={i}></div>)
  }
  return (
    <div className={styles.loader}>
      {bubbles}
    </div>
  );
}
