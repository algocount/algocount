import React from "react";

import Layout from "../components/layout";
import { Link } from "gatsby";
import Container from "../components/container";
import PostLink from "../components/post-link";

import newsStyles from "../components/news.module.css"

const News = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    return (
    <Layout>
      <Container>
        <main>
          <div className="intro">
            <p>RECENT ACTIVITIES</p>
            <div className="introBox">
              <h1>
                The Algocount project consists of seven actions; of these, two
                concern the collection of primary empirical data, and one
                concerns the implementation of a Communication Plan aimed at the
                dissemination of research findings and the engagement of the
                general public.
              </h1>
            </div>
          </div>
          <div>
            <div>{Posts}</div>
          </div>
        </main>
      </Container>
    </Layout>
  );
}

export default News
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            authors
            text
          }
        }
      }
    }
  }
`