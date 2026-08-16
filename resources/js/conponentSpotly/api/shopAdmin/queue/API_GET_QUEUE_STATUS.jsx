import axios from 'axios'
import React from 'react'
import { changeGetQueueStatus } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_GET_QUEUE_STATUS(dispatch,idShop) {
    dispatch(changeGetQueueStatus({loading:1}))
  axios.post('/api/web/getQueueStatus',{idShop})
  .then((data_r)=>{
    console.log(data_r)
    dispatch(changeGetQueueStatus({queueStatus:data_r.data.queue_open,loading:0}))
  })
  .catch((err)=>{
    console.log(err.response)
    dispatch(changeGetQueueStatus({loading:0}))
  })
}

export default API_GET_QUEUE_STATUS
