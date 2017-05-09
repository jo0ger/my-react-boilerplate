import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.styl'

export const Header = () => {
  return (
    <div>
      <h1>React Starter Kit</h1>
      <h2><a href='https://bodyno.com' target='_blank'>bodyno</a></h2>
      <NavLink to='/' activeClassName='route--active'>
        Home
      </NavLink>
      {' · '}
      <NavLink to='/counter' activeClassName='route--active'>
        Counter
      </NavLink>
      {' · '}
      <NavLink to='/zen' activeClassName='route--active'>
        Zen
      </NavLink>
      {' · '}
      <NavLink to='/elapse' activeClassName='route--active'>
        Elapse
      </NavLink>
      {' · '}
      <NavLink to='/route/88' activeClassName='route--active'>
        Route
      </NavLink>
      {' · '}
      <NavLink to='/notFound' activeClassName='route--active'>
        404
      </NavLink>
    </div>
  )
}

export default Header
