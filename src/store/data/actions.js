import api from 'src/services/api'
import moment from 'moment'

import {
  FETCH_TAB_NEXT_TO_GO_RACES,
  SET_RACE_FILTER
} from './types'

function sortRaces (race, nextRace) {
  if (moment(race.raceStartTime).isBefore(nextRace.raceStartTime)) {
    return -1
  }

  return 1
}

export function fetchNextToGoRaces () {
  return dispatch => {
    api.fetchNextToGoRaces()
    .then(data => {
      data.races.sort(sortRaces)

      dispatch({
        type: FETCH_TAB_NEXT_TO_GO_RACES,
        payload: data.races
      })
    })
  }
}

export function changeFilter (filter) {
  return {
    type: SET_RACE_FILTER,
    payload: filter
  }
}
