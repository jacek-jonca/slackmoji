import axios from 'axios'

export default class SlackAdapter {

  static getSlackmoji() {
    const url = process.env.REACT_APP_API_URL
    return axios.get(url)
      .then(r => r.data.body)
  }
}