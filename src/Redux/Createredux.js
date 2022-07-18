
const startingstate =[{
  bookname:"WAY TO SUCCESS",
  authors:"Kishore",
  price:200,
  pages:120
}]

const createredux = (state=startingstate,action) => {
switch (action.type){
  case "addbook":
    state=[...state,action.payload];
    return state
   










    default :
    return state
}
}

export default createredux