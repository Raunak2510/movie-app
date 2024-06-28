import React from 'react'

import styles from './buttons.module.scss'
function Button(props){
    const {className, name, children} = props;
    return(
     <a
        className={`${className} ${styles.button}`}

      >
      <span>{name}</span>
       {children}
      </a>
    );
}

export default Button;