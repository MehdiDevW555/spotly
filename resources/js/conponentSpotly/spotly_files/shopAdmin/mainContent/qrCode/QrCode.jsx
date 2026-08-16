import {
    Box,
    Paper,
    Typography,
    Button,
} from "@mui/material";

import QrCode2Icon from "@mui/icons-material/QrCode2";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BoltIcon from "@mui/icons-material/Bolt";
// import MonitoringIcon from "@mui/icons-material/Monitoring";
import InfoIcon from "@mui/icons-material/Info";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import EmptyQrCode from "./emptyQrCode/EmptyQrCode";
import { useDispatch } from "react-redux";


function QrCode() {
    let dispatch = useDispatch()
    return (

        <Box>
            <EmptyQrCode dispatch={dispatch} />
        </Box>
    )
}

export default QrCode
