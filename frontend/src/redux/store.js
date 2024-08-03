import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import  {postApi}  from '../component/post.js';


 const store = configureStore({
    reducer : {
        [postApi.reducerPath] : postApi.reducer
    },
    middleware  : (getDafaultMiddleware) => 
        getDafaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)

export default store;