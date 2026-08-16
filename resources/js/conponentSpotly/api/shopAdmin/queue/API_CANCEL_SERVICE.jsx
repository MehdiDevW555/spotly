import axios from 'axios'
import React from 'react'
import { changeCancelService, changeToggleChangeStatusService } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_CANCEL_SERVICE(dispatch,idTicket) {
    dispatch(changeCancelService({ loading: 1 }))
    axios.post('/api/web/cancelService', {  idTicket })
        .then((data_r) => {
            console.log(data_r)
            dispatch(changeToggleChangeStatusService())
            dispatch(changeCancelService({ massage: data_r.data.message }))
            // dispatch(changeCompleteService({ loading: 0 }))
        })
        .catch((err) => {
            console.log(err.response)
            dispatch(changeCancelService({ loading: 0 }))
        })
}

export default API_CANCEL_SERVICE
