import fetch from 'isomorphic-fetch'

/*
 * A Javascript Class used to fetch data from the api.beta.tab.com.au API.
 */
class TabAPI {
  parseRaces (races) {
    return races.json()
  }

  fetchNextToGoRaces () {
    return fetch('//api.beta.tab.com.au/v1/tab-info-service/racing/next-to-go/races?jurisdiction=NSW') // @TODO jurisdiction hardcoded - pass as param
    .then(races => races.json())
  }
}

const tabService = new TabAPI()

export default tabService
