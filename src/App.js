import React from 'react'

// -- Import the Components
import { Cards, Chart, CountryPicker } from './components/index'

// -- Import Third-Party Components
import 'spectre.css'

// -- Import Local Assets
import logo from './images/covid19.jpg'
import styles from './App.module.css'
import { CovidProvider } from './context/CovidContext'


const App = () => {
  return (
    <CovidProvider>
      <div className={styles.container}>
        <center><img className={styles.covid19logo} src={logo} alt="Covid-19 Logo" /></center>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    </CovidProvider>
  )
}

export default App