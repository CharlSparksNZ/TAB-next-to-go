import tabApi from 'src/services/api'
import moment from 'moment'

import {
  FETCH_TAB_NEXT_TO_GO_RACES
} from './types'

function sortRaces (race, nextRace) {
  if (moment(race.raceStartTime).isBefore(nextRace.raceStartTime)) {
    return -1
  }

  return 1
}

export function fetchNextToGoRaces () {
  return dispatch => {
    tabApi.fetchNextToGoRaces()
    .then(data => {
      data.races.sort(sortRaces)

      dispatch({
        type: FETCH_TAB_NEXT_TO_GO_RACES,
        payload: data
      })
    })
  }
}
