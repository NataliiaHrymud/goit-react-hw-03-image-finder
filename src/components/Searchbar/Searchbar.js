import React, { Component } from 'react'
import styles from './searchbar.module.css';

class SearchBar extends Component {
    state = {inputValue: ''};

    handleChange = e => {
        this.setState({ inputValue: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue: ''})
    };

    render() {
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value={this.state.querry}
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>
                </form>
            </header>
        );
    };
};

export default SearchBar;