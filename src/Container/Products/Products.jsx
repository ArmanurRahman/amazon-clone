import React, { Component } from 'react';
import Product from './Product/Product'
import IpadImg from '../../asset/img/ipad.jpg'
import classes from './Products.module.css'

class Products extends Component{
    state = {
        productInfo: [
            {
                id: 1,
                title: 'This is title',
                name: 'IPAD',
                image: IpadImg,
                rating: 5,
                price: 100
            },
            {
                id: 2,
                title: 'This is title',
                name: 'name',
                image: IpadImg,
                rating: 5,
                price: 900
            }
        ] 
    }
    
    

    render(){
        let products = null;

        products = this.state.productInfo.map( (item, i) => {
            
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
}

export default Products