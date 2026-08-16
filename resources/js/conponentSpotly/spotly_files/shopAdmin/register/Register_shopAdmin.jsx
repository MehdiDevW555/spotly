


import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    CircularProgress,
} from "@mui/material";

// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from "react-redux";
import { dataRegisterShopAdmin_selector } from "../../../../redux/selectors/shopAdmin/ShopAdmin_selector";
import { ChangeDataRegisterShopAdmin } from "../../../../redux/slices/shopAdmin/ShopAdmin_slice";
import API_SEND_DATA_REGISTER_SHOP_ADMIN from "../../../api/shopAdmin/register/API_SEND_DATA_REGISTER_SHOP_ADMIN";
import VerifyEmailPage from "./verifyEmailPage/VerifyEmailPage";
import AccountAlreadyExists from "./accountAlreadyExists/AccountAlreadyExists";
import RegisterPage from "./registerPage/RegisterPage ";
// import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Step5 from "../../../../img/app/step5.png"



function Register_shopAdmin() {
    let dispatch = useDispatch()
    let dataRegisterShopAdmin = useSelector(dataRegisterShopAdmin_selector)


    let Message = dataRegisterShopAdmin?.message

return (
    <>
        {
            Message === 'Email already registered and verified.' ? (
                <AccountAlreadyExists />
            ) : Message === 'Registration successful. Please verify your email.' || Message==='Verification email resent' ? (
                <VerifyEmailPage />
            ) : (
                <RegisterPage dispatch={dispatch} dataRegisterShopAdmin={dataRegisterShopAdmin} />
            )
        }
    </>
);
}



export default Register_shopAdmin
