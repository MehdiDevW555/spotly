import axios from 'axios'
import React from 'react'
import { changeCancelService, changeCompleteService, changeGetCurrentTicket, changeStartService } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_GET_CURRENT_TICKET(dispatch, idShop) {
    dispatch(changeGetCurrentTicket({loading:1}))
    axios.post('/api/web/getCurrentTicket', { idShop })
        .then((data_r) => {
            console.log(data_r)
            dispatch(changeGetCurrentTicket({ CurrentTicket: data_r.data.ticket,loading:0 }))
            dispatch(changeStartService({ loading: 0 }))
            dispatch(changeCompleteService({ loading: 0 }))
            dispatch(changeCancelService({ loading: 0 }))


        })
        .catch((err) => {
            console.log(err.response)
        })
}

export default API_GET_CURRENT_TICKET
