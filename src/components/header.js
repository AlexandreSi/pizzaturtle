import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core";

const Header = ({ siteTitle }) => (
  <header>
    <div
      css={css`
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
        text-align: center;
        background-color: green;
      `}
    >
      <h1 css={css`margin: 0;`}>
        <Link
          to="/"
          css={css`
            color: red;
            text-decoration: none;
            background-color: white;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
