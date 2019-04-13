import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less} onClick={props.onLess} disabled={props.disabled}>Less</button>
    <button className={styles.More} onClick={props.onMore}>More</button>
  </div>
);

export default buildControl;
