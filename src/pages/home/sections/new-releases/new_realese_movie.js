import React from 'react'

import { FaArrowRight } from "react-icons/fa";
import NewRealese from '../../../../data/new_realese_series'
import SeriesCard from '../../../../atom/new_realese_series/new_realese';
import styles from './new_releases_series.module.scss'


function NewRealeseSeries(){
    return(
        <section className={styles.container}>
            <h2>New Releases- Series</h2>
            <h2 className={styles.viewall}>Veiw all <FaArrowRight /></h2>
            <article className={styles.trend_card}>
            {NewRealese.map((item , index)=>{
             return  <SeriesCard item={item} key={index} />;
            })}
    
    </article>
        </section>
    )
}

export default NewRealeseSeries;