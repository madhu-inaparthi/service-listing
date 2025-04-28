import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceCard from './components/ServiceCard'
import data from "../data.json"

function App() {
  const [services, setServices] = useState(data)

  return (
    <>
    {
      services.map((e)=>(
        <ServiceCard data={e} />
      ))
    }
    </>
  )
}

export default App
