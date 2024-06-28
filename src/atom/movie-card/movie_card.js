import React from 'react'

import { IoIosTimer } from "react-icons/io";
import styles from './movie_card.module.scss'

function MovieCard(props){
    const {src, alt, title, type, time }= props.item;
return(
    <section className={styles.container}>
        <img src={src} alt={alt} className={styles.newimg}/>
        <div className={styles.smallcontainer}>
            <h3 className={styles.title}>{title}</h3>
            <article className={styles.secondtext}>
            <h3 className={styles.type}>{type}</h3>
            <h3 className={styles.time}> <IoIosTimer />{time}</h3>
            </article>
           
        </div>
    </section>
)
}

export default MovieCard;