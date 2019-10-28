import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const SiteHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

const SiteLogo = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  & a {
    text-decoration: none;
  }
`;

const Navigation = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`;

const NavItem= styled.li`
  margin: 0 1rem 0 0;
  &:last-child {
    margin: 0;
  }

  & a {
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
    <SiteHeader>
        <SiteLogo>
            <span role="img" aria-label="Man">🙋‍♂️</span>{' '}
            <Link to="/">{siteTitle}</Link>
        </SiteLogo>
        <Navigation>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </Navigation>
    </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
