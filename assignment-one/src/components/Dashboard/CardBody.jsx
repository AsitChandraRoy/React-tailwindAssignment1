import React, { useState } from "react";
import { Container } from "../common/container";
import { cardDetails } from "../../lib/db";
import PopUpPage from "../pages/PopUpPage";

function CardBody() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggler = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="lg:mt-1 md:mt- sm:mt-32 mt-24 bg-white h-full">
        <div
          className="grid grid-cols-12 gap-7 py-7 px-4
             sm:px-6 md:px-8 xl:px-10"
        >
          {cardDetails.map(
            ({ img, image, text, cardTitle, address, amount }, i) => (
              <div
                key={i}
                className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 hover:scale-105 transition-all duration-300"
              >
                <div className="text-xs font-bold">
                  <div className="flex flex-row-reverse">
                    <div className="absolute -z-10 me-3 mt-[10px] p-[10px] rounded-[40px] flex gap-1 bg-white">
                      <img src={img} alt="" />
                      <p>{text}</p>
                    </div>
                  </div>
                  <img className="w-[700px] relative z-0" src={image} alt="" />
                </div>
                <div className="mt-1 leading-[30px]">
                  <h1 className="text-[16px] font-bold">{cardTitle}</h1>
                  <p className="text-sm text-lowLight">{address}</p>
                  <h1 className="font-bold text-[16px]">{amount}</h1>
                </div>
              </div>
            )
          )}
        </div>
        {/* <div className="flex flex-row-reverse">
          <button
            onClick={toggler}
            className="flex justify-center items-center rounded-full me-20 mb-24 h-[77px] w-[77px] bg-warning font-footC text-white text-[55px] opacity-90 transition-all delay-160 hover:opacity-100"
          >
            c
          </button>
        </div>
        {isOpen && <PopUpPage toggler={toggler} />} */}
      </Container>
    </>
  );
}

export default CardBody;
