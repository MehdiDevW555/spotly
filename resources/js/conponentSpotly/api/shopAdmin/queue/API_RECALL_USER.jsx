import axios from 'axios'
import React from 'react'
import { changeRecallUser } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_RECALL_USER(dispatch,idTicket) {
    dispatch(changeRecallUser({loading:1}))
 axios.post('/api/web/recallUser',{idTicket})
 .then((data_r)=>{
    console.log(data_r)
    dispatch(changeRecallUser({loading:0}))
     dispatch(changeRecallUser({massage:data_r.data.message}))
 })
 .catch((err)=>{
    console.log(err.response)
    dispatch(changeRecallUser({loading:0}))
 })
}

export default API_RECALL_USER
