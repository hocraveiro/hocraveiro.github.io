import React from "react";

import SectionBackground from '../../components/sectionbackground';
import Container from '../../components/container/index';

import Layout from '../../components/layout';
import background from './background.jpg';
import styles from './index.module.css';

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.photos)
  return (
    <Layout>
      <SectionBackground background={background}>
        <h1>I found in photography a way to stimulate my creativity.</h1>
        <h2>You can see more photos <a href="https://unsplash.com/@hocraveiro/likes" target="_blank">here</a>.</h2>
      </SectionBackground>

      <div className={styles.photolist}>
        { 
          data.markdownRemark.frontmatter.photos.map((photo, index) => {
            return (
              <a href={photo} target="_blank"><img src={photo} className={styles.photo} key={index} /></a>
            )
          })
        }        
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PhotographQuery {
    markdownRemark(fields: { slug: { eq: "/photograph/" } }) {
      html
      frontmatter{
        photos
      }
    }
  }
`;