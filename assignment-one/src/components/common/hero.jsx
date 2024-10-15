import React from 'react'
import { Container } from './container'
import { Button } from './button'

function Hero(props) {
  return (
    <>
    <Container className="md:h-24 sm:h-28 h-32">
        <div className='flex justify-between items-center px-5
             sm:px-7 md:px-10 xl:px-12 pt-5'>
            <div>
                <p className='text-lowLight text-[10px] md:text-xs'>{props.direction}</p>
                <h1 className='font-bold  md:text-xl xl:text-2xl'>{props.itemName}</h1>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 md:w-[600px] sm:w-96 w-52 justify-end items-center text-xs gap-3 text-lowLight'>
                <div className='flex justify-start p-2 py-1 rounded-sm bg-[#ffffff]'>
                    <img className='h-5' src="/search.png" alt="" />
                    <input className='w-24 md:w-32' type="text" placeholder='Search incident' />
                </div>
                <div className='flex justify-center items-center space-x-3'>
                <p className='bg-[#ffffff] p-1.5 rounded-sm'>{props.sort}</p>
                <Button className="flex justify-center items-center gap-1"><span className='text-sm'>{props.plus}</span>{props.btnText}</Button>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Hero