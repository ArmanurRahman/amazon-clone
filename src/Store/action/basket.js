import * as actioType from './actionType';
import axiosInstance from '../../axios';

export const addBasket = (productId) => {
    return (dispatch) => {
        axiosInstance
            .post('/cart.json', productId)
            .then((response) => {
                console.log(response);
                dispatch(addBasketSuccess(productId));
            })
            .catch((error) => {
                console.log(error);
                dispatch(addBasketFail(error));
            });
    };
};
export const addBasketSuccess = (productId) => {
    return {
        type: actioType.ADD_BASKET_SUCCESS,
        productId: productId,
    };
};

export const addBasketFail = (error) => {
    return {
        type: actioType.ADD_BASKET_FAIL,
        error: error,
    };
};

export const fetchBasket = () => {
    return (dispatch) => {
        dispatch(fetchBasketInit());
        axiosInstance
            .get('/cart.json')
            .then((response) => {
                console.log(response);
                dispatch(fetchBasketSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const fetchBasketInit = () => {
    return {
        type: actioType.FETCH_BASKET_INIT,
        loading: true,
    };
};
export const fetchBasketSuccess = (products) => {
    return {
        type: actioType.FETCH_BASKET_SUCCESS,
        products: products,
    };
};

export const fetchBasketFail = (error) => {
    return {
        type: actioType.FETCH_BASKET_FAIL,
        error: error,
    };
};
