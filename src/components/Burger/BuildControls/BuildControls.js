import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <BuildControl label="Label1"/>
    <BuildControl label="Label2"/>
  </div>
);

export default buildControls;


