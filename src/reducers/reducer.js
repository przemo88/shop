import { combineReducers } from 'redux';
import  ProductsListReducer  from './ProductsListReducer';

const reducer = combineReducers({
    produkty: ProductsListReducer
});

export default reducer;