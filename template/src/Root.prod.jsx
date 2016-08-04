import './css/base/reset.css'

import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import routes from './routes'
import App from './containers/App'

let store = configureStore()

class Root extends Component {
  render() {
    const { store, routes } = this.props

    return (
      <Provider store={store}>
          {routes}
      </Provider>
    )
  }
}

Root.propTypes = {
    store: PropTypes.object,
    routes: PropTypes.object
}

render(<Root store={store} routes={routes} />, document.getElementById('app'))
