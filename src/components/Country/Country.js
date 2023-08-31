import React from 'react';
import './Country.css'
const Country = (props) => {
    const { flags, name, population, region, area
    } = props.country
    return (
        <div className='container bg-warning' >
            <img className='flags' src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <h4>Population: {population}</h4>
            <h3>Region: {region}</h3>
            <h4>Area: {area}</h4>
        </div >
    );
};

export default Country;