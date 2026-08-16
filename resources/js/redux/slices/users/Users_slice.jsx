import { createSlice } from "@reduxjs/toolkit";

const Users = createSlice({
    name: "Users",

    initialState: {

        shop: {},

        queue: {
            lastTicketNumber: 0,
            waitingCount: 0,
            lastCustomer: null,
            lastServedNumber: null,
            queueOpen: null,
        },


        bookPlace: {
            full_name: '',
            phone: '',
            service_id: '',
            loading: -1,
            errors: {}
        },


        ticketStatus: {
            checking: true,
            activeTicket: false,
            status: null,
            ticketNumber: null,
            peopleBeforeMe: null,
            TUEFF: false,
            currentNumber: 0,
            customer: null
        }

    },


    reducers: {


        ChangeShop: (state, action) => {
            state.shop = {
                ...state.shop,
                ...action.payload
            }
        },


        changeQueue: (state, action) => {
            state.queue = {
                ...state.queue,
                ...action.payload
            }
        },


        changeBookPlace: (state, action) => {
            state.bookPlace = {
                ...state.bookPlace,
                ...action.payload
            }
        },


        changeTicketStatus: (state, action) => {
            state.ticketStatus = {
                ...state.ticketStatus,
                ...action.payload
            }
        }

    }
});


export const {
    ChangeShop,
    changeQueue,
    changeBookPlace,
    changeTicketStatus
} = Users.actions;


export default Users.reducer;
