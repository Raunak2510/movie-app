import React from 'react'

import Hero from "./sections/hero/hero.js"
import Realese from './sections/new-releases/new_realese.js';
import Recent from "./sections/recents/recents.js"
import Trending from './sections/trending/trending.js';
import NewRealeseSeries from './sections/new-releases/new_realese_movie.js';
import Reccomendation from "./sections/recommended/recommendation";

function Page(){
   return(
    <article>
        <Hero />
        <Recent />
        <Trending />
        <Realese />
        <NewRealeseSeries />
        <Reccomendation />
    </article>
   )
} 

export default Page;