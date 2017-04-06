import tabApi from 'src/services/tabApi'

import {
  FETCH_TAB_NEXT_TO_GO_RACES
} from './types'

export function fetchNextToGoRaces () {
  return dispatch => {
    tabApi.fetchNextToGoRaces()
    .then(races => dispatch({
      type: FETCH_TAB_NEXT_TO_GO_RACES,
      payload: races
    }))
  }
}
