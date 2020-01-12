import React from 'react';

const Users = ({ users }) => {
  return (
    <ul className="list-group mb-4">
      {users.map(user => (
        <li key={user.id}>
          {user.name} {user.surname}
        </li>
      ))}
    </ul>
  );
};

export default Users;
