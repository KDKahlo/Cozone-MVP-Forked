import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

function getProfile() {
    const [ user, setUser ] = useState()

    return (
        <>
        <div className="profilepic"></div>
        <div className="username">
        </div>
        </>
    )
}