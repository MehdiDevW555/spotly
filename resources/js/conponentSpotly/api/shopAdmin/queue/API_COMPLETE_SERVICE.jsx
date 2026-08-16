import axios from 'axios'
import React from 'react'
import { changeCompleteService, changeToggleChangeStatusService } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_COMPLETE_SERVICE(dispatch, idTicket) {
    dispatch(changeCompleteService({ loading: 1 }))
    axios.post('/api/web/completeService', { idTicket })
        .then((data_r) => {
            console.log(data_r)
            dispatch(changeToggleChangeStatusService())
            dispatch(changeCompleteService({ massage: data_r.data.message }))
            // dispatch(changeCompleteService({ loading: 0 }))
        })
        .catch((err) => {
            console.log(err.response)
            dispatch(changeCompleteService({ loading: 0 }))
        })
}

export default API_COMPLETE_SERVICE
