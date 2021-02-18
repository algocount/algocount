import React from "react";
import { Link } from "gatsby";


const PostLink = ({ post }) => (
  <div className="blogbox">
      <h2>{post.frontmatter.date}</h2>
      <h3>
        <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
      </h3>
      <h5>{post.frontmatter.text}</h5>
  </div>
);
export default PostLink;
