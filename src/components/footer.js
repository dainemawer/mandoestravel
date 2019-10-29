import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const SiteFooter = styled.footer`
  align-items: center;
  border-top: 1px solid rgba(0,0,0, 0.25);
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-top: 2rem;
`;

const Colophon = styled.p`
  margin-bottom: 0;
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
`;

const Footer = () => (
    <SiteFooter>
        <Colophon>
          Built with <span role="img" aria-label="Heart">♥️</span> by <a href="https://dainemawer.com" target="_blank" rel="noopener noreferrer">Daine Mawer</a>
        </Colophon>
        <Navigation>
          <NavItem>
            <span role="img" aria-label="Lock">🔒</span>
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>
          </NavItem>
          <NavItem>
            <span role="img" aria-label="Lock">📋</span>
            <Link to="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
          </NavItem>
        </Navigation>
    </SiteFooter>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
