import * as React from 'react'
import { Link } from 'gatsby'
import { Global, css, jsx } from '@emotion/core'

const header: React.SFC = () => (
  <div
    css={{
      textAlign: 'center',
    }}
  >
    <div
      className="title"
      css={{
        margin: '20px 0px',
      }}
    >
      <h1>aanrii.com</h1>
    </div>
    <div
      className="menu"
      css={{
        margin: '20px 0px',
        display: 'flex',
        justifyContent: 'center',
        div: {
          margin: '0px 10px',
        },
      }}
    >
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/">works</Link>
      </div>
      <div>
        <Link to="about">contact</Link>
      </div>
    </div>
  </div>
)

export default header
