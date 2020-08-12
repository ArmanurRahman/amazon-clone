import React from 'react'
import Logo from '../../asset/img/logo.jpg'
import classes from './Navigation.module.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import Navbar from '../Navigation/Navbar/Navbar'
import BasketIcon from '@material-ui/icons/ShoppingBasket'
import { connect } from 'react-redux'

const navigation = (props) => {
    return(
        <nav className={classes.Navigation}>
            <div className={classes.Logo}>
                <Link  to='/'>
                    <img src={Logo}/>
                </Link>
            </div>

            <div className={classes.Search}>
                <input type='text' className={classes.SearchInput}/>
                <SearchIcon className={classes.SearchIcon}/>
            </div>
            <Navbar href='/signin' text1='Hello Mubeen' text2='Sign In'/>
            <Navbar href='/order' text1='Returns' text2='& Orders'/>
            <Navbar href='/prime' text1='Your' text2='Prime'/>
            <Navbar href='/cart' text1={props.cart} text2={<BasketIcon />}/>
        </nav>

    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}
export default connect(mapStateToProps) (navigation)