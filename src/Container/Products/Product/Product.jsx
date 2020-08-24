import React, {useEffect} from 'react'
import classes from './Product.module.css'
import * as actionType from '../../../Store/action/actionType'
import { connect } from 'react-redux'
import * as actions from '../../../Store/action/index'

const  Product = props =>  {

    let rating = null;
    rating = Array(props.rating)
    .fill()
    .map((_) => {            
        return(<p key={'_' + Math.random().toString(36).substr(2, 9)} >&#9733;</p>)            
    })

    
    return(
        <div className={classes.Product}>
            <span>{props.title}</span>
            <span>{props.name}</span>
            <img src={props.src} alt=''/>
            <span className={classes.Rating}>{rating}</span>
            <span>${props.price}</span>
            <button onClick={() => props.onCartAdd(props.productId)}>Add to cart</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onCartAdd: (productId) => dispatch(actions.addBasket(productId) )
    }
}

export default connect(null, mapDispatchToProps) (Product)


