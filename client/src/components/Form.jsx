import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

function getInfo() {
const [ user, setNewUser ] = useState()

    const handleInputChange = (event) => {
        const { user, value } = event.target;
        setNewUser((prevState) => ({ ...prevState, [user]: value }));
    };

    const handleSubmit = (e) => {  
        e.preventDefault();
        getInfo();
    }

    return (
        <>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input
                id='profilepic'
                type='image'
                name='profilepic'
                value={setNewUser.img}></input><br />
                <input
                id='username'
                type='text'
                name='username'
                value={setNewUser.username}
                onChange={handleChange}></input><br />
                <input
                id='birthdate'
                type='date'
                name='birthdate'
                value={setNewUser.birthdate}
                onChange={handleChange}></input><br />
                <input
                id='email'
                type='text'
                name='email'
                value={setNewUser.email}
                onChange={handleChange}></input><br />
                <input
                id='password'
                type='password'
                name='password'
                value={setNewUser.password}
                onChange={handleChange}></input><br />
                <input
                id='serverRegion'
                type='radio'
                name='serverRegion'
                value={setNewUser.serverRegion}
                onChange={handleChange}></input><br />
            </form>
        </div>
        </>
    )

}