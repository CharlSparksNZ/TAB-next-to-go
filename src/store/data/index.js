import {
  FETCH_TAB_NEXT_TO_GO_RACES,
  SET_RACE_FILTER
} from './types'

export const tabReducer = (state = {
  filter: 'ALL'
}, action) => {
  switch (action.type) {
    case FETCH_TAB_NEXT_TO_GO_RACES:
      return {
        ...state,
        data: action.payload
      }
    case SET_RACE_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state
  }
}

export default tabReducer
