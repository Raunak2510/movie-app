import React from 'react'

import TrendingCard from '../../../../atom/trending_card/trending_card';
import { FaArrowRight } from "react-icons/fa";
import TrendingData from '../../../../data/trending_data';
import styles from "./trending.module.scss"
function Trending(){
    return(
        <section className={styles.container}>
            <h2>Trending</h2>
            <h2 className={styles.viewall}>Veiw all <FaArrowRight /></h2>
            <article className={styles.trend_card}>
            {TrendingData.map((item , index)=>{
             return  <TrendingCard  item={item} key={index} />;
            })}
    
    </article>
        </section>
    )
}

export default Trending;