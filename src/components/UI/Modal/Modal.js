import React from 'react';
import styles from './Modal.module.css';

const fadeInStyle = {
  transform: 'translateY(0)',
  opacity: '1',
};

const fadeOutStyle = {
  transform: 'translateY(-100vh)',
  opacity: '0',
};

const modal = (props) => (

  <div className={styles.Modal} style={props.show ? fadeInStyle : fadeOutStyle}>
    {props.children}
  </div>
);

export default modal;
