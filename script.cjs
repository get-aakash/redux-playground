
const redux = require('redux')
const createStore = redux.createStore

const ORDER_PIZZA = "ORDER_PIZZA"

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

//Reducer

const initialState = {
    pizzaBase: 100,
   
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase: state.pizzaBase-1
            }
            default:
                return state
    }
    
}

//Store

const store = createStore(reducer)

console.log(store.getState());
//register  listeners via subscribe
store.subscribe(()=>console.log("Updated state", store.getState()))
//dispatch action

store.dispatch(
   orderPizza()
    
)
