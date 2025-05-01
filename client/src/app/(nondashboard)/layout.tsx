import React from 'react'
import { NAVBAR_HEIGHT } from '../../../lib/constants'
import Navbar from '../../components/Navbar' // Adjust the path as necessary

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
       Navbar
        <Navbar />
  
    <main className= {`h-full flex flex-col w-full pt-[${NAVBAR_HEIGHT}px]`}>
        {children}
    </main>
    </div>
  )
}

export default Layout