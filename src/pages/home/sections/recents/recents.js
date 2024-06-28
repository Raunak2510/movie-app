import React from 'react'

import RecentCard from "../../../../atom/recent_card/recent_card.js"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import RecentData from "../../../../data/recent_data"
import styles from './recents.module.scss'


function Recent(){
    return(
        <secttion className={styles.box}>
        <section className={styles.container}>
         <h2>Recently Updated</h2>
          <article className={styles.recent_container}>
          
            {RecentData.map((item , index)=>{
             return  <RecentCard  item={item} key={index} />;
            })}
    

            
            <FaRegArrowAltCircleRight className={styles.icons} />

          </article>
        </section>
        </secttion>
    );
}

export default Recent;