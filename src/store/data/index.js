import {
  FETCH_TAB_NEXT_TO_GO_RACES
} from './types'

export const tabReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TAB_NEXT_TO_GO_RACES:
      return action.payload
    default:
      return state
  }
}

export default tabReducer
