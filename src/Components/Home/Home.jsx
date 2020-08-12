import React from 'react';
import Navigation from '../Navigation/Navigation'
import Banner from '../../asset/img/banner.jpg'
import classes from './Home.module.css'
import Products from '../../Container/Products/Products'

const home = (props) => {
    return(
        <React.Fragment>
            <Navigation />
            <div className={classes.Navigation}>
                <img className={classes.Banner} src={Banner}/>
            </div>
            <Products />
        </React.Fragment>

    )
}

export default home