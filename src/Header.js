import React, { Component } from 'react';
import logo from './logo.svg';


class Header extends Component {
  checkInputChange(evt) {
    if (evt.target.value.trim()) {
      this.props.callbacks.setTag(evt.target.value.toLowerCase());
    }
    else {
      this.props.callbacks.setTag(null);
    }
  }

  render() {
    return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Newsfeed</h1>
        <div>
          <input type="text"
                 placeholder="Search tag"
                 onChange={this.checkInputChange.bind(this)}
                 value={this.props.filterTag} />
        </div>
      </header>
  }
}

export default Header;