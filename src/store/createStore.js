import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'

export const createStoreWithMiddleware = (initialState = {}) => {
  const middleWare = [
    thunk
  ]
  const enhanders = []
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension
    const DevTools = require('~components/DevTools').default
    if (typeof devToolsExtension === 'function') {
      enhanders.push(devToolsExtension)
    }
    enhanders.push(DevTools.instrument())
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleWare),
      ...enhanders
    )
  )

  return store
}

export default createStoreWithMiddleware
