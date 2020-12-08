import { AnchorLink } from "gatsby-plugin-anchor-links";

export default () => (
  <AnchorLink to="/about#team" title="Our team">
    <span>Check out our team!</span>
  </AnchorLink>
);
// => <a href="/about#team" title="Our team"><span>Check out our team!</span></a>

export default () => (
  <AnchorLink to="/about#team" title="Check out our team!" />
);
// => <a href="/about#team" title="Check out our team!">Check out our team!</a>

export default () => (
  <AnchorLink
    to="/about#team"
    title="Check out our team!"
    className="stripped"
    stripHash
  />
);
// => <a href="/about" class="stripped" title="Check out our team!">Check out our team!</a>
// => Hash will be stripped, and a full page scroll will occure onRouteChange

export default () => <AnchorLink to="/about" title="About us" />;
// => <a href="/about" title="About us">About us</a>
