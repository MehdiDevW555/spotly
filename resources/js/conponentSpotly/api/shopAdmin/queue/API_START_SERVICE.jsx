import axios from 'axios'
import React from 'react'
import { changeStartService, changeToggleChangeStatusService } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_START_SERVICE(dispatch,idTicket) {
    dispatch(changeStartService({loading:1}))
   axios.post('/api/web/startService',{idTicket})
  .then((data_r)=>{
    console.log(data_r)
     dispatch(changeToggleChangeStatusService())
    dispatch(changeStartService({massage:data_r.data.message}))
    //  dispatch(changeStartService({loading:0}))
  })
  .catch((err)=>{
    console.log(err.response)

    dispatch(changeStartService({loading:0}))
  })
}

export default API_START_SERVICE
