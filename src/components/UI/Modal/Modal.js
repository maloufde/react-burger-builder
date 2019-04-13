import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const fadeInStyle = {
  transform: 'translateY(0)',
  opacity: '1',
};

const fadeOutStyle = {
  transform: 'translateY(-100vh)',
  opacity: '0',
};

const modal = (props) => (
  <React.Fragment>
    <Backdrop show={props.show} onClick={props.onClose}/>
    <div className={styles.Modal} style={props.show ? fadeInStyle : fadeOutStyle}>
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
