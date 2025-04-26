import React from 'react'
import "./About.css";
import Property from '../misc/Property';
import Building3D from '../misc/Building3D'; 
import properties from "../../datas/properties"
import buildings3d from "../../datas/buildings3d" 
import { useEffect } from 'react';

const MarketPlace = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <React.Fragment>
      <section className="about">
        <h1 className='page-heading'>MarketPlace</h1>
        <div className="market-contents">
          <div className="pr-header">
            <h3 id="properties">Among our properties already financed</h3>
            <h3 className="cl-blue">View All</h3>
          </div>
          <div className="properties">
            {properties.map((property) => <Property key={property.id} property={property} />)}
          </div>

        
        
          <div className="pr-header" style={{ marginTop: '40px' }}>
            <h3 id="properties">3D Building Models</h3>
            <h3 className="cl-blue">View All</h3>
          </div>
          <div className="buildings-3d">
            {buildings3d.map((building) => (
              <Building3D key={building.id} building={building} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default MarketPlace;