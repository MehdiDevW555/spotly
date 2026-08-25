import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Dashboard from './dashboard/Dashboard'
import Services from './services/Services'

import { createService_selector, currentPage_selector, getAllTicket_selector, getQueueStatus_selector, getService_selector, getSubscription_selector, infoShop_selector, pagesDashboard_selector, pagesServices_selector, pagesShopSetup_selector, toggleChangeStatusService_selector, toggleDialogCreateTicket_selector, toggleUpdateQueueStatus_selector } from '../../../../redux/selectors/shopAdmin/ShopAdmin_selector'
import { Box, CircularProgress, Typography } from '@mui/material'
import EmptyServices from './services/emptyServices/EmptyServices'
import CreateService from './services/createService/CreateService'
import AvailableServices from './services/availableServices/AvailableServices'
import Queues from './queues/Queues'
import QrCode from './qrCode/QrCode'
import AvailableQrCode from './qrCode/availableQrCode/AvailableQrCode'
import API_GET_SERVICES from '../../../api/shopAdmin/services/API_GET_SERVICES'
import Loading from '../../../otherFiles/loading/Loading'
import Subscriptions from './subscriptions/Subscriptions'
import API_GET_CURRENT_TICKET from '../../../api/shopAdmin/queue/API_GET_CURRENT_TICKET'
import API_GET_ALL_TICKET from '../../../api/shopAdmin/queue/API_GET_ALL_TICKET'
import { changeBookPlaceManually, ChangeToggleDialogCreateTicket } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'
import CreateTicket from '../../../dialog/shopAdmin/mainContent/queues/CreateTicket'
import API_GET_QUEUE_STATUS from '../../../api/shopAdmin/queue/API_GET_QUEUE_STATUS'

function MainContent(props) {
    let {maxServices }=props
    let dispatch = useDispatch()
    let toggleDialogCreateTicket = useSelector(toggleDialogCreateTicket_selector)

    let getSubscription = useSelector(getSubscription_selector)
    let maxServicesToThisPlan = getSubscription?.subscription?.plan?.max_services

    let createService = useSelector(createService_selector)
    let TUEFF = createService?.TUEFF


    let infoShop = useSelector(infoShop_selector)
    // console.log(infoShop.shop.id)
    let idShop = infoShop?.shop?.id
    let uuid = infoShop?.shop?.uuid
    // console.log(uu)

    let getServices = useSelector(getService_selector)
    let LoadingD = getServices?.loading
    let services = getServices?.services

    const currentPage = useSelector(currentPage_selector)
    let toggleChangeStatusService = useSelector(toggleChangeStatusService_selector)
let toggleUpdateQueueStatus = useSelector(toggleUpdateQueueStatus_selector)

    let getAllTicket = useSelector(getAllTicket_selector)
    let ticketsLoading = getAllTicket?.loading;

    let getQueueStatus = useSelector(getQueueStatus_selector)
    let queueStatus = getQueueStatus?.queueStatus
    console.log(queueStatus)
    useEffect(() => {
        API_GET_SERVICES(dispatch, uuid)
    }, [TUEFF])

    useEffect(() => {
        API_GET_QUEUE_STATUS(dispatch, idShop)
    }, [toggleUpdateQueueStatus])


    useEffect(() => {
        API_GET_CURRENT_TICKET(dispatch, idShop)
        API_GET_ALL_TICKET(dispatch, idShop)
    }, [toggleChangeStatusService])


    console.log(idShop)
    let openDialogCreateTicket = () => {
        dispatch(ChangeToggleDialogCreateTicket())
        // dispatch(changeBookPlaceManually({full_name: '', phone: '', service_id: '', loading: 0, }))
    }

    return (

        <Box sx={{ mt: 0, pt: 0, position: 'relative' }}>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}> */}

            <Box
                sx={{
                    position: "absolute",
                    width: '100%',
                    height: 400,
                    borderRadius: "50%",
                    bgcolor: "rgba(124, 58, 237, 0.23)",

                    filter: "blur(120px)",
                    top: -100,
                    left: -50,
                }}
            />
            {toggleDialogCreateTicket && <CreateTicket dispatch={dispatch} openDialogCreateTicket={openDialogCreateTicket} />}


            {currentPage === "Dashboard" && <Dashboard  />}
            {currentPage === "Queues" && <Queues services={services} maxServices={maxServices} getSubscription={getSubscription} idShop={idShop} openDialogCreateTicket={openDialogCreateTicket} />}

            {/* </Box> */}
            {/* {currentPage === "EmptyServices" && <Services />} */}
            {/* {currentPage === "EmptyServices" && getServices?.services?.length < 0 && <EmptyServices />} */}
            {currentPage === "QrCode" && <QrCode infoShop={infoShop} />}
            {currentPage === "Subscriptions" && <Subscriptions />}

            {currentPage === "Services" && (
                LoadingD === 1 ? (
                    <Loading />
                ) : (
                    <Services maxServices={maxServices} currentPage={currentPage} idShop={idShop} />
                )
            )}


            {currentPage === "CreateService" && <CreateService idShop={idShop} uuid={uuid} />}
            {/* {currentPage === "AvailableServices" && <AvailableServices idShop={idShop} />} */}

            {currentPage === "AvailableQrCode" && <AvailableQrCode infoShop={infoShop} />}

            {/* {content} */}
        </Box>
    )
}

export default MainContent

