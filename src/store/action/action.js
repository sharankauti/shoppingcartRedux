export const addToCart = (item)=>{
    return{
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const deleteFromCart = (id)=>{
    return{
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

export const deleteIndiviual = (item)=>{
    return{
        type: 'REMOVE_ONE',
        payload: item
    }
}