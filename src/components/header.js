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
    border-bottom: 0;
  }
`;

const Navigation = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`;

const NavItem= styled.li`
  margin: 0 1.5rem 0 0;
  &:last-child {
    margin: 0;
  }
`;

const Header = ({ siteTitle }) => (
    <SiteHeader>
        <SiteLogo>
            <span role="img" aria-label="Man">🌐</span>{' '}
            <Link to="/">{siteTitle}</Link>
        </SiteLogo>
        <Navigation>
          <NavItem>
            <span role="img" aria-label="House">🏠</span>{' '}
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <span role="img" aria-label="Hand">✋</span>{' '}
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <span role="img" aria-label="Typewriter">📇</span>{' '}
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <span role="img" aria-label="Mailbox">📫</span>{' '}
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
