import { combineReducers } from 'redux';

// Import custom components
import productReducer from './products';
import cartReducer from './cart';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import filterReducer from './filter';
import modalReducer from './modal';
import modalReducerregister from './modal-register'


const rootReducer = combineReducers( {
    data: productReducer,
    cartlist: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    filters: filterReducer,
    modal: modalReducer,
    modalr:modalReducerregister,
    
} );

export default rootReducer;