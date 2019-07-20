import React from "react"
import Layout from "../components/layout"
import { Global, css, jsx } from "@emotion/core"

export default ({ data }) => (
  <Layout>
    <h2>About</h2>
    <div
      css={{
        display: "flex",
        "flex-wrap": "wrap",
      }}
    >
      <Global
        styles={{
          ".about-column": {
            margin: "0px 10px 10px 0px",
          },
        }}
      />
      <div
        className="about-column"
        css={{
          width: "240px",
          height: "240px",
        }}
      >
        <img
          src={"/about/my.jpg"}
          css={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div
        className="about-column"
        css={{
          "min-width": "300px",
          "min-height": "300px",
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
