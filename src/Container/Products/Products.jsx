import React, { useState } from 'react';
import Product from './Product/Product'
import classes from './Products.module.css'
import {connect} from 'react-redux'

const Products = props =>{


    let products = null;

    products = props.productInfo.map( (item, i) => {
        
        return <Product 
        key={item.id}
        title={item.title} 
        name={item.name} 
        src={item.image} 
        rating={item.rating} 
        price={item.price}
        productId={item.id}/>
        
    });
    
    return(
        <div className={classes.Products}>
            {products}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        productInfo: state.products.products
    }
}


export default connect(mapStateToProps) (Products)