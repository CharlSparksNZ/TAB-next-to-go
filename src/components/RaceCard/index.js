import React, {PropTypes, PureComponent} from 'react'

export default class RaceCard extends PureComponent {
  static propTypes = {
    raceName: PropTypes.string.isRequired,
    raceNumber: PropTypes.number.isRequired,
    raceDistance: PropTypes.string.isRequired
  }

  render () {
    const {raceName, raceNumber, raceDistance} = this.props

    return (
      <div>
        <h3>{raceName}</h3>
        <small>{raceNumber}</small>
        <br />
        <small>{raceDistance}</small>
      </div>
    )
  }
}
