import axios from 'axios'
import {
    changeQueue,
    changeTicketStatus
} from '../../../redux/slices/users/Users_slice'

function API_GET_SHOP_QUEUE_STATUS(dispatch, uuid) {

    axios.post('/api/web/getShopQueueStatus', { uuid })

        .then((data_r) => {

            console.log(data_r)

            dispatch(
                changeQueue({
                    lastTicketNumber: data_r.data.last_ticket_number,
                    waitingCount: data_r.data.waiting_count,
                    lastServedNumber:data_r.data.last_served_number,
                    queueOpen: data_r.data.queue_open,
                })
            )

            dispatch(
                changeTicketStatus({
                    currentNumber: data_r.data.current_number
                })
            )

        })

        .catch((err) => {
            console.log(err.response)
        })
}

export default API_GET_SHOP_QUEUE_STATUS
























