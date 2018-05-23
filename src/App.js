import React, { Component } from 'react';
import FeedList from './FeedList.js';
import Header from './Header.js';
import './App.css';
import 'whatwg-fetch'

const API_URL = 'https://api.rss2json.com/v1/api.json';
const API_KEY = 'q9cayrt4ahrde14ijfdelmhwmlw7odstwermcwqh';

class App extends Component {
  constructor() {
    super();
    this.state = {
      source: 'https://news.ycombinator.com/rss',
      filterTag: null,
      feeds: [{guid: 1, title:'No feeds', url:'#'}]
    }
  }

  componentDidMount() {
    this.fetch_feeds()
  }

  fetch_feeds() {
    let call_url = API_URL + '?rss_url=' + encodeURI(this.state.source) + '&api_key=' + API_KEY + '&count=30';
    console.log(call_url);
    fetch(call_url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      this.setState({feeds: responseData.items});
      console.log(this.state.feeds)
    })
    .catch((error) => {
      console.log('Error getting feed.', error)
    })
  }

  setFilter(tag) {
    this.setState({filterTag: tag});
  }

  render() {
    return (
      <div className="App">
        <Header filterTag={this.state.filterTag}
                callbacks={{ setTag: this.setFilter.bind(this) }} />

        <h2>{this.state.source}</h2>

        <FeedList filterTag=''
                  feeds={
                    this.state.feeds.filter(
                      (feed) => feed.title.toLowerCase().indexOf(this.state.filterTag) === -1
                    )
                  }
                  callbacks={{ setTag: this.setFilter.bind(this) }} />

        <FeedList filterTag={this.state.filterTag}
                  feeds={
                    this.state.feeds.filter(
                      (feed) => feed.title.toLowerCase().indexOf(this.state.filterTag) !== -1
                    )
                  }
                  callbacks={{ setTag: this.setFilter.bind(this) }} />

      </div>
    );
  }
}

export default App;
