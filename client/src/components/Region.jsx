import React from 'react';
import { useState, useEffect } from 'react';

export default function User() {
  const [serverRegion, setServerRegion] = useState(`Europe`);
  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      getUsers();
    }, []);

    // useEffect(() => {
    //   getUsers();
    // }, [serverRegion]);

  async function getUsers() {
    try {
      const response = await fetch(`http://localhost:4000/users/region/${serverRegion}`); // /api/users/region/Europe not working
      const result = await response.json();
      setUsers(result.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

    return (
      <div>
        <form>
          <input
            type="text"
            aria-label="server-region"
            className="form-control"
            name="server-region"
            value={serverRegion.value}
            onChange={handleInputChange}
          /></form>
        <ul>
          {users.map((users) => (
          <li key={users.serverRegion}>
            {users.username} {users.currentRank}
          </li>
      ))}
      </ul>
      </div>
)}
