import axios from 'axios'
import React from 'react'
import { ChangeInfoShop } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_GET_INFO_SHOP(dispatch) {
 axios.post('/api/web/getInfoShop')
 .then((data_r)=>{
    console.log(data_r)
    dispatch(ChangeInfoShop(data_r.data?.infoShop))
 })
 .catch((err)=>{
    console.log(err.response.data)
 })
}

export default API_GET_INFO_SHOP
