import * as React from 'react'
import Header from './header'
import { jsx } from '@emotion/core'
import { Helmet } from 'react-helmet'

const layout: React.SFC<{ children?: React.ReactNode }> = ({ children }) => (
  <div
    className="outer"
    css={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: `640px`,
      display: `block`,
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>aanrii.com</title>
    </Helmet>
    <Header />
    <div
      className="child"
      css={{
        margin: `0px 20px`,
      }}
    >
      {children}
    </div>
  </div>
)

export default layout
