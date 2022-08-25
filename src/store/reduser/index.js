import {createStore} from 'redux';


const intialState = {
    cart: []
}

const cartReduser = (state= intialState,action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

        const item = state.cart.findIndex((item)=> item.id === action.payload.id)
        if (item >= 0) {
           state.cart[item].qnty +=1;
        }
        else{
            const temp = {...action.payload,qnty:1}
            return{
                ...state,
                cart : [...state.cart,temp]
            }
        }
          
            
        case 'REMOVE_FROM_CART':
            const data = state.cart.filter((el)=> el.id !== action.payload)
            return{
                ...state,
                cart:data
            }

        case 'REMOVE_ONE':
            const items = state.cart.findIndex((item)=> item.id === action.payload.id)
            console.log(items);
            if (state.cart[items].qnty >= 1) {
                state.cart[items].qnty -= 1;
                return{
                    ...state,
                    cart: [...state.cart]
                }
            }
            else if(state.cart[items].qnty === 1){
                const data = state.cart.filter((el)=> el.id!== action.payload)
                return {
                    ...state,
                    cart: data
                }
            }
           

         
        default: return {
            ...state 
        }
           
    }
}


const store = createStore(cartReduser);

export default store;