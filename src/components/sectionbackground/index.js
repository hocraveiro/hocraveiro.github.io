import React, {Component, PropTypes} from 'react';
import Container from '../container/index';
import Link from "gatsby-link";

import styles from './index.module.css';

class SectionBackground extends Component{
  
  constructor(){
    super()
  }
  
  render() {
    return (
      <section className={styles.sectionbackground} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${this.props.background})`}}>
        <Container>        
          {this.props.children}
        </Container>
      </section>
    )
  }
}

export default SectionBackground;