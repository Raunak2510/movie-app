import React from 'react'

import NavLink from '../partials/NavLink'

import styles from "./section.module.scss";

function Right(){
    return(
        <section className={styles.container}>
        <NavLink link="Movies" path="./movies" className={styles.nav}/>
        <NavLink link="Series" path="./series" className={styles.nav}/>
        <NavLink link="Animation" path="./animation" className={styles.nav}/>
        <NavLink link="Login/Signup" path="./login-signup" className={styles.nav}/>
        </section>
    );
}

export default Right;