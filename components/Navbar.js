import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link
        href='/'
      >
        <h1>Users</h1>
      </Link>
    </div>
  )
}

export default Navbar