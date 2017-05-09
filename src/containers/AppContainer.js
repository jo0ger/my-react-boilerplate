import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

class AppContainer extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  
  render () {
    const { store, routes } = this.props
    return (
      <Provider store={store}>
        <Router children={routes} />
      </Provider>
    )
  }

}

export default AppContainer
