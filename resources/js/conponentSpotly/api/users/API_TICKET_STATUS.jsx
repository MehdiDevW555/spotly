import axios from 'axios'
import {
    changeTicketStatus
} from '../../../redux/slices/users/Users_slice'

function API_TICKET_STATUS(
    dispatch,
    ticketUuid,
    shopUuid
) {

    console.log("SEND UUID:", ticketUuid)
    console.log("SHOP UUID:", shopUuid)

    axios.get(
        `/api/web/customer/ticket-status/${ticketUuid}`
    )
        .then((res) => {

            console.log("TICKET RESPONSE:", res.data)

            if (res.data.active) {

                dispatch(changeTicketStatus({
                    activeTicket: true,
                    ticketNumber: res.data.ticket_number,
                    peopleBeforeMe: res.data.people_before_me,
                    status: res.data.status,
                    customer: res.data.customer
                }))

            } else {

                console.log(
                    "TICKET FINISHED:",
                    res.data.status
                )

                localStorage.removeItem(
                    `ticket_uuid_${shopUuid}`
                )

                localStorage.removeItem(
                    `ticket_id_${shopUuid}`
                )

                dispatch(changeTicketStatus({
                    activeTicket: false,
                    status: res.data.status,
                    ticketNumber: null,
                    peopleBeforeMe: 0,
                    customer: null
                }))
            }

        })
        .catch((err) => {

            console.log("TICKET ERROR:", err)

        })
        .finally(() => {

            dispatch(changeTicketStatus({
                checking: false
            }))

        })
}

export default API_TICKET_STATUS




















































// import axios from 'axios'
// import React from 'react'
// import { changeTicketStatus } from '../../../redux/slices/users/Users_slice'

// function API_TICKET_STATUS(dispatch, ticketUuid) {

//     console.log("SEND UUID:", ticketUuid);

//     axios.get(
//         `/api/web/customer/ticket-status/${ticketUuid}`
//     )
//         .then((res) => {

//             console.log("TICKET RESPONSE:", res.data);

//             if (res.data.active) {

//                 dispatch(changeTicketStatus({
//                     activeTicket: true,
//                     ticketNumber: res.data.ticket_number,
//                     peopleBeforeMe: res.data.people_before_me,
//                     status: res.data.status
//                 }))

//             } else {

//                 console.log("TICKET FINISHED:", res.data.status);

//                 localStorage.removeItem("ticket_uuid")

//                 dispatch(changeTicketStatus({
//                     activeTicket:false,
//                     status:res.data.status,
//                     ticketNumber:null,
//                     peopleBeforeMe:0
//                 }))
//             }

//         })
//         .catch((err) => {

//             console.log("TICKET ERROR:", err)

//         })
//         .finally(() => {

//             dispatch(changeTicketStatus({
//                 checking: false
//             }))

//         })
// }

// export default API_TICKET_STATUS
