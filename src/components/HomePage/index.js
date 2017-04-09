import React, {PropTypes, PureComponent} from 'react'

import RaceCard from '../RaceCard'
import css from './styles.scss'

export default class HomePage extends PureComponent {
  static propTypes = {
    races: PropTypes.array
  }

  render () {
    const {races} = this.props

    return (
      <div>
        <h1 className={css.header}>Welcome to the homepage</h1>
        <div className={css.container}>
          {races.map(race => {
            const {meeting, raceNumber, raceName} = race

            return (
              <RaceCard {...race} key={`${meeting.location}-${raceName}:${raceNumber}`} />
            )
          })}
        </div>
      </div>
    )
  }
}
