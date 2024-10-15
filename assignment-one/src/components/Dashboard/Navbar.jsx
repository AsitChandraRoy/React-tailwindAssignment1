import React, { useState } from 'react'
import { Container } from '../common/container'
import { NavLink, Outlet } from 'react-router-dom'
import { navItems } from '../../lib/db';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <section  className="bg-card">
        <Container>
            <nav className='flex justify-between items-center pb-3 px-5
             sm:px-7 md:px-10 xl:px-12 border-b-2 border-[#cbcbd9]'>
                <img className='h-5 md:h-7 xl:h-9' src="/logo.png" alt="" />
                <div>
                    <ul className='flex justify-center items-center gap-2 md:gap-4 lg:gap-7 xl:gap-8 text-xs md:text-sm xl:text-base'>
                        {navItems.map(({text, link}, i)=>(
                            <li key={i} className=' opacity-50'><NavLink to={link}>{text}</NavLink></li>
                        ))}
                        {/* <li className='font-bold'><NavLink to="/">Dashboard</NavLink></li>
                        <li className=' opacity-50'><NavLink to="/Incidents">Incidents</NavLink></li>
                        <li className=' opacity-50'><NavLink to="/Locations">Locations</NavLink></li>
                        <li className=' opacity-50'><NavLink to="/Activities">Activities</NavLink></li>
                        <li className=' opacity-50'><NavLink to="/Documents">Documents</NavLink></li>
                        <li className=' opacity-50'><NavLink to="/CypherAI">Cypher AI</NavLink></li> */}
                    </ul>
                </div>
                <div className='flex justify-between items-center gap-2 text-xs md:text-sm xl:text-base'>
                {/* Hamburger button for mobile */}
                    <button
                    className="lg:hidden block text-accent"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    >
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-black" />
                        <span className="block w-6 h-0.5 bg-black" />
                        <span className="block w-6 h-0.5 bg-black" />
                    </div>
                    </button>
                    <div className='flex h-4 md:h-5 xl:h-7 gap-1'>
                        <img className='bg-[#ffffff] p-1 rounded-full' src="/notification.png" alt="" />
                        <img className='h-1 md:h-2 xl:h-3 -ms-3' src="/notiTop.png" alt="" />
                        <img src="/head.png" alt="" />
                    </div>
                    <div>
                        <h4 className='opacity-80'>Usman Zafar</h4>
                        <p className='opacity-70 sm:text-xs md:text-sm'>usmanzafar@gmail.com</p>
                    </div>
                </div>
            </nav>
            <Outlet />
        </Container>
       </section>
    </>
  )
}

export default Navbar