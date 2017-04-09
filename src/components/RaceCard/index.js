import React, {PropTypes, PureComponent} from 'react'
import moment from 'moment'

import css from './styles.scss'

export default class RaceCard extends PureComponent {
  static propTypes = {
    raceName: PropTypes.string.isRequired,
    raceStartTime: PropTypes.string.isRequired,
    meeting: PropTypes.object.isRequired
  }

  render () {
    const {
      raceName, raceStartTime, meeting
    } = this.props

    const countdown = moment(raceStartTime).fromNow()

    return (
      <div className={css.card}>
        <div className={css.cardContainer}>
          <h3 className={css.name}>{raceName}</h3>
          <h4 className={css.countdown}>Closes {countdown}</h4>
          <br />
          <div>{meeting.location}</div>
        </div>
      </div>
    )
  }
}
