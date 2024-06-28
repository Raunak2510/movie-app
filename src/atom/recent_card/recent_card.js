import React from 'react';

import styles from './recent_card.module.scss'

function RecentCard(props){

    const {key, image, alt, tittle, series, date} = props.item;
    return(
     <article className={styles.card} >
      <img src={image} alt={alt} className={styles.image}/>
      <div className={styles.text}>
      <h2 className={styles.tittle} key={key}>{tittle}</h2>
      <p>{series}</p>
      <p>{date}</p>
      </div>
        </article>
    );
}

export default RecentCard;