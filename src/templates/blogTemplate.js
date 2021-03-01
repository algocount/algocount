import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/container";
import Img from "gatsby-image";

import newsStyles from "../components/news.module.css";

export default function Template({ data }) {
  let post = data.markdownRemark;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Container>
        <main>
          <div className={`blog ${newsStyles.blog}`}>
            <section className={`blogHeader ${newsStyles.blogHeader}`}>
              <div className={`blogImg ${newsStyles.blogImg}`}>
                <Img fluid={featuredImgFluid} />
              </div>
              <p>Published on {frontmatter.date}</p>
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.text}</p>    
            </section>
            <section
              className={`blogContent ${newsStyles.blogContent}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
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
        authors
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
