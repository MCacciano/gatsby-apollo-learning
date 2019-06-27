import React from 'react';
import styled from 'styled-components';

import headerImage from '../../imgs/header-logo.jpg';

const HeaderWrapper = styled.header`
  background-image: url(${headerImage});
  background-size: contain;
  background-repeat: no-repeat;
  height: 90vh;
`;

const Header = () => {
  return (
    <HeaderWrapper id="header">
      <nav className="nav">
        <div className="nav__brand">Brand</div>
        <div className="nav__links">Links</div>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
