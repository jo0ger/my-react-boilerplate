import React from 'react'
import { render } from 'react-dom'
import AppContainer from '~containers/AppContainer'

const MOUNT_NODE = document.getElementById('root')
console.log(module.hot)
render(
  <AppContainer />,
  MOUNT_NODE
)
