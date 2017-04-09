import fetch from 'isomorphic-fetch'

/*
 * A Javascript Class used to fetch data from the api.beta.tab.com.au API.
 */
class TabAPI {
  parseRaces (races) {
    return races.json()
  }

  fetchNextToGoRaces () {
    return fetch('http://localhost:4000/api/races/next-to-go', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    // return new Promise((resolve, reject) => {
    //   return resolve(response)
    // })
  }
}

const tabService = new TabAPI()

export default tabService
