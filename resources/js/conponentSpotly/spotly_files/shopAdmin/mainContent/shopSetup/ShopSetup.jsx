import React from 'react'
import WelcomeShopSetup from './welcomeShopSetup/WelcomeShopSetup'
import { useSelector } from 'react-redux'
import {  pagesShopSetup_selector } from '../../../../../redux/selectors/shopAdmin/ShopAdmin_selector'
import InfoShopSetup from './infoShopSetup/InfoShopSetup'
import SuccessShopSetup from './successShopSetup/SuccessShopSetup'
import CreateQrCodeSetup from './createQrCode/CreateQrCodeSetup'

function ShopSetup(props) {
    let{infoShop}=props
    let pagesShopSetup = useSelector(pagesShopSetup_selector)
    console.log(pagesShopSetup)
    return (
        <>
            {
                pagesShopSetup === 'WelcomeShopSetup' ? (
                    <WelcomeShopSetup />
                ) : pagesShopSetup === 'InfoShopSetup' ? (
                    <InfoShopSetup infoShop={infoShop} />
                ) : pagesShopSetup === 'CreateQrCodeSetup' ? (
                    <CreateQrCodeSetup/>
                ) :pagesShopSetup === 'SuccessShopSetup' ? (
                    <SuccessShopSetup />
                ) : null
            }

        </>
    )
}

export default ShopSetup
