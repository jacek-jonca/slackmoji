export default class SlackAdapter {

  static getSlackmoji() {
    const url = process.env.REACT_APP_API_URL
    return fetch(url)
      .then(r=> r.json())
  }

}