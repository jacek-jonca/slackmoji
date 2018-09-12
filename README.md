# SlackMoji

My coworkers regularly use Bitmoji on Slack, but we struggle finding commands supported by the Bitmoji API. SlackMoji queries the Bitmoji API and displays the results. The Bitmoji comics are searchable by tags and can also be sorted into commands which support multiple people and commands which do not. Since the Bitmoji API only supports JavaScript requests from the same origin, this React frontend calls an AWS endpoint I configured to run a Lambda requesting information from the Bitmoji API using Python. The endpoint serves the response from the BitMoji API (after filtering out duplicates) to my React application. Since there are thousands of results, I debounced the search function so that it won't refilter the comics for each character typed in the searchbar. I also created a loading screen to display while the data is being fetched.

![SlackMoji Demo](https://nikym.org/img/slackmoji.gif)
