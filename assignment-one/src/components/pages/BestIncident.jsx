import React from "react";
import IncidentHero from "../common/IncidentHero";
import { Container } from "../common/container";
import { bestIncident } from "../../lib/db";

export default function BestIncident() {
  return (
    <>
        <IncidentHero function="Next step" />
        <Container>
            <div className="mx-auto h-auto w-[753px] flex flex-col justify-center items-start p-1 sm:p-0 ">
                <div className="mt-4">
                    <h1 className="font-bold text-sm sm:text-2xl py-3">Which of these best describes the incident?</h1>
                </div>

                <div className="grid grid-cols-12 items-center gap-1">
                    {bestIncident.map(({img, des}, i)=>(
                    <div key={i} className="col-span-6 sm:col-span-3 flex items-center ps-4 gap-3 bg-card w-[166px] sm:w-[180px] h-[69px] border rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-300 ">
                        <img src={img} alt="" />
                        <p className="text-sm text-lowLight">{des}</p>
                    </div>

                    ))}

                </div>
            </div>
        </Container>
    </>
  );
}
