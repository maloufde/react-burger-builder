import React from 'react';
import styles from './Logo.module.css';
import burgerLogo from '../../assets/burger-logo.png';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="Burger Paradise"/>
  </div>
);

export default logo;
