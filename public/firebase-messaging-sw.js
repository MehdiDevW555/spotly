// importScripts(
//     "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
// );

// importScripts(
//     "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
// );

// firebase.initializeApp({
//     apiKey: "AIzaSyAUjyNbF__Ki6QVYmpviFP9MEddgZxGZIQ",
//     authDomain: "spotlly.firebaseapp.com",
//     projectId: "spotlly",
//     storageBucket: "spotlly.firebasestorage.app",
//     messagingSenderId: "1057323783239",
//     appId: "1:1057323783239:web:c9d2e421f615d9e8e94d62",
// });

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     self.registration.showNotification(
//         payload.notification.title,
//         {
//             body: payload.notification.body,
//             icon: "/logo192.png",
//         }
//     );
// });












// importScripts(
//     "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
// );

// importScripts(
//     "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
// );

// firebase.initializeApp({
//     apiKey: "AIzaSyAUjyNbF__Ki6QVYmpviFP9MEddgZxGgZIQ",
//     authDomain: "spotlly.firebaseapp.com",
//     projectId: "spotlly",
//     storageBucket: "spotlly.firebasestorage.app",
//     messagingSenderId: "1057323783239",
//     appId: "1:1057323783239:web:c9d2e421f615d9e8e94d62",
// });

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log(
//         "[firebase-messaging-sw.js] Background message:",
//         payload
//     );

//     const { title, body, icon } = payload.data || {};

//     if (!title) return;

//     self.registration.showNotification(title, {
//         body: body || "",
//         icon: icon || "/logo192.png",
//     });
// });


























importScripts(
    "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
    "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyAUjyNbF__Ki6QVYmpviFP9MEddgZxGZIQ",
    authDomain: "spotlly.firebaseapp.com",
    projectId: "spotlly",
    storageBucket: "spotlly.firebasestorage.app",
    messagingSenderId: "1057323783239",
    appId: "1:1057323783239:web:c9d2e421f615d9e8e94d62",
});

const messaging = firebase.messaging();


// ======================================================
// FCM — BACKGROUND
// ======================================================

messaging.onBackgroundMessage((payload) => {

    console.log("📨 BACKGROUND FCM:", payload);

    const data = payload?.data || {};

    const title =
        data.title ||
        "Spotlly";

    const body =
        data.body ||
        "";

    const icon =
        data.icon ||
        "https://spotlly.com/images/slogo.png";

    const image =
        data.image ||
        null;

    const url =
        data.url ||
        "/";


    // ==================================================
    // Notification options
    // ==================================================

    const options = {

        body: body,

        icon: icon,

        badge: icon,

        tag:
            data.ticket_uuid ||
            "spotlly-ticket",

        renotify: true,

        requireInteraction: true,

        vibrate: [
            200,
            100,
            200
        ],

        data: {

            url: url,

            ticketId:
                data.ticket_id || null,

            ticketUuid:
                data.ticket_uuid || null,

            status:
                data.status || null,
        },
    };


    // ==================================================
    // صورة الإشعار
    // ==================================================

    if (image) {
        options.image = image;
    }


    // ==================================================
    // إنشاء إشعار واحد
    // ==================================================

    return self.registration.showNotification(
        title,
        options
    );
});


// ======================================================
// الضغط على الإشعار
// ======================================================

self.addEventListener(
    "notificationclick",
    (event) => {

        event.notification.close();

        const notificationData =
            event.notification?.data || {};

        const url =
            notificationData.url || "/";


        event.waitUntil(

            clients
                .matchAll({
                    type: "window",
                    includeUncontrolled: true,
                })

                .then((windowClients) => {

                    const targetUrl =
                        new URL(
                            url,
                            self.location.origin
                        ).href;


                    // البحث عن Spotlly مفتوح
                    for (
                        const client of windowClients
                    ) {

                        if (
                            client.url === targetUrl &&
                            "focus" in client
                        ) {

                            return client.focus();
                        }
                    }


                    // فتح Spotlly
                    if (clients.openWindow) {

                        return clients.openWindow(
                            targetUrl
                        );
                    }

                })
        );
    }
);


// ======================================================
// Service Worker جاهز
// ======================================================

console.log(
    "🔥 Spotlly FCM Service Worker loaded"
);
