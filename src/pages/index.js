import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { typographyIndex } from "../utils/typographies"

const IndexPage = () => {
  typographyIndex.injectStyles()
  return (
    <Layout>
      <SEO title="Home" keywords={[`pizza`, `france`, `paris`]} />
      <div css={css`
        text-align: center;
      `}>
        <p>Chacun a sa pizzeria préférée.</p>
        <p>Chacune a sa pizza préférée.</p>
        <p>Personne ne nous enlevera ça.</p>
        <p>Ici, place à la subjectivité, à l'expérience de chaque pizzavore.</p>
      </div>
      <div css={css`
        max-width: 300px;
        marginBottom: 1.45rem;
        margin: 0 auto;
      `}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
