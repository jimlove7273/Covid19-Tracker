import React from 'react'

const url = "https://covid19.mathdro.id/api"

export const fetchAll = () => {

  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

}

export const getCountries = () => {

  fetch(url+"/countries")
    .then(res => res.json())
    .then(data => console.log(data))

}