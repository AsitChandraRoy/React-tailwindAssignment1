import React from "react";
import IncidentHero from "../common/IncidentHero";
import { Container } from "../common/container";

export default function IncidentInput() {
  return (
    <>
      <IncidentHero function="Next step" />
      <Container>
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
      </Container>
    </>
  );
}
