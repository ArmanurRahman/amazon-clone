import * as actionType from './actionType';

export const getProducts = () => {
    return{
        type: actionType.GET_PRODUCTS
    }
}

export const getProductById = (productIds) =>  {
    
    return {
        type: actionType.GET_PRODUCT_BY_ID,
        productIds: productIds
    }
}