import React from 'react';

const Navbar = () => {
    return (
        <div className=' w-11/12 mx-auto sticky top-0 z-50 bg-white shadow-sm hover:border-b-2 hover:border-green-700'>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#about" className='hover:text-green-800 hover:font-semibold'>About Me</a></li>
        <li><a href="#skills" className='hover:text-green-800 hover:font-semibold'>Skills</a></li>
       <li><a href="#projects" className='hover:text-green-800 hover:font-semibold'>Projects</a></li>
       <li><a href="#education" className='hover:text-green-800 hover:font-semibold'>Education</a></li>
      <li><a href="#contact" className='hover:text-green-800 hover:font-semibold'>Contact</a></li>
      </ul>
    </div>
    <a href="/" className="text-green-700 font-bold text-xl">Suborna Yasmin</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><a href="#about" className='hover:text-green-800 hover:font-semibold'>About Me</a></li>
        <li><a href="#skills" className='hover:text-green-800 hover:font-semibold'>Skills</a></li>
      <li><a href="#projects" className='hover:text-green-800 hover:font-semibold'>Projects</a></li>
     <li><a href="#education" className='hover:text-green-800 hover:font-semibold'>Education</a></li>
     <li><a href="#contact" className='hover:text-green-800 hover:font-semibold'>Contact</a></li>
   
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-white text-green-700 border-green-800 hover:bg-green-700 hover:text-white">Resume</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;