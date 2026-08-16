import axios from 'axios'
import React from 'react'
import { changeGetService } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'
import { ChangeShop } from '../../../../redux/slices/users/Users_slice'

function API_GET_SERVICES(dispatch,uuid) {
    dispatch(changeGetService({loading:1}))
 axios.post('/api/web/getServices',{uuid})
 .then((data_r)=>{
    console.log(data_r.data)
    dispatch(changeGetService({services:data_r.data.services,loading:0}))
    dispatch(ChangeShop(data_r.data?.shop))
 })
 .catch((err)=>{
    console.log(err.response)
    dispatch(changeGetService({loading:0}))
 })
}

export default API_GET_SERVICES
