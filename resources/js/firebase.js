// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//     apiKey: "AIzaSyAUjyNbF__Ki6QVYmpviFP9MEddgZxGZIQ",
//     authDomain: "spotlly.firebaseapp.com",
//     projectId: "spotlly",
//     storageBucket: "spotlly.firebasestorage.app",
//     messagingSenderId: "1057323783239",
//     appId: "1:1057323783239:web:c9d2e421f615d9e8e94d62",
// };

// const app = initializeApp(firebaseConfig);

// export const messaging = getMessaging(app);







// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";
// // import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//     apiKey: "AIzaSyAUjyNbF__Ki6QVYmpviFP9MEddgZxGZIQ",
//     authDomain: "spotlly.firebaseapp.com",
//     projectId: "spotlly",
//     storageBucket: "spotlly.firebasestorage.app",
//     messagingSenderId: "1057323783239",
//     appId: "1:1057323783239:web:c9d2e421f615d9e8e94d62",
// };

// const app = initializeApp(firebaseConfig);

// let messaging = null;

// if (typeof window !== "undefined") {
//     messaging = getMessaging(app);
// }

// export { messaging };


























import { initializeApp } from "firebase/app";
import {
    getMessaging,
    getToken,
} from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAUjyNbF__Ki6QVympviFP9MEddgZxGZIQ",
    authDomain: "spotlly.firebaseapp.com",
    projectId: "spotlly",
    storageBucket: "spotlly.firebasestorage.app",
    messagingSenderId: "1057323783239",
    appId: "1:1057323783239:web:c9d2e421f615d9e8e94d62",
};

const app = initializeApp(firebaseConfig);

let messaging = null;

if (typeof window !== "undefined") {
    messaging = getMessaging(app);
}

export { messaging };
