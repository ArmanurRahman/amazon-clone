import React, {Component} from 'react'
import classes from './Product.module.css'
import * as actionType from '../../../Store/action'
import { connect } from 'react-redux'

class Product extends Component{



    render(){
        let rating = null;
        rating = Array(this.props.rating)
        .fill()
        .map((_) => {            
            return(<p key={'_' + Math.random().toString(36).substr(2, 9)} >&#9733;</p>)            
        })

        
        return(
            <div className={classes.Product}>
                <span>{this.props.title}</span>
                <span>{this.props.name}</span>
                <img src={this.props.src} alt=''/>
                <span className={classes.Rating}>{rating}</span>
                <span>${this.props.price}</span>
                <button onClick={() => this.props.onCartAdd(this.props.productId)}>Add to cart</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCartAdd: (productId) => dispatch({type:actionType.ADD_BASKET, productId: productId})
    }
}

export default connect(null, mapDispatchToProps) (Product)


