import axios from 'axios'
import React from 'react'
import { changeBookPlaceManually, ChangeToggleDialogCreateTicket } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_CREATE_BOOK_PLACE_MANUALLY(dispatch,full_name,phone,service_id) {
    dispatch(changeBookPlaceManually({loading:1}))
  axios.post('/api/web/createBookPlaceManually',{full_name,phone,service_id})
  .then((data_r)=>{
    console.log(data_r)
        dispatch(changeBookPlaceManually({full_name: '', phone: '', service_id: '', loading: 0, }))
        // dispatch(changeToggleChangeStatusService());
        dispatch(ChangeToggleDialogCreateTicket())
  })
  .catch((err)=>{
    console.log(err)
    dispatch(changeBookPlaceManually({loading:0,errors: err.response.data.errors}))
  })
}

export default API_CREATE_BOOK_PLACE_MANUALLY











