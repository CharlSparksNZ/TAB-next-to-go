import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePage from '../components/HomePage'

import {fetchNextToGoRaces} from '../store/data/actions'

class HomePageContainer extends Component {
  static propTypes = {
    races: PropTypes.array,
    fetchNextToGoRaces: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.fetchNextToGoRaces()
  }

  render () {
    const {races} = this.props
    return (
      <HomePage races={races} />
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchNextToGoRaces}, dispatch)
}

function mapStateToProps (state) {
  return {
    races: state.data.races
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
