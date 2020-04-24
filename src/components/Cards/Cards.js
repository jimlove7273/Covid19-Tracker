import React, { useContext, useEffect } from 'react'
import { CovidContext } from '../../context/CovidContext'

import CountUp from 'react-countup';

import styles from './Cards.module.css'


const Cards = () => {

  const covidContext = useContext(CovidContext)

  useEffect(() => {
    covidContext.getSummary()
  }, [])


  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Infected</div>
        <div className={styles.count}>
          <CountUp start={0} end={covidContext.summary.confirmed} separator="," />
        </div>
        <div className={styles.lastupdate}>Last Update: {new Date(covidContext.summary.lastupdated).toDateString()}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Recovered</div>
        <div className={styles.count}>
          <CountUp start={0} end={covidContext.summary.recovered} separator="," />
        </div>
        <div className={styles.lastupdate}>Last Update: {new Date(covidContext.summary.lastupdated).toDateString()}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Deaths</div>
        <div className={styles.count}>
          <CountUp start={0} end={covidContext.summary.deaths} separator="," />
        </div>
        <div className={styles.lastupdate}>Last Update: {new Date(covidContext.summary.lastupdated).toDateString()}</div>
      </div>
    </div>
  )
}

export default Cards
