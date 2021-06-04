import React from 'react';
import countries from '../../data/countries.json';
import './CountryList.scss'

function CountryList({searchCountry}) {
    return (
        <ul className='country-list-container'>
            {countries.filter((country) => {
                if (searchCountry === ''){
                    return country
                }
                else if (country.Country.toLowerCase().includes(searchCountry.toLowerCase())){
                    return country
                }
            }).map((country, i) => {
                return(
                    <li className="country-list" key={i}>
                        {country.Country}
                    </li>
                )
            })}
            
        </ul>
    );
}

export default CountryList;