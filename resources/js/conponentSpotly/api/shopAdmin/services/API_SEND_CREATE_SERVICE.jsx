import axios from 'axios'
import React from 'react'
import { changeCreateService, ChangeCurrentPage, ChangePreviousPage } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_SEND_CREATE_SERVICE(dispatch, idShop, createService) {
    dispatch(changeCreateService({ loading: 1 }))
      let tUEFF = createService?.TUEFF

    axios.post('/api/web/createService', { idShop,createService })
        .then((data_r) => {
            console.log(data_r)
            dispatch(ChangeCurrentPage('Services'))
            dispatch(ChangePreviousPage('Services'))
            dispatch(changeCreateService({ name: '', description: '', price: '', status: '', estimated_time: '', loading: 0, TUEFF: !tUEFF ,message: '', errors: {}}))
        })
        .catch((err) => {
            console.log(err.response)
            // dispatch(ChangeCurrentPage('Services'))
            dispatch(changeCreateService({ loading: 0,message:err.response.data.message, errors: err.response.data.errors }))

        })
}
export default API_SEND_CREATE_SERVICE
