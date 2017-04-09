import React, {PropTypes, PureComponent} from 'react'
import moment from 'moment'

import css from './styles.scss'

export default class RaceCard extends PureComponent {
  static propTypes = {
    raceName: PropTypes.string.isRequired,
    raceNumber: PropTypes.number.isRequired,
    raceStartTime: PropTypes.string.isRequired,
    meeting: PropTypes.object.isRequired
  }

  render () {
    const {
      raceName, raceNumber, raceStartTime, meeting
    } = this.props

    const countdown = moment(raceStartTime).fromNow()

    return (
      <div className={css.card}>
        <div>
          <h3 className={css.name}>{raceName}</h3>
          <small>{raceNumber}</small>
        </div>
        <h4>Closes {countdown}</h4>
        <br />
        <div>{meeting.location}</div>
      </div>
    )
  }
}
