import React, {PropTypes, PureComponent} from 'react'

import css from './styles.scss'

export default class RaceCard extends PureComponent {
  static propTypes = {
    raceName: PropTypes.string.isRequired,
    raceNumber: PropTypes.number.isRequired,
    raceDistance: PropTypes.number.isRequired
  }

  render () {
    const {raceName, raceNumber, raceDistance} = this.props

    return (
      <div className={css.card}>
        <h3>{raceName}</h3>
        <small>{raceNumber}</small>
        <br />
        <small>{raceDistance}</small>
      </div>
    )
  }
}
