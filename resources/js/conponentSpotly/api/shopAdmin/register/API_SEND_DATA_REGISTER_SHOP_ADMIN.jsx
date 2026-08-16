import axios from 'axios'
import React from 'react'
import { ChangeDataRegisterShopAdmin } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice';

function API_SEND_DATA_REGISTER_SHOP_ADMIN(dispatch,dataRegisterShopAdmin) {
    dispatch(ChangeDataRegisterShopAdmin({loading:1}))
 axios.post('/api/web/sendDataRegisterShopAdmin',{dataRegisterShopAdmin})
 .then((data_r)=>{
    // console.log(data_r)
     console.log("API Message:", data_r.data);
     dispatch(ChangeDataRegisterShopAdmin({loading:0}))
     dispatch(ChangeDataRegisterShopAdmin({message:data_r.data.message}))

 })
.catch((err) => {

    console.log(err.response.data);

    dispatch(ChangeDataRegisterShopAdmin({
        loading: 0
    }));

    dispatch(ChangeDataRegisterShopAdmin({
        message: err.response.data.message,
        errors:err.response.data.errors
    }));

});
}

export default API_SEND_DATA_REGISTER_SHOP_ADMIN
