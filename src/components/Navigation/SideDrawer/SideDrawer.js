import React from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  return (
    <React.Fragment>
      <Backdrop show/>
      <div className={styles.SideDrawer}>
        <div className={styles.Logo}>
         <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
