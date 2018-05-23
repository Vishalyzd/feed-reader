import React, { Component } from 'react';
import Feed from './Feed';


class FeedList extends Component {
  resetFilter() {
    this.props.callbacks.setTag(null);
  }

  getFilter() {
    return (this.props.filterTag) ?
      <button onClick={this.resetFilter.bind(this)}>{this.props.filterTag}</button> :
      null ;
  }

  render() {
    let feeds = this.props.feeds.map((feed) => {
      return <Feed key={feed.guid}
                   title={feed.title}
                   link={feed.link} />
    });
    return (
      <div className="list">
        {this.getFilter()}
        {feeds}
      </div>
    )
  };
}

export default FeedList;