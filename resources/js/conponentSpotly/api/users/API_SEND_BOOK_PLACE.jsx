
import axios from 'axios'
import {
    changeBookPlace,
    changeTicketStatus
} from '../../../redux/slices/users/Users_slice'
import API_TICKET_STATUS from './API_TICKET_STATUS'


function API_SEND_BOOK_PLACE(dispatch, uuid, full_name, phone, serviceId, tUEFF) {
    dispatch(changeBookPlace({ loading: 0 }))
    axios.post('/api/web/sendBookPlace', { uuid, full_name, phone, serviceId })
        .then((data_r) => {
            localStorage.setItem(
                `ticket_uuid_${uuid}`,
                data_r.data.ticket_uuid
            )

            window.location.reload();

            // dispatch(changeBookPlace({
            //     full_name: '',
            //     phone: '',
            //     service_id: '',
            //     loading: 2
            // }))


            // dispatch(changeTicketStatus({
            //     checking: true,
            //     // TUEFF: !tUEFF
            // }))

            // // جلب حالة التذكرة مباشرة
            // API_TICKET_STATUS(
            //     dispatch,
            //     data_r.data.ticket_uuid
            // )



        })


        .catch((err) => {
            console.log(err.response)
            dispatch(changeBookPlace({
                loading: 1,
                message: err.response.data.message,
                errors: err.response.data.errors
            }))

        })

}


export default API_SEND_BOOK_PLACE
















