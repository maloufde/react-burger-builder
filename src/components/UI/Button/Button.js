import React from 'react';
import styles from './Button.module.css'

const button = (props) => (
  <button className={[styles.Button, styles[props.type]].join(' ')} onClick={props.onClick}>
    {props.children}
  </button>
);

export default button;
