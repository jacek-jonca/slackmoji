# SlackMoji

My coworkers regularly use Bitmoji on Slack, but we struggle finding commands supported by the Bitmoji API. SlackMoji queries the Bitmoji API and displays the commands that are available to use for Bitmoji on Slack. The Bitmoji comics are searchable by tags and can also be sorted into commands which support multiple avatars and commands which do not.

Clicking on a tag returns Bitmojis with the same tag. The tags copy to clipboard so they are ready to paste into Slack, i.e. `/bitmoji toilet of love`.  Also, If you get tired of seeing the default avatar, you can paste a link to a comic with your own avatar and replace it.

Since the Bitmoji API blocks CORS, this React frontend calls an AWS endpoint configured to run a Lambda in Python requesting information from the Bitmoji API. The endpoint serves the response from the Bitmoji API (after filtering out duplicates) to the React application. Since there are thousands of results, the search function is debounced so that it won't refilter the comics for each character typed in the searchbar. There is also a loading screen to display while the data is being fetched.

[SlackMoji Demo](https://slackmoji.firebaseapp.com)

![SlackMoji Gif](https://nikym.org/img/slackmoji.gif)
