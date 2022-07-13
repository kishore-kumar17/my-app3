// import React from 'react'
// const initialstate ={   
//     user:'',email:''
// }
// const reducer =(state,action)=>{
// switch(action.type){
//     case "auth_state_changed":
// return{
//     user:action.payload,
// };
// }
// return state
// }


// const AuthContext=React.createContext();
// const Exthree = () => {
//     const [authState,dispatch] = useReducer(reducer,initialstate);
//     const actions={authStateChanged:(user)=>{
//         if(user){
//              dispatch({
//                 type:'auth_state_changed',
//                 payload:user
//              })
//         }
//     }}
    

//   return (
//     <div>
//         <h1>Welcome </h1>
//         <AuthContext.Provider value={{authState:authstate,authactions:actions}}>{props.children}</AuthContext.Provider>

//     </div>
//   )
// }I

// export [authContext,contextApi]
