import axios from 'axios'
import React from 'react'
import { changeGetSubscription } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_GET_SUBSCRIPTION(dispatch) {
    dispatch(changeGetSubscription({loading:1}))
  axios.post('/api/web/getSubscription')
  .then((data_r)=>{
    console.log(data_r)
    dispatch(changeGetSubscription({subscription:data_r.data.subscription,loading:0}))
  })
  .catch((err)=>{
    console.log(err.response)
    dispatch(changeGetSubscription({loading:0}))
  })
}

export default API_GET_SUBSCRIPTION
