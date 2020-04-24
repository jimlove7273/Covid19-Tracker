import React, { createContext, useState } from 'react'

export const CovidContext = createContext([])



export const CovidProvider = props => {

  const APIUrl = "https://covid19.mathdro.id/api"

  const [datatype, setDatatype] = useState('summary')
  const [selectedcountry, setSelectedcountry] = useState('')
  const [countries, setCountries] = useState([])
  const [daily, setDaily] = useState([])
  const [summary, setSummary] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    lastupdated: ''
  })

  const getSummary = () => {
    fetch(APIUrl)
    .then(res => res.json())
    .then(data => {
      setDatatype("summary")
      setSelectedcountry('')
      setSummary({
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastupdated: data.lastUpdate
      })
    })
  }

  const getCountries = () => {
    fetch(APIUrl+"/countries")
    .then(res => res.json())
    .then(data => {
      //console.log("Check Data", data.countries)
      setCountries(data.countries)
    })
  }

  const getDaily = () => {
    fetch(APIUrl+"/daily")
    .then(res => res.json())
    .then(data => {
      //console.log("Daily Data", data)
      setDaily(data)
    })
  }

  const chgCountry = (selcountry) => {

    (selcountry === "") ?

      getSummary()

    :

    fetch(APIUrl+"/countries/"+selcountry)
    .then(res => res.json())
    .then(data => {
      setDatatype("country")
      setSelectedcountry(selcountry)
      setSummary({
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastupdated: data.lastUpdate
      })
    })

  }


  const returnVal = {
    APIUrl, countries, setCountries, getCountries, summary, getSummary, chgCountry,
    daily, setDaily, getDaily, datatype, setDatatype,
    selectedcountry, setSelectedcountry
  }

  return (
    <CovidContext.Provider value={returnVal}>
      {props.children}
    </CovidContext.Provider>
  )
}