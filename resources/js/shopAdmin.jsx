import { registerSW } from 'virtual:pwa-register';

registerSW({
    immediate: true,
});



import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./conponentSpotly/spotly_files/app/App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import Store from "./redux/Store";
import ShopAdmin from "./conponentSpotly/spotly_files/shopAdmin/ShopAdmin";
import Register_shopAdmin from "./conponentSpotly/spotly_files/shopAdmin/register/register_shopAdmin";

ReactDOM.createRoot(document.getElementById('app')).render(

<Provider store={Store}>
        {/* <ThemeProvider theme={theme}> */}
            {/* <CssBaseline /> */}

            <BrowserRouter>
                <Routes>
                      <Route path="/shopAdmin" element={<ShopAdmin />} />
                    <Route path="/shopAdmin/register" element={<Register_shopAdmin/>} />


                </Routes>
            </BrowserRouter>
        {/* </ThemeProvider> */}
    </Provider>




);

