import React from "react"

import { IoIosTimer } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { IoMdPlayCircle } from "react-icons/io";
import Button from "../buttons/buttons"
import styles from "./trending_card.module.scss"


function TrendingCard(props){
    const {image, alt, time, rating, tittle, tag} =props.item;
    return(
        <article className={styles.container}>
            <img src={image} alt={alt} className={styles.movieimg}/>
            <div className={styles.text}>
                <p className={styles.time}> <IoIosTimer /> {time} </p>
                 <p className={styles.rating}><CiStar /> {rating}</p>
                <IoMdPlayCircle className={styles.play} />
            </div>
            {/* <div className={styles.value}> */}
              
              <h3  className={styles.title}>{tittle}
                 <span >
              <button className={styles.tag}>{tag}</button> 
              </span> 
              </h3>
             
              
            {/* <h3><Button className={styles.tagbutton} name={tag} /></h3> */}
            {/* </div> */}
        </article>
    )
}

export default TrendingCard;