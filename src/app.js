// ----------------------
// IMPORTS

// React
import React from 'react'

// Routing
import {Route} from 'react-router-dom'

// <Helmet> component for setting the page title
import Helmet from 'react-helmet'

import HomePageContainer from './containers/HomePage'

// Styles
import css from './styles.css'

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div className={css.app}>
    <Helmet
      title='Next to Go App'
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app'
      }]} />
    <Route exact path='/' component={HomePageContainer} />
  </div>
)
