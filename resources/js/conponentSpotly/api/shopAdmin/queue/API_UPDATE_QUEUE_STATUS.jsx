import axios from 'axios'
import { changeGetQueueStatus, changeToggleChangeStatusService, changeToggleUpdateQueueStatus } from '../../../../redux/slices/shopAdmin/ShopAdmin_slice'

function API_UPDATE_QUEUE_STATUS(dispatch, idShop, queueOpen) {
    dispatch(changeGetQueueStatus({loading:1}))

    axios.post(
        '/api/web/updateQueueStatus',
        {
            idShop,
            queueOpen
        }
    )
        .then((data_r) => {

            console.log(data_r.data)
            // dispatch(changeGetQueueStatus({ queueStatus: data_r.data.queue_open }))
            dispatch(changeToggleUpdateQueueStatus())
                dispatch(changeGetQueueStatus({loading:0}))




        })
        .catch((err) => {

            console.log(err.response)
                dispatch(changeGetQueueStatus({loading:0}))


        })
}

export default API_UPDATE_QUEUE_STATUS
