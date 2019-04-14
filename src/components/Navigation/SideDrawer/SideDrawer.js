import React from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const openedStyles = [styles.SideDrawer, styles.Open].join(' ');
const closedStyles = [styles.SideDrawer, styles.Close].join(' ');

const sideDrawer = (props) => {

  return (
    <React.Fragment>
      <Backdrop show={props.show} onClick={props.onClose}/>
      <div className={props.show? openedStyles : closedStyles}>
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
