import React, { useState } from 'react'
import { Container } from './container'
import { Button } from './button'
import NewIncident from '../pages/NewIncident';

function Hero(props) {
    // const [isCreate, setIsCreate] = useState(false);
    // const create = () => setIsCreate(true);
  return (
    <>
    <Container className="md:h-32 sm:h-28 h-32">
        <div className='flex justify-between items-center px-1
             sm:px-7 md:px-10 xl:px-12 pt-5 gap-3'>
            <div>
                <p className='text-lowLight text-[10px] md:text-xs'>{props.direction}</p>
                <div className='flex justify-start items-center'>
                    <img className={props.wm} src={props.tree} alt="" />
                    <h1 className='font-bold  md:text-xl xl:text-2xl'>{props.itemName}</h1>
                </div>
            </div>
            <div className='grid grid-cols-12 md:w-[473px] sm:w-96 w-52 justify-end items-center text-xs gap-3 text-lowLight'>
                <div className='col-span-4 flex justify-start px-2 py-[5px] rounded-sm bg-[#ffffff] w-[202px] gap-1'>
                    <img className='' src="/search.png" alt="" />
                    <input className='w-24 md:w-32' type="text" placeholder='Search incident' />
                </div>
                <div className='col-span-8 flex justify-center items-center space-x-3'>
                <p className='bg-[#ffffff] p-1.5 mr-[68px] rounded-sm'>{props.sort}</p>
                {/* <button  type="button" onClick={create}>
                <Button className="flex justify-center items-center gap-1"><span className='text-sm'>{props.plus}</span>{props.btnText}</Button>
                </button>

                {isCreate && <NewIncident create= {create} />} */}

                {/* {isCreate ? ( <NewIncident /> ) : ( <button  type="button" onClick={create}>
                <Button className="flex justify-center items-center gap-1"><span className='text-sm'>{props.plus}</span>{props.btnText}</Button>
                </button> )}*/}
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Hero