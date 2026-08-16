import axios from 'axios'
import React from 'react'
import { ChangeInfoShop, ChangePagesShopSetup } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_CREATE_QR_CODE(dispatch,infoShop) {
let tUEFF = infoShop?.TUE
axios.post('/api/web/CreateQrCode')
.then((data_r)=>{
    console.log(data_r)
    // dispatch(ChangeInfoShop({TUE:!tUEFF}))
    dispatch(ChangePagesShopSetup('SuccessShopSetup'))
})
.catch((err)=>{
    console.log(err.response)
})
}

export default API_CREATE_QR_CODE
