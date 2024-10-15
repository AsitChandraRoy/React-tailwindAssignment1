import React from 'react'
import { Container } from '../common/container'
import { NavLink, Outlet } from 'react-router-dom'
function Navbar() {
  return (
    <>
        <Container className="bg-card">
            <nav className='flex justify-around items-center pb-3 border border-b-2 border-[#cbcbd9]'>
                <img className='h-5 md:h-7 xl:h-9' src="/logo.png" alt="" />
                <div>
                    <ul className='flex justify-center items-center gap-2 md:gap-4 lg:gap-7 xl:gap-8 text-xs md:text-sm xl:text-base'>
                        <li className='font-bold'><a href="#">Dashboard</a></li>
                        <li className=' opacity-50'><a href="#">Incidents</a></li>
                        <li className=' opacity-50'><a href="#">Locations</a></li>
                        <li className=' opacity-50'><a href="#">Activities</a></li>
                        <li className=' opacity-50'><a href="#">Documents</a></li>
                        <li className=' opacity-50'><a href="#">Cypher AI</a></li>
                    </ul>
                </div>
                <div className='flex justify-between items-center gap-2 text-xs md:text-sm xl:text-base'>
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
        </Container>
    </>
  )
}

export default Navbar