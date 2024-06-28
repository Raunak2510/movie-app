import React from 'react'


import styles from './new_realese.module.scss'

function SeriesCard(props){
    const {src, alt, title, type, time }= props.item;
return(
    <section className={styles.container}>
        <img src={src} alt={alt} className={styles.newimg}/>
        <div className={styles.smallcontainer}>
            <h3 className={styles.title}>{title}</h3>
            <article className={styles.secondtext}>
            <h3 className={styles.type}>{type}</h3>
            <h3 className={styles.time}> {time}</h3>
            </article>
           
        </div>
    </section>
)
}

export default SeriesCard;