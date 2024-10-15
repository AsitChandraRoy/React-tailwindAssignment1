import React from 'react'
import { Container } from '../common/container'

function Navbar() {
  return (
    <>
        <Container className="bg-card">
            <nav className='flex justify-around items-center pb-3 border border-b-2 border-[#e9e9eb]'>
                <img src="/logo.png" alt="" />
                <div>
                    <ul className='flex justify-center items-center gap-8'>
                        <li className='font-bold'><a href="#">Dashboard</a></li>
                        <li className=' opacity-50'><a href="#">Incidents</a></li>
                        <li className=' opacity-50'><a href="#">Locations</a></li>
                        <li className=' opacity-50'><a href="#">Activities</a></li>
                        <li className=' opacity-50'><a href="#">Documents</a></li>
                        <li className=' opacity-50'><a href="#">Cypher AI</a></li>
                    </ul>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex h-7 gap-1'>
                        <img className='bg-[#ffffff] p-1 rounded-full' src="/notification.png" alt="" />
                        <img className='h-2 -ms-3' src="/notiTop.png" alt="" />
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