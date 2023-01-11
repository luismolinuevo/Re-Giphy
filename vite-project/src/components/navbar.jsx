import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import "../components/navbar.css"

export default function navbar() {
  return (
    <div className='navbar'>
        <Link className = "homeLink" to="/trending">Home</Link>
    </div>
  )
}
