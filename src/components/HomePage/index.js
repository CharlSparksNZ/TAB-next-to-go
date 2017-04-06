import React, {PropTypes, PureComponent} from 'react'

import RaceCard from '../RaceCard'

export default class HomePage extends PureComponent {
  static propTypes = {
    races: PropTypes.array
  }

  render () {
    const {races} = this.props
    return (
      <div>
        <h1>Welcome to the homepage</h1>
        {races.map(race => <RaceCard {...race} />)}
      </div>
    )
  }
}
