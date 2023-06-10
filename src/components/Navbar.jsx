import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { lgth_navbar, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);

    return (
      <>
      <nav className='w-full flex flex-col xs:flex-row py-2 justify-between items-center navbar'>
        <NavLink to={'/'}>
          <img src={lgth_navbar} alt='lgth logo' className='h-12'/>
        </NavLink>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav,index)=> (
            <li
              key={nav.id}
              className={`font-titillium cursor-pointer text-color01 text-base font-bold tracking-wider ${index===navLinks.length-1 ? 'mr-0' : 'mr-4'} hover:text-color02 active:text-color05` }>
                <NavLink to={`/${nav.id}`}>
                  {nav.title}
                </NavLink>  
            </li>
          ))}
        </ul>
        {/* MENU HAMBURGER */}
        <div className='sm:hidden flex flex-col justify-end items-center'>
          <img 
            src={toggle ? close : menu } 
            alt='menu' 
            className='w-8 h-8 cursor-pointer'
            onClick={()=> setToggle((prev)=>!prev)}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary-gradient absolute top-24 xs:top-16 my-1 xs:right-2 w-full xs:w-1/3 min-w-[170px] rounded-md sidebar`}>
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                      {navLinks.map((nav,index)=> (
                        <li
                          key={nav.id}
                          className={`font-titillium cursor-pointer text-color01 text-lg font-bold tracking-wider ${index===navLinks.length-1 ? 'mb-0' : 'mb-2'} hover:text-color02 active:text-color05` }>
                            <NavLink to={`${nav.id}`}>
                              {nav.title}
                            </NavLink>  
                        </li>
                      ))}
                    </ul>
            </div>
        </div>
      </nav>
      </>
  )
}

export default Navbar