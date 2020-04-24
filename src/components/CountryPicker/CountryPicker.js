import React, { useContext, useEffect } from 'react'
import { CovidContext } from '../../context/CovidContext'

import styles from './CountryPicker.module.css'

const CountryPicker = () => {

  const covidContext = useContext(CovidContext)

  // -- call the getCountries from Context Provider to get list of Countries
  useEffect(() => {
    covidContext.getCountries()
    //console.log("CountryPicker.js")
  }, [])


  const chgcountry = (selcountry) => {
    covidContext.chgCountry(selcountry)
  }


  return (

    <div className={styles.container}>
    <form className="form-horizontal">
    <div className="form-group">
      <div className="col-3 col-sm-12">
        <label className="form-label" htmlFor="input-example-1"><b>Select Country</b></label>
      </div>
      <div className="col-9 col-sm-12">
        <select id="selcountry" value={covidContext.selectedcountry} className="form-select" onChange={(e) => chgcountry(e.target.value)}>
          <option value="">Choose a Country</option>
          {
            Object.values(covidContext.countries)
              .map((countrydata) => <option key={countrydata.iso2} value={countrydata.name}>{countrydata.name}</option>)
          }
        </select>
      </div>
    </div>
    </form>
    </div>

  )
}

export default CountryPicker
