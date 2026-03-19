
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleWare = redux.applyMiddleware

const ORDER_PIZZA = "ORDER_PIZZA"
const ORDER_BURGER = "ORDER_BURGER"

//Action
// const action =  {
//     type: ORDER_PIZZA,
//     shop_name: "Pizza Shop"
// }

//Action creator

function orderPizza() {
    return {
        type: ORDER_PIZZA,
        shop_name: "Pizza Shop"
    }
}
function orderBurger() {
    return {
        type: ORDER_BURGER
    }
}

//Reducer

const initialStateForPizza = {
    pizzaBase: 100,


}
const initialStateForBurger = {
    burgerBuns: 200

}

const reducerPizza = (state = initialStateForPizza, action) => {
    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase: state.pizzaBase - 1
            }


        default:
            return state
    }

}
const reducerBurger = (state = initialStateForBurger, action) => {
    switch (action.type) {

        case ORDER_BURGER:
            return {
                ...state,
                burgerBuns: state.burgerBuns - 1
            }
        default:
            return state
    }

}

//Store
const rootReducer = combineReducers({
    pizza: reducerPizza,
    burger: reducerBurger
})
const store = createStore(rootReducer, applyMiddleWare(logger))

console.log("Initial State", store.getState())
store.subscribe(() =>{})
store.dispatch(orderPizza())
