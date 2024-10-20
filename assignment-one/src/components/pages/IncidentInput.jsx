import React, { useState } from "react";
import IncidentHero from "../common/IncidentHero";
import { Container } from "../common/container";
import { Button } from "../common/button";
import FinalIncident from "./finalIncident";

export default function IncidentInput({ Back }) {
  const [isCreate, setIsCreate] = useState(false);
  const create = () => setIsCreate(!isCreate);
  return (
    <>
        {!isCreate && <IncidentHero />}

        {isCreate ? < FinalIncident goBack={create} /> : (<div className="flex justify-end -mt-[70px] mr-12 items-center space-x-1 sm:space-x-3">
          <button type="button" onClick={Back}>
            <Button className="bg-[#ffffff] text-black opacity-70 border">
              Back
            </Button>
          </button>
              <button  type="button" onClick={create}>

              <Button>Next step</Button>
              </button>
            </div>)}

        {!isCreate && <Container className="mt-24">
        <div className="mx-auto w-[752px] h-auto flex flex-col justify-center items-center mt-5">
          <div>
            <h1 className="py-2 font-bold text-2xl">Let’s give the incident a title?</h1>
            <p className="text-lowLight text-sm pb-3">Make a title that will easily identify the incidents</p>
            <input
              className="bg-card w-[752px] h-[50px] p-3 rounded-md text-xs "
              type="text"
              placeholder="Add title here"
            />
          </div>
          <div>
            <h1 className="py-2 font-bold text-2xl mt-3">Describe what happened during the incident?</h1>
            <p className="text-lowLight text-sm pb-3">
              Share some information about the incident. The when, where, how.
            </p>
            {/* <input className='bg-card w-[752px] h-[127px] rounded-md  ' type="text" placeholder='Type here' /> */}
            <textarea
              className="bg-card w-[752px] h-[127px] p-3 rounded-md text-xs "
              name="input"
              placeholder="Type here"
            ></textarea>
          </div>
        </div>
      </Container> }


    </>
  );
}
