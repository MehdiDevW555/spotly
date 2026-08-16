import { Box } from "@mui/material"
import Navbar from "./navbar/Navbar"
import Sidebar from "./sidebar/Sidebar"
import MainContent from "./mainContent/MainContent"
import Register_shopAdmin from "./register/register_shopAdmin"
import ShopSetup from "./mainContent/shopSetup/ShopSetup"
import { useDispatch, useSelector } from "react-redux"
import { createService_selector, getAllTicket_selector, getService_selector, getSubscription_selector, infoShop_selector, pagesShopSetup_selector, toggleChangeStatusService_selector } from "../../../redux/selectors/shopAdmin/ShopAdmin_selector"
import { useEffect, useState } from "react"
import API_GET_INFO_SHOP from "../../api/shopAdmin/infoShop/API_GET_INFO_SHOP"
import LoadingScreen from "./loadingScreen/LoadingScreen"
import API_GET_SERVICES from "../../api/shopAdmin/services/API_GET_SERVICES"
import API_GET_SUBSCRIPTION from "../../api/shopAdmin/subscription/API_GET_SUBSCRIPTION"
import API_GET_PLANS from "../../api/shopAdmin/subscription/API_GET_PLANS"
import SubscriptionExpired from "./mainContent/subscriptions/SubscriptionExpired/SubscriptionExpired"
import QueueSkilton from "./mainContent/queues/queueSkilton/QueueSkilton"
import API_GET_CURRENT_TICKET from "../../api/shopAdmin/queue/API_GET_CURRENT_TICKET"
import API_GET_ALL_TICKET from "../../api/shopAdmin/queue/API_GET_ALL_TICKET"
import MobileSidebar from "./sidebar/mobileSidebar/MobileSidebar"



function ShopAdmin() {
    let dispatch = useDispatch()
    let infoShop = useSelector(infoShop_selector)
    let idShop = infoShop?.shop?.id
    // console.log(idShop)
    let TUEChangeSetupCompleted = infoShop?.TUE
    let setupCompleted = infoShop?.shop?.setup_completed
    let getAllTicket = useSelector(getAllTicket_selector)
    let tickets = getAllTicket?.tickets
    let toggleChangeStatusService = useSelector(toggleChangeStatusService_selector)

let subscriptionState = useSelector(getSubscription_selector);

let subscription = subscriptionState?.subscription;
let subscriptionLoading = subscriptionState?.loading;

    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    // console.log(setupCompleted)

    useEffect(() => {
        API_GET_INFO_SHOP(dispatch)
        API_GET_SUBSCRIPTION(dispatch)
        API_GET_PLANS(dispatch)
    }, [TUEChangeSetupCompleted])




    let pagesShopSetup = useSelector(pagesShopSetup_selector)

   if (
    showLoading ||
    !infoShop?.shop ||
    subscriptionLoading === 1

) {
    return <LoadingScreen  />;
}

    const isSubscriptionExpired =
    subscription?.ends_at &&
    new Date(subscription.ends_at) < new Date();


if (isSubscriptionExpired) {
    return <SubscriptionExpired />;
}







    return (
        <>


            {/* <Register_shopAdmin/> */}

            {setupCompleted == 1 ? (
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 250px", }, // عمود للقائمة وعمود للمحتوى
                        // bgcolor: '#F6F7F8',
                    }}
                >


                    <Box  >
                        <Navbar dispatch={dispatch} />


                        <Box sx={{ overflowY: "auto" }}>
                            <MainContent />
                        </Box>

                    </Box>
                    <Box>
                        <Sidebar dispatch={dispatch} />
                        <MobileSidebar dispatch={dispatch}/>
                    </Box>

                </Box>
            ) : setupCompleted == 0 ? (
                <ShopSetup infoShop={infoShop} />
            ) : (
                'no data'
            )
            }




        </>
    )
}

export default ShopAdmin
