import React from "react";

import Container from '../../components/container/index';
import SectionBackground from '../../components/sectionbackground';

import styles from './index.module.css';
import background from './background.jpg';

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <SectionBackground background={background}>
        <h1>Hello!<br/> I am <strong>Henrique Craveiro</strong></h1>
        <h2>Full stack web developer, amateur photographer and 
adventure sports lover.</h2>
      </SectionBackground>
      <Container>
        <h1>
          Latest posts
        </h1>
        {data.markdownRemark.frontmatter.latestPosts.map(post => (
          <div key={post.id} className={styles.post}>
            <a href={post.uniqueSlug} target="_blank"><h3>{post.title}{" "}</h3></a>
            <p>{post.subtitle}</p>
            <p><span className={styles.date}> {post.date.slice(0, 10)}</span> - <span className={styles.tags}>{post.tags.join(', ')}</span></p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery {
    markdownRemark(fields: { slug: { eq: "/index/" } }) {
      html
      frontmatter{
        title
        date
        latestPosts {
          title
          tags
          uniqueSlug
          id
          date
          subtitle
          uniqueSlug
        }
      }
    }
  }
`;