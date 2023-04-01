// to add item
export const addCart = (product) =>{
  return{
    type : "ADDITEM",
    payload : product
  }
}
// to delete item

export const delCart = (product) =>{
return{
  type : "DelITEM",
  payload : product
}
}