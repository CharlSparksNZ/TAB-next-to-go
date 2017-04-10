import React, {PropTypes, PureComponent} from 'react'

import RaceCard from '../RaceCard'
import ButtonLink from '../Buttons/Link'
import css from './styles.scss'

import * as raceTypes from 'src/constants/raceTypes'

export default class HomePage extends PureComponent {
  static propTypes = {
    races: PropTypes.array,
    currentFilter: PropTypes.string,
    handleClick: PropTypes.func.isRequired
  }

  render () {
    const {races, currentFilter, handleClick} = this.props

    return (
      <div>
        <h1 className={css.header}>Next to go races</h1>
        <ul className={css.filters}>
          {Object.keys(raceTypes).map(filter => {
            const isActive = filter === currentFilter
            return (
              <li className={css.filterItem}>
                <ButtonLink
                  label={filter}
                  handleClick={handleClick}
                  linkValue={filter}
                  active={isActive} />
              </li>
            )
          })}
        </ul>
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
