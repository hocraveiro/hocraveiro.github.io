import React, { Component } from "react";
import Typist from 'react-typist';
import Container from '../../components/container/index';
import SectionBackground from '../../components/sectionbackground';

import styles from './index.module.css';
import background from './background.jpg';
import 'react-typist/dist/Typist.css';

export default class IndexPage extends Component {
  constructor(){
    super()
    this.state = {finishedStLine: false} 
  }

  onTypingDone(){
    this.setState({finishedStLine: true})
  }

  render(){
    return (
      <div>
        <SectionBackground background={background}>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }} onTypingDone={this.onTypingDone.bind(this)} className={styles.title}>
            Hello!<br/><Typist.Delay ms={1000} />I am<Typist.Backspace count={3} delay={300} />
            
            'm <strong>Henrique Craveiro</strong>
          </Typist>
          {this.state.finishedStLine ? 
            (
              <Typist className={styles.subtitle} cursor={{ hideWhenDone: true, hideWhenDoneDelay: 1000 }}>Full stack web developer, amateur photographer and 
    adventure sports lover.</Typist>
            ) : <span/>
          }
        </SectionBackground>
        <Container>
          <h1>
            Latest posts
          </h1>
          {this.props.data.markdownRemark.frontmatter.latestPosts.map(post => (
            <div key={post.id} className={styles.post}>
              <a href={post.uniqueSlug} target="_blank"><h3>{post.title}{" "}</h3></a>
              <p>{post.subtitle}</p>
              <p><span className={styles.date}> {post.date.slice(0, 10)}</span> - <span className={styles.tags}>{post.tags.join(', ')}</span></p>
            </div>
          ))}
        </Container>
      </div>
    );
  }
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