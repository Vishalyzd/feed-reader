import React, { Component } from 'react';


class Feed extends Component {
  render() {
    return(
      <div className="feed">
        <a href={this.props.link} target="_blank">{this.props.title}</a>
      </div>
    )
  }
}

export default Feed;