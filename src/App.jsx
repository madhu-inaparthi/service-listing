import { useState } from 'react'
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
