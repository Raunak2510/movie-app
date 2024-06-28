import React from 'react'

import { Icon } from "@iconify/react/dist/iconify.js";
import Button from '../../../../atom/buttons/buttons.js'
import Avtar from "../../../../assets/images/avatar.jpg";

import  styles from './hero.module.scss';

function Hero(){
    return(
        <section className={styles.container}>
           <img src={Avtar} alt="Avtar img"/>
        
      <article>
        <div className={styles.buttons}>
            <Button   className={styles.watch_now} name={"Watch Now"}>
            <Icon icon="icon-park-solid:play" />
            </Button>
            <Button className={styles.watch_later} name={"Watch Later"}>
            <Icon icon="mdi:clock" />
            </Button>
        </div>
        </article>
        </section>
    );
}

export default Hero;