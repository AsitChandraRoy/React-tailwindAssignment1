import React from 'react'
import IncidentHero from '../common/IncidentHero'
import { Container } from '../common/container'

export default function FinalIncident() {
  return (
    <>
        <IncidentHero function= "Finished" />
        <Container className="flex flex-col w-[752px] h-auto ps-1 sm:ps-0 ">
            <div>
                <h1 className='font-bold text-2xl pb-1 pt-7 '>Where’s the incident?</h1>
                <p className='text-sm w-[518px] h-auto text-lowLight pb-4 '>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
            </div>
            <div>
                <div>
                    <div className='mt-2.5 absolute '>
                        <div className='flex justify-start items-center gap-2 w-[224px] h-[42px] bg-white rounded-md border ms-2.5 mb-[5px] ps-2 '>
                            <img src="/search.png" alt="" />
                            <input className='text-xs text-lowLight' type="text" placeholder='Enter incident address or GPS' />
                        </div>
                        <div className='flex justify-start items-center gap-2 w-[224px] h-[42px] bg-white rounded-md border ms-2.5 ps-2 '>
                            <img src="/search.png" alt="" />
                            <input className='text-xs text-lowLight' type="text" placeholder='Pinpoint damage' />
                        </div>
                    </div>
                    <div className=''>
                        <img className=' -z-50 max-w-[100%] h-auto' src="/map.png" alt="" />
                        <img className='ms-[427px] -mt-[339px] ' src="/location1.png" alt="" />

                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}
