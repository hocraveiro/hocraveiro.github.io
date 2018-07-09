import React, { Component } from 'react';
import Container from '../container';
import Link from "gatsby-link";

import MediaQuery from 'react-responsive';

import styles from './index.module.css';

const MenuItems = () => {
  return (
    <div className={styles.menuitems}>
      <Link exact to='/' className={styles.navitem} activeClassName={styles.active}>Home</Link>
      <Link to='/about' className={styles.navitem} activeClassName={styles.active}>About</Link>
      <a target="_blank" href="https://medium.com/@craveiro" className={styles.navitem}>Blog</a>
      <Link to='/photograph' className={styles.navitem} activeClassName={styles.active}>Photograph</Link>
    </div>
  )
}

export default class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt){
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>  
          <MediaQuery query="(min-device-width: 800px)">
          {
            (matches) => {
              if (matches) {
                return(
                  <nav className={styles.nav}>
                    <Container>
                      <MenuItems />
                    </Container>
                  </nav>
                );
              } else {
                return (
                  <div className={`${styles.menumobile} ${this.state.open ? styles.active : ''}`} onClick={this.handleClick}>
                    <div className={`${styles.menubutton} `} >
                      <div className={styles.line} />
                      <div className={styles.line} />
                      <div className={styles.line} />
                    </div>
                    {
                      this.state.open ? <div className={styles.mobilelinks} onClick={this.handleClick}><MenuItems/></div>:<span/>
                    }
                  </div>
                );
              }
            }
          } 
          </MediaQuery>
      </div>
    )
  }
}