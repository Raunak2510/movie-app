import React from 'react'

import Left from './sections/Left'
import Right from './sections/Right'
import SearchBar from './sections/SearchBar'

import styles from "./navbar.module.scss";

function NavBar(){
    return(
        <nav className={styles.header}>
            <Left />
            <SearchBar />
            <Right />
           

        </nav>
    );
}

export default NavBar;
