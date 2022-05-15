import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelectorTS } from '../../../store/hooks.ts'
import css from './API.module.css'

type City = {
    name: string,
    lat: number,
    lon: number,
    country?: string
}

type Weather = {
    name: string,
    temp: string,
    pressure: string,
    humidity: string
}

const API_TS: React.FC = () => {

    const apiKey: string = useSelectorTS(state => state.apiReducer.apiKey)

    const [itLoading, setItLoading] = useState(true)
    const [weather, setWeather] = useState<Weather>(
        { name: '', temp: '', pressure: '', humidity: '' }
    )

    const [currentCity, setCurrentCity] = useState<City>(
        { name: 'Khabarovsk', lat: 48.515, lon: 135.101 }
    )

    const [searchCity, setSearchCity] = useState('')
    const [resultSearch, setResultSearch] = useState([])


    useEffect(() => { fetchWeather() }, [currentCity])


    async function fetchWeather() {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentCity.lat}&lon=${currentCity.lon}&lang=ru&units=metric&appid=${apiKey}`)
        const data: Weather = {
            name: response.data.name,
            temp: response.data.main.temp,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity
        }
        setWeather(data)
        setItLoading(false)
    }

    async function searchingCity() {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${apiKey}`)
        let data = response.data.map(item => {
            return {
                name: item.name,
                lat: item.lat,
                lon: item.lon,
                country: item.country
            }
        })
        setResultSearch(data)
    }

    return (
        <div className={css.api}>
            <h1>API</h1>
            <span>www.openweathermap.org</span>
            <main>
                <div >
                    {itLoading
                        ? <h2>Loading</h2>
                        : <div className={css.weather}>
                            <span>{weather.name}</span>
                            <span>{`${weather.temp} ${String.fromCharCode(176)}C`}</span>
                            <span>{`Давление ${weather.pressure} р.ст.`}</span>
                            <span>{`Влажность ${weather.humidity}%`}</span>
                        </div>
                    }
                </div>
                <div className={css.search}>
                    <input type='text' onChange={(event) => setSearchCity(event.target.value)} />
                    <button className={css.searchButton} onClick={() => searchingCity()}>Поиск</button>
                </div>
                <div className={css.results}>
                    {!resultSearch
                        ? <h4>-</h4>
                        : resultSearch.map((item, index) =>
                            <button
                                key={index}
                                onClick={() => setCurrentCity(item)}
                                className={css.city}>
                                {item.name}
                                <br></br>
                                {item.country}
                            </button>)
                    }
                </div>
            </main>
        </div>
    )
}

export default API_TS