import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/container";
import Img from "gatsby-image"


export default function Template({ data }) {
    let post = data.markdownRemark
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Container>
        <main className="bigP">
        <Img fluid={featuredImgFluid} />
        <h4>{frontmatter.date}</h4>
          <h1>{frontmatter.title}</h1>
          <h3>{frontmatter.text}</h3>
          <p>Participants: {frontmatter.members}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </main>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        text
        members
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`;
