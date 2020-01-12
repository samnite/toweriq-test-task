import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUsers = styled.ul`
  li {
    margin: 0.5rem 0;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 0.5rem;
  }
`;

const Users = ({ users }) => {
  return (
    <StyledUsers>
      {users.map(user => (
        <li key={user.id}>
          <h3>
            {user.name} {user.surname}
          </h3>
          <p>{user.desc}</p>
        </li>
      ))}
    </StyledUsers>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
