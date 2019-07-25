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
          margin: '10px 20px 10px 0px',
        },
      }}
    >
      <div
        className="about-column"
        css={{
          width: '240px',
          height: '240px',
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
          width: '300px',
          height: '300px',
          wordWrap: 'break-word',
        }}
      >
        <p>
          <h3>Basic information</h3>
          <ul>
            <li>Name: Anri Kobayashi</li>
            <li>Birth: 1992/08/30</li>
            <li>Address: Tokyo, Japan</li>
          </ul>
        </p>
        <p>
          <h3>Job</h3>
          <ul>
            <li>Web engineer</li>
          </ul>
        </p>
        <p>
          <h3>Skills</h3>
          <ul>
            <li>Web programming (Java, JS, Python, ...) </li>
            <li>System architecture design</li>
            <li>CI/CD</li>
            <li>
              Music producing (track making, recording, mixing and mastering)
            </li>
          </ul>
          <a href="https://github.com/aanrii/cv">CV (in Japanese)</a>
        </p>
        <p>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="https://twitter.com/aanrii">Twitter</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </Layout>
)
export default about
