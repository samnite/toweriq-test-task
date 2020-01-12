import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPagination = styled.ul`
  display: flex;
  margin-top: 1rem;

  li {
    padding: 0 0.5rem;
    margin: 0 0.5rem;
    background-color: lightgray;
    border-radius: 5px;
  }
`;

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="#">
            {number}
          </a>
        </li>
      ))}
    </StyledPagination>
  );
};

Pagination.propTypes = {
  usersPerPage: PropTypes.number.isRequired,
  totalUsers: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
