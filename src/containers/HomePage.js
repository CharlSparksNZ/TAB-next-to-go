import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'

import HomePage from '../components/HomePage'

import {fetchNextToGoRaces, changeFilter} from '../store/data/actions'

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  }
})

class HomePageContainer extends Component {
  static propTypes = {
    races: PropTypes.array,
    fetchNextToGoRaces: PropTypes.func.isRequired
  }

  constructor () {
    super()

    this.state = {
      currentTime: new Date()
    }

    this.timer = null

    this.handleClick = this.handleClick.bind(this)
    this.getCurrentTime = this.getCurrentTime.bind(this)
  }

  componentWillMount () {
    this.props.fetchNextToGoRaces()
  }

  componentDidMount () {
    this.getCurrentTime()
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  getCurrentTime () {
    this.timer = setTimeout(this.getCurrentTime, 1000)

    this.setState({
      currentTime: new Date()
    })
  }

  handleClick (filter) {
    this.props.changeFilter(filter)
  }

  render () {
    const {races} = this.props
    const {currentTime} = this.state

    if (!races) {
      return <div>...Loading...</div>
    }

    const currentRaces = races.filter(race => moment(race.raceStartTime).isAfter(moment())).slice(0, 5)

    return (
      <HomePage races={currentRaces} currentTime={moment(currentTime)} handleClick={this.handleClick} />
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchNextToGoRaces, changeFilter}, dispatch)
}

function mapStateToProps (state) {
  return {
    races: state.races.data,
    filter: state.races.filter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
