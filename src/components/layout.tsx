import * as React from 'react'
import Header from './header'
import { Global, jsx } from '@emotion/core'

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
    <Global
      styles={{
        '*': {
          background: '#1C2633',
        },
      }}
    />
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
