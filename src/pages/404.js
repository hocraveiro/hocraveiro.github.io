import React from 'react'
import Container from '../components/container';
import styles from './index.module.css';

const NotFoundPage = () => (
  <div>
    <section className={styles.about}>
      <Container> 
        <h1 className={styles.title}>NOT FOUND</h1>
        <p className={styles.subtitle}>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </section>
  </div>
)

export default NotFoundPage
