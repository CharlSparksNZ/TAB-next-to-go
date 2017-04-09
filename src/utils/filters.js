import {ALL, GREYHOUNDS, THOROUGHBRED, HARNESS} from 'src/constants/raceTypes'

export function filterRaces (races, raceType) {
  let filter = null

  switch (raceType) {
    case GREYHOUNDS:
      filter = 'G'
      break
    case THOROUGHBRED:
      filter = 'R'
      break
    case HARNESS:
      filter = 'H'
      break
    default:
      filter = ALL
  }

  if (filter !== ALL) {
    return races.filter(race => race.meeting.raceType === filter)
  }

  return races
}
