import React from 'react'
import './HomeView'
import DuckImage from '../assets/Duck.jpg'

const HomeView = () => {
  return (
    <div>
      <h4>This is a duck, because Redux!</h4>
      <img className='duck' src={DuckImage} alt="duckImg"/>
    </div>
  )
}

export default HomeView
