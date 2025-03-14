import React from 'react'
import WeatherWidget from './components/WeatherWidget'
function App() {
  var city = 'Chicago'
  return (
    <div>
      <WeatherWidget city={city}/>
    </div>
  )
}

export default App