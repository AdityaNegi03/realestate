import React from 'react'
import { NAVBAR_HEIGHT } from '../../../lib/constants'
import Navbar from '../../components/Navbar' // Adjust the path as necessary

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full w-full'>
     
        <Navbar />
  
    <main className= {`h-full flex flex-col w-full `}
      style={{ paddingTop: `${NAVBAR_HEIGHT}px` }} // Adjust the padding to account for the navbar height
    >
        {children}
    </main>
    </div>
  )
}

export default Layout