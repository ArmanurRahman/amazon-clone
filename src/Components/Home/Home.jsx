import React from 'react';

import Banner from '../../asset/img/banner.jpg'
import classes from './Home.module.css'
import Products from '../../Container/Products/Products'

const home = (props) => {
    return(
        <React.Fragment>
            <div className={classes.Navigation}>
                <img className={classes.Banner} src={Banner}/>
            </div>
            <Products />
        </React.Fragment>

    )
}

export default home