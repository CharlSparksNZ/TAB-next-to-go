// ----------------------
// IMPORTS

// React
import React from 'react'

// Routing
import { Link, Route } from 'react-router-dom'

// <Helmet> component for setting the page title
import Helmet from 'react-helmet'

import HomePageContainer from './containers/HomePage'

// Styles
import css from './styles.css'

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
const Page = ({ match }) => (
  <h1>Changed route: {match.params.name}</h1>
)

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.object
  }).isRequired
}

const Message = ({ data }) => {
  const message = data.allMessages && data.allMessages[0].text
  const isLoading = data.loading ? 'yes' : 'nope'
  return (
    <div>
      <h2>Message from GraphQL server: <em>{message}</em></h2>
      <h2>Currently loading?: {isLoading}</h2>
    </div>
  )
}

// Add propTypes for React to expect data from GraphQL
Message.propTypes = {
  data: {
    allMessages: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        text: React.PropTypes.string.isRequired
      }).isRequired
    )
  }
}

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div>
    <Helmet
      title='Next to Go App'
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app'
      }]} />
    <div className={css.hello} />
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/page/about'>About</Link></li>
      <li><Link to='/page/contact'>Contact</Link></li>
    </ul>
    <Route path='/page/:name' component={Page} />
    <Route exact path='/' component={HomePageContainer} />
  </div>
)
