import React, { Component } from "react";
import styles from "../SearchBar/SearchBar.module.css";
import PropTypes from "prop-types";
export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;

    onSubmit(query);
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
