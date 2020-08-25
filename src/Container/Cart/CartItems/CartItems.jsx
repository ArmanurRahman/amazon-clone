import React, { useEffect, useState } from 'react';
import classes from './CartItems.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../Store/action/index';
import CartItem from '../CartItem/CartItem';

const CartItems = (props) => {
    const [cartItems, setCartItem] = useState(null);

    useEffect(() => {
        let basketItemsInfo = [];
        const products = [...props.products];

        for (let productId of props.basket) {
            const productsInfo = products.filter(
                (products) => products.id === productId
            );
            basketItemsInfo.push(productsInfo[0]);
        }
        setCartItem(basketItemsInfo);
    }, [props.basket]);

    return (
        <div className={classes.CartItems}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ width: '90%' }}>Shopping Cart</h1>
                <h4>Price</h4>
            </div>

            {cartItems !== null
                ? cartItems.map((product) => (
                      <CartItem
                          key={product.id}
                          src={product.image}
                          name={product.name}
                          price={product.price}
                          rating={product.rating}
                          title={product.title}
                      />
                  ))
                : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        basket: state.basket.productId,
        products: state.products.products,
        loading: state.basket.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getBasketItems: (basket) => dispatch(actions.getProductById(basket)),
        initBasket: () => dispatch(actions.fetchBasket()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
