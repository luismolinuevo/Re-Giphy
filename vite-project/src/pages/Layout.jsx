import React from 'react'
import Navbar from"../components/navbar"
import Tabbar from"../components/tab-bar"
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Tabbar/>
    </div>

  )
}
