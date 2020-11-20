import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: {
        author,
        image,
        siteDesc,
        siteUrl,
        siteTitle,
        twitterUsername,
      },
    },
  } = useStaticQuery(query)
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/** twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:url" content={`${siteUrl}${image}`} />
      <meta name="twitter:author" content={author} />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        author
        image
        siteDesc: description
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

export default SEO
