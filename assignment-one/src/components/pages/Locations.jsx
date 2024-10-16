import React from 'react'
import Hero from '../common/hero'
import CardBody from '../Dashboard/CardBody'

function Locations() {
  return (
    <>
        <Hero direction="Home - Locations" itemName="Locations" sort="Sort By: Date modified" plus="+" btnText="New Location" />
        <CardBody />
    </>
  )
}

export default Locations