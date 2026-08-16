import { combineReducers, configureStore } from "@reduxjs/toolkit";
import App from "./slices/app/App_slice"
import ShopAdmin from "./slices/shopAdmin/ShopAdmin_slice"
import Users from "./slices/users/Users_slice"
const app = combineReducers({
    dashboard : App
})


const shopAdmin = combineReducers({
    dashboard : ShopAdmin
})



const users = combineReducers({
    dashboard : Users
})







const Store = configureStore({
    reducer:{
        app:app,
        shopAdmin:shopAdmin,
        users:users,
    },

})






export default Store;








