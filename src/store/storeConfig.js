import { createStore, combineReducers } from 'redux';

import numerosReducer from './reducers/numeroReducers';

const reducers = combineReducers({
    numeros: numerosReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig