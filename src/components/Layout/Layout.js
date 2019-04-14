import React from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar/>
        <SideDrawer show={this.state.showSideDrawer} onClose={this.sideDrawerClosedHandler}/>
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
