import axios from 'axios'
import React from 'react'
import { ChangeInfoShop, ChangePagesShopSetup } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_SEND_SETUP_INFO_SHOP(dispatch,IdShop, BusinessType, Address) {
    dispatch(ChangeInfoShop({loading:1}))
    axios.post('/api/web/sendSetupInfoShop', {IdShop, BusinessType, Address })
        .then((data_r) => {
            console.log(data_r)
              dispatch(ChangeInfoShop({loading:0,}))
            dispatch(ChangePagesShopSetup('CreateQrCodeSetup'))

        })
        .catch((err) => {
            dispatch(ChangeInfoShop({loading:0}))
            console.log(err.response.data)
        })
}

export default API_SEND_SETUP_INFO_SHOP



