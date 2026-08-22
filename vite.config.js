// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.jsx','resources/js/shopAdmin.jsx'],
//             refresh: true,

//         }),
//         react(),
//     ],
// });



// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/js/users.css', 'resources/js/app.jsx','resources/js/shopAdmin.jsx'],
//             refresh: true,

//             server: {
//                 hmr: {
//                     host: '192.168.100.6',
//                 },
//             },

//         }),
//         react(),
//     ],


//     server: {
//         // host: '127.0.0.1',
//         host: '192.168.100.6',
//         port: 5173, // يمكنك تحديد المنفذ إن أردت
//         // https: {
//         //     key: fs.readFileSync('path/to/localhost-key.pem'),
//         //     cert: fs.readFileSync('path/to/localhost-cert.pem'),
//         // },
//     },
// });






import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [

        laravel({
            input: [
                'resources/js/users.jsx',
                'resources/js/app.jsx',
                'resources/js/shopAdmin.jsx'
            ],
            refresh: true,

            // server: {
            //     hmr: {
            //         host: '192.168.100.6',
            //     },
            // },
        }),

        react(),

        VitePWA({
            registerType: 'autoUpdate',

            manifest: {
                name: 'Spotly',
                short_name: 'Spotly',
                description: 'Smart Queue Management System',

                theme_color: '#3989EC',
                background_color: '#ffffff',

                display: 'standalone',

                start_url: '/',
                scope: '/',

               icons: [
    {
        src: '/icons/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
    },
    {
        src: '/icons/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
    },
],
            },
        }),
    ],

    // server: {
    //     host: '192.168.100.6',
    //     port: 5173,
    // },
});
