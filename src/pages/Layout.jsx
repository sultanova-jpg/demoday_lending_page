import React from 'react'
import { NavbarWithSolidBackground } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { FooterWithLogo } from '../components/Footer'

const Layout = () => {
  return (
    <div>
        <NavbarWithSolidBackground/>
        <Outlet/>
        <FooterWithLogo/>
    </div>
  )
}

export default Layout