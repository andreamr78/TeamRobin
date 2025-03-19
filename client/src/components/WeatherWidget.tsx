import React from 'react'
import { useState, useEffect } from 'react';
import { WeatherApi } from '../utils/API';
import type { weatherApiData } from '../models/WeatherApi';
import Card from 'react-bootstrap/Card';
import { WiCloudyWindy } from "react-icons/wi";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoRainyOutline } from "react-icons/io5";

function WeatherWidget({ city }: { city: string }) {
    const [weatherValue, setWeatherValue] = useState<weatherApiData>();
    useEffect(() => {
      handleChange(city)
    }, [])
    
    const handleChange = async (city:string) => {
        try {
            const res = await WeatherApi(city);
            const items = await res.json();
            const weatherData : weatherApiData = {
                city: items.name,
                tempeture: items.main.feels_like,
                humidity: items.main.humidity,
                wind: items.wind.speed
            }
            setWeatherValue(weatherData)
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{weatherValue?.city}</Card.Title>
        <Card.Text>
            <p><IoPartlySunnyOutline size={40}/> {weatherValue?.tempeture}°</p>
            <p><IoRainyOutline size={40}/> {weatherValue?.humidity}% Humidity</p>
            <p><WiCloudyWindy size={40}/> {weatherValue?.wind} km/h</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default WeatherWidget