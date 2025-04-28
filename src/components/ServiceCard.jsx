import React from 'react'
import "./ServiceCard.css"

const ServiceCard = ({data}) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{data.description}</h2>
    </div>
  )
}

export default ServiceCard
