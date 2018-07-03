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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
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
