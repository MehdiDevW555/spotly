<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Spotlly – نظام إدارة الطوابير والحجوزات</title>

    <meta
        name="description"
        content="Spotlly هو نظام ذكي لإدارة الطوابير والحجوزات وتنظيم انتظار الزبائن بسهولة."
    >

    <meta name="robots" content="index, follow">

    <link rel="canonical" href="https://spotlly.com/">

    <link
    rel="icon"
    type="image/x-icon"
    href="{{ asset('favicon.ico') }}"
>

   <link rel="manifest" href="/build/manifest.webmanifest">

<meta name="theme-color" content="#F1EBFD">

<link rel="apple-touch-icon" href="/icons/pwa-192x192.png">



    @viteReactRefresh

    @vite(['resources/js/shopAdmin.jsx'])

    <link rel="preload" href="/images/slogo.png" as="image">
    <link rel="preload" href="/images/slogoo.png" as="image">
    <link rel="preload" href="/images/spotlyLogo.png" as="image">

    <link rel="preconnect" href="https://fonts.bunny.net">

    <link
        href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap"
        rel="stylesheet"
    >

    <style>
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

</style>
</head>

<body >

    <div id="app"></div>

</body>

</html>
