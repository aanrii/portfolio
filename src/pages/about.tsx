import * as React from 'react'
import Layout from '../components/layout'
import { Global, css, jsx } from '@emotion/core'

const about: React.SFC = () => (
  <Layout>
    <h2>About</h2>
    <div
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        '.about-column': {
          margin: '0px 10px 10px 0px',
        },
      }}
    >
      <div
        className="about-column"
        css={{
          width: '240px',
          height: '240px',
          margin: '0px 10px 10px 0px',
        }}
      >
        <img
          src={'/about/my.jpg'}
          css={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div
        className="about-column"
        css={{
          minWidth: '300px',
          minHeight: '300px',
        }}
      >
        <p>
          Name: Anri Kobayashi
          <br />
          Birth: 1992/08/30
          <br />
          Skills: Web Programming, Music Production
        </p>
      </div>
    </div>
  </Layout>
)
export default about
