import React from "react" 

import { FaArrowRight } from "react-icons/fa";
import Moviecard from "../../../../atom/movie-card/movie_card"
import Recommended from "../../../../data/recommended"
import styles from "./recommended.module.scss"

function Recommendation(){
    return(
        <section className={styles.container}>
        <article className={styles.smallcontainer}>
        <h2 className={styles.title}>Recommended</h2>
        <h2 className={styles.movies}>Movies</h2>
        <h2 className={styles.series}>Series</h2>
        <h2 className={styles.animation}>Animation</h2>
        
        <h2 className={styles.viewall}>Veiw all <FaArrowRight /></h2>
        </article>
        <article className={styles.trend_card}>
        {Recommended.map((item , index)=>{
         return  <Moviecard item={item} key={index} />;
        })}

     </article>
 </section>
    );
}

export default Recommendation