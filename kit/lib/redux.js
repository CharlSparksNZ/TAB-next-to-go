import { createStore, combineReducers, compose } from 'redux'

export default function createNewStore () {
  const store = createStore(
    combineReducers({
      apollo: null
    }),
    // Initial server state, provided by the server.  Only relevant in the
    // browser -- on the server, we'll start with a blank object

    // eslint-disable-next-line no-underscore-dangle
    !SERVER ? window.__STATE__ : {}, // initial state
    compose(
        // Enable Redux Devtools on the browser, for easy state debugging

        // eslint-disable-next-line no-underscore-dangle
        (!SERVER && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )

  return store
}
