import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link, Outlet } from 'react';

function Users() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
      try {
          const response = await fetch("/api/users");
          const users = await response.json();
          setUsers(users);
        } catch (error) {
          console.error(error.message);
        }
      };
      
      return (
        <>
        <div>
            <h2>Find your team</h2>
        </div>
        </>
    )
}