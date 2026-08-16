import axios from 'axios'
import React from 'react'
import { changeGetPlans } from '../../../../redux/slices/app/App_slice'

function API_GET_PLANS(dispatch) {
  axios.post('/api/web/getPlans')
  .then((data_r)=>{
    console.log(data_r)
    dispatch(changeGetPlans({plans:data_r.data.plans}))
  })
  .catch((err)=>{
    console.log(err.response)
  })
}

export default API_GET_PLANS
