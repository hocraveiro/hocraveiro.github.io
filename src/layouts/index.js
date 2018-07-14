import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/menu'

import styles from './index.module.css'

class Layout extends Component {

  constructor({ children, data }) {
    super()
  }

  render() {
    const data = this.props.data
    return (
      <div>
        <Helmet
          title='Henrique Craveiro'
          meta={[
            { name: 'description', content: 'Henrique Craveiro full stack web developer based in Limerick Irelanda.' },
            { name: 'keywords', content: 'Full stack, Web Developer, Henrique Craveiro, hocraveiro' },
          ]}
        />
        <Menu/>
        {this.props.children()}
        <footer>
            <p className={styles.footertext}>Made with ❤️ by Henrique Craveiro using React, JavaScript and custom CSS.</p>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
