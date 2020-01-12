import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  color: #fff;
  background: var(--dark-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  align-items: center;
  span {
    color: var(--primary-hover-color) !important;
  }
  h1 {
    color: #fff;
  }

  @media (max-width: 768px) {
    justify-content: center;
    ul {
      margin-top: 0.5rem;
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <h1>
          <span>TowerIQ</span> Test Task
        </h1>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
