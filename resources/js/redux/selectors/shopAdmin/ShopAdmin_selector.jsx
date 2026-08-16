




let toggleMenu_selector = (state) => state.shopAdmin?.dashboard?.header?.toggleMenu
let openFeb_selector = (state) => state.shopAdmin?.dashboard?.header?.openFeb
let dataRegisterShopAdmin_selector = (state) => state.shopAdmin?.dashboard?.dataRegisterShopAdmin
let pagesShopSetup_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.page
let toggleDialogCreateTicket_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.toggleDialogCreateTicket
let currentPage_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.currentPage
let previousPage_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.previousPage

let pagesDashboard_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.pagesDashboard
let pagesServices_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.pagesServices


let infoShop_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.infoShop
let shop_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.shop
let createService_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.createService
let getService_selector = (state) => state.shopAdmin?.dashboard?.mainContent?.getService
let getAllTicket_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.getAllTicket
let getCurrentTicket_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.getCurrentTicket
let startService_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.startService
let completeService_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.completeService
let toggleChangeStatusService_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.toggleChangeStatusService
let cancelService_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.cancelService
let getSubscription_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.getSubscription
let getQueueStatus_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.getQueueStatus
let dataQueueStatus_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.dataQueueStatus
let toggleUpdateQueueStatus_selector = (state)=>state.shopAdmin?.dashboard?.mainContent?.toggleUpdateQueueStatus


// startService dataQueueStatus




export {
    toggleMenu_selector,
    openFeb_selector,
    dataRegisterShopAdmin_selector,
    toggleDialogCreateTicket_selector,
    pagesShopSetup_selector,
    currentPage_selector,
    previousPage_selector,
    pagesDashboard_selector,
    pagesServices_selector,
    infoShop_selector,
    shop_selector,
    createService_selector,
    getService_selector,
    getAllTicket_selector,
    getCurrentTicket_selector,
    startService_selector,
    completeService_selector,
    toggleChangeStatusService_selector,
    cancelService_selector,
    getSubscription_selector,
    getQueueStatus_selector,
    dataQueueStatus_selector,
    toggleUpdateQueueStatus_selector,
}
