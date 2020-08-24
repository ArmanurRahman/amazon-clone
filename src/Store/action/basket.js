import * as actioType from './actionType';

export const addBasket = (productId) => {
    return{
        type: actioType.ADD_BASKET,
        productId: productId
    }
}