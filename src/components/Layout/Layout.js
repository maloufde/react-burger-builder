import React from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerToggleHandler = () => {
    this.setState({showSideDrawer: true});
  };

  sideDrawerCloseHandler = () => {
    this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}))
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar onToggleMenu={this.sideDrawerToggleHandler}/>
        <SideDrawer show={this.state.showSideDrawer} onClose={this.sideDrawerCloseHandler}/>
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
