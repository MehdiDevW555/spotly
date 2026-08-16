import { Box, Chip, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import EmptyServices from './emptyServices/EmptyServices'
import AvailableServices from './availableServices/AvailableServices'
import CreateService from './createService/CreateService'
import { useDispatch, useSelector } from 'react-redux'
import { createService_selector, currentPage_selector, getService_selector, infoShop_selector, pagesServices_selector } from '../../../../../redux/selectors/shopAdmin/ShopAdmin_selector'
import API_GET_SERVICES from '../../../../api/shopAdmin/services/API_GET_SERVICES'

import StorefrontIcon from "@mui/icons-material/Storefront";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

function Services(props) {
    let dispatch = useDispatch()
    let { idShop } = props


    let getServices = useSelector(getService_selector)
    let services = getServices?.services

    // CreateService
    const pagesServices = useSelector(pagesServices_selector)
    // console.log(page)
    // const currentPage = useSelector(currentPage_selector)


    return (

        <Box
            dir="rtl"
            sx={{
                minHeight: "100vh",
                position: 'relative',
                
                // p: 3,
                // bgcolor: "#f7f9fb",
                // display: "flex",
            }}
        >
            {services?.length === 0 && <EmptyServices />}
            {/* {currentPage === "CreateService" && <CreateService idShop={idShop} />} */}
            {services?.length > 0 && <AvailableServices idShop={idShop} services = {services} />}
        </Box>
    )

}

export default Services
