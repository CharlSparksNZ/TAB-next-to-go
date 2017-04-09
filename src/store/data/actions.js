import tabApi from 'src/services/api'

import {
  FETCH_TAB_NEXT_TO_GO_RACES
} from './types'

export function fetchNextToGoRaces () {
  return dispatch => {
    tabApi.fetchNextToGoRaces()
    .then(races => {
      console.log(races)
      dispatch({
        type: FETCH_TAB_NEXT_TO_GO_RACES,
        payload: races
      })
    })
  }
}
