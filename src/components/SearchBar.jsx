import React from 'react';
import styles from '../styles/searchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="text" placeholder="Search..." />
            <button>
                <span role="img" aria-label="search">🔍</span>
            </button>
        </div>
    );
};

export default SearchBar;