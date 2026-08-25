
import { createSlice } from "@reduxjs/toolkit";
import { changeBookPlace } from "../users/Users_slice";

const ShopAdmin = createSlice({
    name: "ShopAdmin",
    initialState: {
        dataRegisterShopAdmin: { full_name: '', shop_name: '', email: '', phone: '', password: '', confirm_password: '', loading: 0, message: '', errors: {} },
        header: {
            toggleMenu: false,
            openFeb: false,
        },
        mainContent: {
            infoShop: { address: '', business_type: '', loading: 0, TUE: false },
            shop: {},
            page: "WelcomeShopSetup",
            toggleDialogCreateTicket: false,
            currentPage: 'Queues',
            previousPage: 'Queues',
            pagesServices: '',
            pagesDashboard: '',
            shopSetup: {},
            createService: { name: '', description: '', price: '', status: '', estimated_time: '', loading: 0, TUEFF: true, message: '', errors: {} },
            getServices: { services: [], loading: 0 },
            getAllTicket: { tickets: [], loading: 0, TUEFF: true },
            getCurrentTicket: { currentTicket: null, loading: 0, TUEFF: true },
            startService: { loading: 0, message: '', TUEFF: true },
            completeService: { loading: 0, message: '', TUEFF: true },
            cancelService: { loading: 0, message: '', TUEFF: true },
            recallUser: { loading: 0, message: '' },
            toggleChangeStatusService: false,
            getSubscription: { subscription: {}, loading: null },
            getQueueStatus: { queueStatus: null, loading: null },
            dataQueueStatus: null,
            toggleUpdateQueueStatus: false,
            bookPlaceManually: { full_name: '', phone: '', service_id: '', loading: 0, errors: {} },
        },

    },
    reducers: {
        ChangeToggleMenu: (state, action) => { state.header.toggleMenu = !state.header.toggleMenu },
        changeOpenFeb: (state, action) => { state.header.openFeb = !state.header.openFeb },
        ChangeDataRegisterShopAdmin: (state, action) => {
            state.dataRegisterShopAdmin = { ...state.dataRegisterShopAdmin, ...action.payload }
        },
        ChangeToggleDialogCreateTicket: (state, action) => {
            state.mainContent.toggleDialogCreateTicket = !state.mainContent.toggleDialogCreateTicket;
        },
        ChangeCurrentPage: (state, action) => {
            state.mainContent.currentPage = action.payload;
        },
        ChangePreviousPage: (state, action) => {
            state.mainContent.previousPage = action.payload;
        },
        ChangePagesShopSetup: (state, action) => {
            state.mainContent.page = action.payload
        },
        ChangePagesDashboard: (state, action) => {
            state.mainContent.pagesDashboard = action.payload;
        },
        ChangePagesServices: (state, action) => {
            state.mainContent.pagesServices = action.payload;
        },

        ChangeInfoShop: (state, action) => {
            state.mainContent.infoShop = { ...state.mainContent.infoShop, ...action.payload }
        },
        ChangeShop: (state, action) => {
            state.mainContent.shop = { ...state.mainContent.shop, ...action.payload }
        },
        changeCreateService: (state, action) => {
            state.mainContent.createService = { ...state.mainContent.createService, ...action.payload }
        },
        changeGetService: (state, action) => {
            state.mainContent.getService = { ...state.mainContent.getService, ...action.payload }
        },
        changeGetAllTicket: (state, action) => {
            state.mainContent.getAllTicket = { ...state.mainContent.getAllTicket, ...action.payload }
        },
        changeGetCurrentTicket: (state, action) => {
            state.mainContent.getCurrentTicket = { ...state.mainContent.getCurrentTicket, ...action.payload }
        },
        changeStartService: (state, action) => {
            state.mainContent.startService = { ...state.mainContent.startService, ...action.payload }
        },
        changeCompleteService: (state, action) => {
            state.mainContent.completeService = { ...state.mainContent.completeService, ...action.payload }
        },
        changeToggleChangeStatusService: (state, action) => {
            state.mainContent.toggleChangeStatusService = !state.mainContent.toggleChangeStatusService
        },
        changeCancelService: (state, action) => {
            state.mainContent.cancelService = { ...state.mainContent.cancelService, ...action.payload }
        },
        changeRecallUser: (state, action) => {
            state.mainContent.recallUser = { ...state.mainContent.recallUser, ...action.payload }
        },
        changeGetSubscription: (state, action) => {
            state.mainContent.getSubscription = { ...state.mainContent.getSubscription, ...action.payload }
        },
        changeDataQueueStatus: (state, action) => {
            state.mainContent.dataQueueStatus = { ...state.mainContent.dataQueueStatus, ...action.payload }
        },
        changeGetQueueStatus: (state, action) => {
            state.mainContent.getQueueStatus = { ...state.mainContent.getQueueStatus, ...action.payload }
        },
        changeToggleUpdateQueueStatus: (state, action) => {
            state.mainContent.toggleUpdateQueueStatus = !state.mainContent.toggleUpdateQueueStatus
        },
        changeBookPlaceManually:(state,action)=>{
            state.mainContent.bookPlaceManually = {...state.mainContent.bookPlaceManually , ...action.payload}
        }




    }
});
export const { ChangeToggleMenu, changeOpenFeb, ChangeDataRegisterShopAdmin, ChangeToggleDialogCreateTicket,
    ChangeCurrentPage, ChangePreviousPage, ChangePagesServices, ChangePagesDashboard,
    ChangePagesShopSetup, ChangeInfoShop, ChangeShop, changeCreateService, changeGetService,
    changeGetAllTicket, changeGetCurrentTicket, changeStartService, changeCompleteService,
    changeToggleChangeStatusService, changeCancelService, changeRecallUser, changeGetSubscription,
    changeDataQueueStatus, changeGetQueueStatus, changeToggleUpdateQueueStatus,changeBookPlaceManually } = ShopAdmin.actions;
export default ShopAdmin.reducer;
