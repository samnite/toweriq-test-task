import React from 'react';

const Users = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} {user.surname}
        </li>
      ))}
    </ul>
  );
};

export default Users;
