import React, { useState } from "react";
import Hero from "../common/hero";
import CardBody from "../Dashboard/CardBody";
import NewIncident from "./NewIncident";
import { Button } from "../common/button";

function Incidents() {
  const [isCreate, setIsCreate] = useState(false);
  const create = () => setIsCreate(!isCreate);
  return (
    <>
      {/* <Hero
        direction="Home - Incidents"
        itemName="Incidents"
        sort="Sort By: Date modified"
        plus="+"
        btnText="New Incident"
      >
      </Hero> */}
      {!isCreate && (
        <Hero
          direction="Home - Incidents"
          itemName="Incidents"
          sort="Sort By: Date modified"
          plus="+"
          btnText="New Incident"
        />
      )}
      {isCreate ? (
        <NewIncident />
      ) : (
        <div className="flex justify-end -mt-[99px] mr-10">
          {" "}
          <button
            className="flex justify-center items-center gap-1 font-bold px-3 py-[.4px] bg-warning opacity-90 transition-all delay-160 hover:opacity-100 text-white rounded-md text-xs md:text-[12px]"
            type="button"
            onClick={create}
          >
            <span className="text-xl">+</span>New Incident
          </button>
        </div>
      )}
      {!isCreate && <div id="white" className="h-[38px]"></div>}
      {/* <div id="white" className="h-[38px]"></div> */}
      {!isCreate && <CardBody />}
    </>
  );
}

export default Incidents;
