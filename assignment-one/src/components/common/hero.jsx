import React from 'react'
import { Container } from './container'
import { Button } from './button'

function Hero(props) {
  return (
    <>
    <Container className="h-24">
        <div className='flex justify-between items-center px-5
             sm:px-7 md:px-10 xl:px-12 pt-5'>
            <div id='1'>
                <p className='text-lowLight text-[10px] md:text-xs'>{props.direction}</p>
                <h1 className='font-bold  md:text-xl xl:text-2xl'>{props.itemName}</h1>
            </div>
            <div className='flex items-center text-xs gap-3 text-lowLight'>
                <div className='flex justify-start ps-2 py-1 rounded-sm bg-[#ffffff]'>
                    <img className='h-5' src="/search.png" alt="" />
                    <input type="text" placeholder='Search incident' />
                </div>
                <p className='bg-[#ffffff] p-1.5 rounded-sm'>{props.sort}</p>
                <Button className="flex justify-center items-center gap-1"><span className='text-sm'>{props.plus}</span>{props.btnText}</Button>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Hero