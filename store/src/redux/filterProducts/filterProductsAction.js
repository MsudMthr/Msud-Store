export const searchText = (text) => {
    return {type : "SEARCH" , payload : text}
} 
export const filterByCategory = (category) => {
    return {type : "CATEGORY" , payload : category}
} 