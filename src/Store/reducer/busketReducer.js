import * as actionType from '../action/actionType';

const initialize = {
    cart: 0,
    productId: [],
    error: false,
    loading: false,
};

const reducer = (state = initialize, action) => {
    //console.log(state)
    switch (action.type) {
        case actionType.ADD_BASKET_SUCCESS:
            return {
                ...state,
                productId: state.productId.concat(action.productId),
                cart: state.cart + 1,
            };
        case actionType.REMOVE_BASKET:
            return {
                ...state,
                productId: state.productId.filter(
                    (productId) => productId !== action.productId
                ),
                cart: state.cart - 1,
            };
        case actionType.FETCH_BASKET_SUCCESS:
            const basket = Object.values(action.products);
            return {
                ...state,
                productId: basket,
                cart: basket.length,
                loading: false,
            };
        case actionType.FETCH_BASKET_INIT:
            return {
                ...state,
                loading: true,
            };

        default:
            return state;
    }
};

export default reducer;
