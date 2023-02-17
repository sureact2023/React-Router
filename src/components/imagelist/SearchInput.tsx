import React, { Component } from 'react';

interface SearchInputProps {
  onSearchSubmit: (searchTerm: string) => void;
}

interface SearchInputState {
  searchtext: string;
}

export default class SearchInput extends Component<SearchInputProps, SearchInputState> {
  state = {
    searchtext: "",
  };

  handleChange = (event: any) => {
    this.setState({
      searchtext: event.target.value
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.searchtext);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchtext}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}