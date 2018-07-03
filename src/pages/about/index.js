import React from "react";
import SectionBackground from '../../components/sectionbackground';
import Container from "../../components/container/index";
//import styles from "./index.module.css";
import background from './background.jpg';

export default ({data}) =>
  <div>
    <SectionBackground background={background}/>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Container>
  </div>

export const query = graphql`
  query BlogAboutQuery {
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      html
    }
  }
`;