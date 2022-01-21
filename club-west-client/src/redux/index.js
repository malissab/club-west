
export const addCart = (item) => {
    return {
        type : "ADDITEM",
        payload : item
    }
}

export const delCart = (item) => {
    return {
        type : "DELITEM",
        payload : item
    }
}

export const renderItem = (item) => {
   return { 
        type : "SHOWITEM",
        payload : item
   }
}
export const removeItem = (item) => {
    return { 
         type : "REMITEM",
         payload : item
    }
 }
