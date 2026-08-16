import axios from 'axios'
import React from 'react'
import { changeGetAllTicket } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_GET_ALL_TICKET(dispatch,idShop) {
     dispatch(changeGetAllTicket({loading:1}))
  axios.post('/api/web/getAllTicket',{idShop})
  .then((data_r)=>{
    console.log(data_r)
    dispatch(changeGetAllTicket({tickets:data_r?.data?.tickets,loading:0}))
  })
  .catch((err)=>{
    console.log(err)
     dispatch(changeGetAllTicket({loading:0}))
  })
}

export default API_GET_ALL_TICKET
