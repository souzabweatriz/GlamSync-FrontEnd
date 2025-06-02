import React from 'react';
import Image from 'next/image';
import styles from '../styles/searchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <Image
                className={styles.searchIcon}
                src="/lupa.png"
                alt="Search Icon"
                width={24}
                height={24}
            />
            <input type="text" placeholder="Search for..." className={styles.searchInput}/>

        </div>
    );
};

export default SearchBar;