// import Echo from "laravel-echo";
// import Pusher from "pusher-js";

// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: "reverb",
//     key: import.meta.env.VITE_REVERB_APP_KEY,
//     wsHost: window.location.hostname,
//     wsPort: 8080,
//     forceTLS: false,
//     enabledTransports: ["ws"],
// });


import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "reverb",
    key: import.meta.env.VITE_REVERB_APP_KEY,

    wsHost: window.location.hostname,

    wsPort: Number(import.meta.env.VITE_REVERB_PORT) || 8080,

    forceTLS: window.location.protocol === "https:",

    enabledTransports: ["ws", "wss"],
});
