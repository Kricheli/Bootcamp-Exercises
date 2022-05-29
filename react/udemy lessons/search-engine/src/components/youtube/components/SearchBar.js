

import React, { Component } from 'react';

class SearchBar extends React.Component {
  state={term:''}
  onIntputChange=(e)=>{
    this.setState({term:e.target.value})
  }
  onFormSubmit=(e)=>{
    e.preventDefault();
    // ToDo- call a parent callback
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input type="text" value={this.state.term} onChange={this.onIntputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;