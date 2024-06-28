import React from 'react'

import { FaArrowRight } from "react-icons/fa";
import NewRealese from '../../../../data/new_realese';
import Moviecard from '../../../../atom/movie-card/movie_card';
import styles from './releases.module.scss'

function Realese(){
    return(
       

        <section className={styles.container}>
            <h2>New Releases- Movie</h2>
            <h2 className={styles.viewall}>Veiw all <FaArrowRight /></h2>
            <article className={styles.trend_card}>
            {NewRealese.map((item , index)=>{
             return  <Moviecard  item={item} key={index} />;
            })}
    
    </article>
        </section>
    
   
    )
}

export default Realese;