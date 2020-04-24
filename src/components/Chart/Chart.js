import React, { useContext, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

import { CovidContext } from '../../context/CovidContext'

const Chart = () => {

  const covidContext = useContext(CovidContext)

  const confirmed = [], deaths = [], reportdate = []
  
  useEffect(() => {
    covidContext.getDaily()

    covidContext.daily.map((dailydata) => {
      confirmed.push(dailydata.confirmed.total)
      deaths.push(dailydata.deaths.total)
      reportdate.push(dailydata.reportDate)
    })
  }, [])


  return (
    <>

    <div className={styles.title}>Infection vs Death Comparison</div>

    {covidContext.datatype === "summary" ?

    <>
    <p>{covidContext.datatype}</p>
      <Line
        data={{
          labels: Object.values(covidContext.daily).map((daily) => daily.reportDate),
          datasets: [{
            data: Object.values(covidContext.daily).map((daily) => daily.confirmed.total),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true
          }, {
            data: Object.values(covidContext.daily).map((daily) => daily.deaths.total),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
          }]
        }}
      />
    </>

    :
      <Bar 
        data={{
          labels: ['Infected', 'Recovered', 'Death'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)'
            ],
            data: [
              covidContext.summary.confirmed,
              covidContext.summary.recovered,
              covidContext.summary.deaths
            ]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current State in ${covidContext.selectedcountry}`}
        }}
      />
    }
    <br /><br />

    </>

  )
}

export default Chart