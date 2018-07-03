import React from 'react';
import Container from '../container';
import Link from "gatsby-link";

import styles from './index.module.css';

export default () => {
  return (
    <nav className={styles.nav}>
        <Container>
          <Link to='/index/' className={styles.navitem} activeClassName={styles.active}>Home</Link>
          <Link to='/about' className={styles.navitem} activeClassName={styles.active}>About</Link>
          <a target="_blank" href="https://medium.com/@craveiro" className={styles.navitem}>Blog</a>
          <Link to='/photograph' className={styles.navitem} activeClassName={styles.active}>Photograph</Link>
      </Container>
    </nav>
  )
}