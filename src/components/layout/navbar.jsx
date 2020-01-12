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
  ul {
    display: flex;
    list-style: none;
    li {
      a {
        cursor: pointer;
        text-decoration: none;
        border: #fff;
        color: #ccc;
        transition: all 0.5s;
        padding: 0.75rem 0.5rem;
        margin: 0 0.25rem;
        border-radius: 5px;
        &:hover {
          background: var(--primary-color);
        }
      }
    }
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
