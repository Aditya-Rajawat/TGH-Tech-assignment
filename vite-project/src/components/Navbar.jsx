import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full py-5 px-24 flex items-center justify-between xsm:w-[360px] xsm:h-[60px] xsm:px-10'>
        <Link to="/"><p className="font-['Poppins'] font-bold text-[26px] leading-[39px] text-white xsm:text-lg">Home</p></Link>
        <Link to="/bookmarks"><p className=" font-['Poppins'] text-white font-light leading-[39px] text-[26px] xsm:text-lg">Bookmarks</p></Link>
    </div>
  )
}

export default Navbar