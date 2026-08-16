<!DOCTYPE html>
<html class="dark" dir="rtl" lang="ar">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700;800&amp;display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet">
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "inverse-on-surface": "#303032",
                        "secondary": "#a7caf3",
                        "sky-accent": "#B2D5FF",
                        "on-primary-fixed": "#0f0069",
                        "primary": "#c3c0ff",
                        "surface-variant": "#343536",
                        "surface-container-low": "#1b1c1d",
                        "on-secondary-fixed-variant": "#25496c",
                        "tertiary": "#ffb68f",
                        "error": "#ffb4ab",
                        "border-subtle": "rgba(255, 255, 255, 0.08)",
                        "surface-dim": "#121315",
                        "surface-gray": "#16191D",
                        "surface-container-lowest": "#0d0e0f",
                        "surface-container-highest": "#343536",
                        "primary-container": "#635bff",
                        "tertiary-fixed": "#ffdbca",
                        "surface-bright": "#38393a",
                        "primary-fixed": "#e2dfff",
                        "on-error": "#690005",
                        "on-secondary-container": "#99bbe4",
                        "on-tertiary-fixed-variant": "#773200",
                        "on-error-container": "#ffdad6",
                        "primary-fixed-dim": "#c3c0ff",
                        "secondary-fixed-dim": "#a7caf3",
                        "on-tertiary-container": "#fffaf9",
                        "surface-tint": "#c3c0ff",
                        "tertiary-fixed-dim": "#ffb68f",
                        "on-tertiary-fixed": "#331100",
                        "on-surface-variant": "#c7c4d8",
                        "on-surface": "#e3e2e3",
                        "on-background": "#e3e2e3",
                        "on-primary-fixed-variant": "#321ed2",
                        "on-primary-container": "#fefaff",
                        "inverse-primary": "#4c42e9",
                        "outline": "#918fa1",
                        "background": "#121315",
                        "on-tertiary": "#542100",
                        "error-container": "#93000a",
                        "surface-container-high": "#292a2b",
                        "surface": "#121315",
                        "on-primary": "#1d00a5",
                        "tertiary-container": "#be5400",
                        "secondary-fixed": "#d0e4ff",
                        "deep-navy": "#0A2540",
                        "on-secondary": "#063254",
                        "electric-indigo": "#7000FF",
                        "outline-variant": "#464555",
                        "surface-container": "#1f2021",
                        "on-secondary-fixed": "#001d35",
                        "secondary-container": "#274b6e",
                        "inverse-surface": "#e3e2e3"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "container-max": "1200px",
                        "section-gap": "120px",
                        "base": "8px",
                        "section-gap-mobile": "64px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "body-md": ["Hanken Grotesk"],
                        "label-caps": ["Hanken Grotesk"],
                        "display-lg-mobile": ["Hanken Grotesk"],
                        "display-lg": ["Hanken Grotesk"],
                        "headline-md": ["Hanken Grotesk"],
                        "body-lg": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "body-md": ["16px", {
                            "lineHeight": "24px",
                            "fontWeight": "400"
                        }],
                        "label-caps": ["12px", {
                            "lineHeight": "16px",
                            "letterSpacing": "0.05em",
                            "fontWeight": "600"
                        }],
                        "display-lg-mobile": ["40px", {
                            "lineHeight": "48px",
                            "letterSpacing": "-0.02em",
                            "fontWeight": "800"
                        }],
                        "display-lg": ["64px", {
                            "lineHeight": "72px",
                            "letterSpacing": "-0.04em",
                            "fontWeight": "800"
                        }],
                        "headline-md": ["32px", {
                            "lineHeight": "40px",
                            "letterSpacing": "-0.02em",
                            "fontWeight": "700"
                        }],
                        "body-lg": ["18px", {
                            "lineHeight": "28px",
                            "fontWeight": "400"
                        }]
                    }
                },
            },
        }
    </script>
    <style>
        body {
            background-color: #121315;
            color: #e3e2e3;
            overflow-x: hidden;
        }

        .glass-panel {
            background: rgba(22, 25, 29, 0.6);

        }

        img {
            width: 250px;
            margin-top:70px;
            /* height: 150px; */
            /* margin-bottom: 10px; */
        }

        .atmospheric-glow {
            position: fixed;
            width: 100vw;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
            background: radial-gradient(circle at 80% 20%, rgba(99, 91, 255, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 20% 80%, rgba(112, 0, 255, 0.1) 0%, transparent 40%);
        }

        .luminous-border:focus-within {
            border-color: #635BFF;
            box-shadow: 0 0 15px rgba(99, 91, 255, 0.3);
        }


    </style>
</head>

<body class="font-body-md text-body-md antialiased overflow-hidden">
    <div class="atmospheric-glow"></div>

    <main class="h-screen flex items-center justify-center px-4  relative">

        <!-- Decoration -->
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none">
            <div class="absolute inset-0 border border-primary/20 rounded-full"></div>
            <div class="absolute inset-16 border border-secondary/10 rounded-full"></div>
        </div>

        <div class="w-full max-w-[460px] z-10 scale-[0.85] md:scale-[0.9] lg:scale-100 origin-center">

            <!-- Logo -->
            <div class="flex justify-center mb-5">
                <div class="relative group">

                    <img alt="Spotly Logo" src="/images/spotlyLogo.png" />
                </div>
            </div>

            <!-- Card -->
            <div class="glass-panel rounded-3xl p-6 md:p-8">

                <header class="text-center mb-5">
                    <h1 class="text-3xl font-bold mb-2">
                        Join Spotly Today
                    </h1>

                    <p class="text-on-surface-variant">
                        انضم إلى مستقبل إدارة الطوابير الذكية
                    </p>
                </header>

                <form class="space-y-3">

                    <!-- Name -->
                    <div class="space-y-1">
                        <label class="block text-on-surface-variant text-sm">
                            الاسم الكامل
                        </label>

                        <div class="relative luminous-border rounded-xl border border-white/10">
                            <span
                                class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                                person
                            </span>

                            <input type="text" placeholder="أدخل اسمك الكامل"
                                class="w-full bg-surface-container-low rounded-xl py-3 pr-12 pl-4 outline-none" />
                        </div>
                    </div>

                    <!-- Company -->
                    <div class="space-y-1">
                        <label class="block text-on-surface-variant text-sm">
                            اسم المنشأة
                        </label>

                        <div class="relative luminous-border rounded-xl border border-white/10">
                            <span
                                class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                                store
                            </span>

                            <input type="text" placeholder="أدخل اسم عملك"
                                class="w-full bg-surface-container-low rounded-xl py-3 pr-12 pl-4 outline-none" />
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="space-y-1">
                        <label class="block text-on-surface-variant text-sm">
                            البريد الإلكتروني
                        </label>

                        <div class="relative luminous-border rounded-xl border border-white/10">
                            <span
                                class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                                mail
                            </span>

                            <input type="email" placeholder="name@company.com" dir="ltr"
                                class="w-full bg-surface-container-low rounded-xl py-3 pr-12 pl-4 outline-none" />
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="space-y-1">
                        <label class="block text-on-surface-variant text-sm">
                            كلمة المرور
                        </label>

                        <div class="relative luminous-border rounded-xl border border-white/10">
                            <span
                                class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
                                lock
                            </span>

                            <input type="password" placeholder="••••••••" dir="ltr"
                                class="w-full bg-surface-container-low rounded-xl py-3 pr-12 pl-4 outline-none" />
                        </div>
                    </div>

                    <!-- Terms -->
                    <div class="flex items-start gap-3 pt-1">
                        <input type="checkbox" class="w-4 h-4 mt-1" />

                        <label class="text-sm text-on-surface-variant">
                            أوافق على
                            <a href="#" class="text-primary">
                                الشروط والأحكام
                            </a>
                            و
                            <a href="#" class="text-primary">
                                سياسة الخصوصية
                            </a>
                        </label>
                    </div>

                    <!-- Button -->
                    <button class="w-full bg-primary-container text-white font-bold py-3 rounded-xl mt-2">
                        Create Account
                    </button>

                </form>



            </div>



        </div>

    </main>

</body>

</html>
