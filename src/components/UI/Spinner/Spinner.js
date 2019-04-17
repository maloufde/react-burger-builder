import React from 'react';
import styles from './Spinner.module.css';

/*
 * Spinner taken from https://projects.lukehaas.me/css-loaders/
 */
const spinner = () => (
  <div className={styles.Loader}>Loading...</div>
);

export default spinner;
