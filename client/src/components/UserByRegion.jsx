import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function User() {
    const [user, setUser] = useState([])
    const { serverRegion } = useParams();
  
    const getUserByRegion = async () => {
      try {
        const response = await fetch(`/api/region/${serverRegion}`);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    useEffect(() => {
      getUserByRegion();
    }, [ serverRegion ]);

    return (
      <div>
        {user && (
          <h4>
            Meet {user.username}, playing in {user.serverRegion}
          </h4>
        )}
      </div>
    );
  }