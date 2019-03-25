import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleChange = event => {
    const term = event.target.value;
    this.setState({ term });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);

    this.setState({ term: "" });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <label>Video Search</label>
          <input
            className="field"
            type="text"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
