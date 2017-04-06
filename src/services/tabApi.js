import fetch from 'isomorphic-fetch'

import response from './tabMockResponse.json'

/*
 * A Javascript Class used to fetch data from the api.beta.tab.com.au API.
 */
class TabAPI {
  parseRaces (races) {
    return races.json()
  }

  fetchNextToGoRaces () {
    return new Promise((resolve, reject) => {
      return resolve(response)
    })
  }
}

const tabService = new TabAPI()

export default tabService
