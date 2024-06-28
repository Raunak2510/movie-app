import React from 'react';

import styles from '.atom.scsss';
function Atom(props){
    const [className, Name]=props;

    return(
        <article className= {styles.container}>
            <button className={className} >{Name}</button>
        </article>
    );
}

export default Atom;