import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react';

function Users() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
      try {
          const response = await fetch("/api/user");
          const users = await response.json();
          setUsers(users);
        } catch (error) {
          console.error(error.message);
        }
      };
      
      return (
        <>
          <h2>Find your team</h2>
          <div>
          <hr />
      {users.map((users) => (
        <div key={users.id}>
          <ul>
          <li><Link to={`/users/${users.userid}`}>
            {users.username}, {users.serverRegion}
          </Link></li>
          </ul>
        </div>
      ))}
      <hr />
      <Outlet />
    </div>
        </>
    )
}