import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import tabData from 'src/store/tabData'

export default function createNewStore () {
  const store = createStore(
    combineReducers({
      tabData
    }),
    // Initial server state, provided by the server.  Only relevant in the
    // browser -- on the server, we'll start with a blank object

    // eslint-disable-next-line no-underscore-dangle
    !SERVER ? window.__STATE__ : {}, // initial state
    compose(
        applyMiddleware(thunk),
        // Enable Redux Devtools on the browser, for easy state debugging
        // eslint-disable-next-line no-underscore-dangle
        (!SERVER && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )

  return store
}
