import React from 'react'
import Hero from '../common/hero'
import { Button } from '../common/button'
import { Container } from '../common/container'
import CButton from '../Dashboard/CButton'

function Home() {
  return (
    <>
    {/* <Hero direction="Welcome back" itemName="Dashboard" sort="Sort By: Date modified" btnText="Cypher AI" /> */}
    <Container className="h-24">
        <div className='flex justify-between items-center px-5
             sm:px-7 md:px-10 xl:px-12 pt-5'>
            <div id='1'>
                <p className='text-lowLight text-[10px] md:text-xs'>Welcome back</p>
                <h1 className='font-bold  md:text-xl xl:text-2xl'>Dashboard</h1>
            </div>
            <div className='flex items-center text-xs gap-3 text-lowLight'>
                <div className='flex justify-start ps-2 pe-5 py-1 rounded-sm bg-[#ffffff]'>
                    <img className='h-5' src="/search.png" alt="" />
                    <input type="text" placeholder='Search incident' />
                </div>
                <p className='bg-[#ffffff] p-1.5 rounded-sm'>Sort By: Date modified</p>
                <Button>Cypher AI</Button>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Home