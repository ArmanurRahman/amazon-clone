import * as actionType from './action'

const initialize = {
    cart : 0,
    productId : []
}

const reducer = (state = initialize, action) => {

    //console.log(state)
    switch (action.type) {
        case actionType.ADD_BASKET:
            return {
                ...state,
                productId: state.productId.concat(action.productId),
                cart: state.cart + 1
            }
        case actionType.REMOVE_BASKET:
            return {
                ...state,
                productId: state.productId.filter(productId => productId !== action.productId),
                cart: state.cart - 1
            }
                
    
        default:
            return state;
    }
}

export default reducer