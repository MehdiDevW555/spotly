<html dir="rtl" lang="ar"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" name="viewport"/><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/><script src="https://cdn.tailwindcss.com"></script><script id="tailwind-config">tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "tertiary-fixed": "#d3e4fe", "inverse-primary": "#b4c5ff", "on-secondary-fixed-variant": "#3f465c", "on-tertiary": "#ffffff", "primary-container": "#2563eb", "on-primary-container": "#eeefff", "secondary": "#565e74", "outline-variant": "#c3c6d7", "surface-bright": "#f7f9fb", "secondary-container": "#dae2fd", "on-error": "#ffffff", "surface-container": "#eceef0", "tertiary-container": "#5e6e85", "inverse-surface": "#2d3133", "secondary-fixed": "#dae2fd", "on-background": "#191c1e", "error-container": "#ffdad6", "primary": "#004ac6", "primary-fixed": "#dbe1ff", "on-surface": "#191c1e", "surface-variant": "#e0e3e5", "on-error-container": "#93000a", "inverse-on-surface": "#eff1f3", "on-primary-fixed-variant": "#003ea8", "background": "#f7f9fb", "on-primary-fixed": "#00174b", "tertiary-fixed-dim": "#b7c8e1", "surface": "#f7f9fb", "on-tertiary-fixed-variant": "#38484d", "surface-container-lowest": "#ffffff", "on-surface-variant": "#434655", "on-secondary-container": "#5c647a", "on-secondary": "#ffffff", "outline": "#737686", "primary-fixed-dim": "#b4c5ff", "on-tertiary-fixed": "#0b1c30", "error": "#ba1a1a", "surface-dim": "#d8dadc", "secondary-fixed-dim": "#bec6e0", "on-primary": "#ffffff", "surface-tint": "#0053db", "on-secondary-fixed": "#131b2e" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "margin-desktop": "32px", "xl": "32px", "gutter": "24px", "md": "16px", "margin-mobile": "16px", "lg": "24px", "3xl": "64px", "2xl": "48px", "xs": "4px", "sm": "8px", "base": "4px" }, "fontFamily": { "body-md": ["Inter"], "body-lg": ["Inter"], "code-mono": ["JetBrains Mono"], "title-md": ["Inter"], "display-lg": ["Inter"], "label-sm": ["Inter"], "headline-lg-mobile": ["Inter"], "headline-lg": ["Inter"] } } } }</script><style>@layer base { body { overscroll-behavior: none; } .pb-safe { padding-bottom: env(safe-area-inset-bottom, 0px); } .pt-safe { padding-top: env(safe-area-inset-top, 0px); } } .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; } [data-path="explore"].active .material-symbols-outlined { font-variation-settings: 'FILL' 1; } </style><style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head><body class="bg-surface font-body-md text-body-md text-on-surface"><header class="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="h-16 px-margin-mobile flex items-center justify-between"><div class="flex items-center gap-md"><span class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Explore</span></div><div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main class="relative w-full pt-16 pb-32 bg-surface min-h-screen"><div class="flex flex-col w-full">
<!-- Search & Filter Section -->
<div class="px-margin-mobile flex items-center gap-sm mb-lg">
<div class="flex-1 relative group">
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary">search</span>
<input class="w-full h-12 pr-11 pl-4 bg-surface-container-low rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/60" placeholder="ابحث عن محلات، خدمات، أو عروض..." type="text"/>
</div>
<button class="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-xl text-on-surface-variant hover:bg-secondary-container hover:text-primary transition-all shadow-sm">
<span class="material-symbols-outlined">map</span>
</button>
</div>
<!-- Horizontal Categories Chips -->
<div class="mb-lg overflow-x-auto scrollbar-hide flex gap-sm px-margin-mobile no-scrollbar">
<button class="flex-shrink-0 px-md py-sm rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-md shadow-primary/20">الكل</button>
<button class="flex-shrink-0 px-md py-sm rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm hover:bg-secondary-container transition-colors">المقاهي</button>
<button class="flex-shrink-0 px-md py-sm rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm hover:bg-secondary-container transition-colors">المطاعم</button>
<button class="flex-shrink-0 px-md py-sm rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm hover:bg-secondary-container transition-colors">صالونات</button>
<button class="flex-shrink-0 px-md py-sm rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm hover:bg-secondary-container transition-colors">عيادات</button>
<button class="flex-shrink-0 px-md py-sm rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm hover:bg-secondary-container transition-colors">رياضة</button>
</div>
<!-- Section: Nearby Shops -->
<section class="mb-3xl">
<div class="px-margin-mobile flex items-center justify-between mb-md">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">محلات قريبة منك</h2>
<button class="text-primary text-label-sm font-label-sm">عرض الكل</button>
</div>
<div class="flex overflow-x-auto gap-md px-margin-mobile no-scrollbar pb-sm">
<!-- Card 1 -->
<div class="flex-shrink-0 w-72 bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden relative group active:scale-95 transition-transform">
<div class="relative h-40 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A high-end modern minimalist cafe interior with warm oak wood textures, floor-to-ceiling windows, soft morning sunlight, lush green indoor plants, and a sleek marble counter. Cinematic lighting, professional architectural photography, 8k resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7umIWKgEWD_X6RNmo70QbN9wr6flP0Bmq7BhHAMXOEjhQcoNDhuBS2n_nBy5Zs8djSwOxJhuHXaJDvYga5O7qA8BRW2a0ycCi40RMRWT8B0bBxNeJXdQKPd74QID8oIJEGXgSk0E1PUUt5KMhllA3hrB9freGfqDF7pF7Opw0tixx3cHyXNFNhLgU7oD1Ni0faOi2cXGykKt7wbWIerC-mVdhwjjVMzVCfQN4oRrXrTtf38ZgRVaIudyNHSkk9Oh2MotuVZ2viiY"/>
<div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-xs shadow-sm">
<span class="material-symbols-outlined text-primary text-[14px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-label-sm font-label-sm text-on-surface">4.8</span>
</div>
<div class="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div class="p-md flex items-start gap-md">
<div class="w-12 h-12 rounded-xl bg-white shadow-md p-1 -mt-10 relative z-10">
<img class="w-full h-full object-contain rounded-lg" data-alt="Minimalist luxury logo for a boutique coffee shop, featuring a stylized coffee bean and gold geometric lines on a clean white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDYbhXTL-bQW8p6xGFaWIOC0cIrruVGgDl3Z4mt2UNQ0PSvXJ1YwlRChA3FQBklNsoDSNXBPOXfay6GMX338neeLTDVu6WVJ-7idZTIBWwR-LmxTihGaggRDL8Mnx57cPUT8OWCJ5M3EIrfYw6DhFQG-imcbif2-GVdydFXjnT89glQBaxxwsPXO13SKh8BoxIodSLdJXyeH2M9KZAgaQyWkrV8VEGmK08TerVnm2Y0boixmLC-64aPjU_Q0iCJalV6a9-QI9TSug"/>
</div>
<div class="flex-1">
<h3 class="font-title-md text-title-md text-on-surface truncate">بيور كوفي روسترز</h3>
<div class="flex items-center gap-xs text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span class="text-label-sm font-label-sm">0.8 كم • مقهى مختص</span>
</div>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="flex-shrink-0 w-72 bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden relative group active:scale-95 transition-transform">
<div class="relative h-40 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Modern high-tech fitness studio with neon blue accents, high-quality rowing machines and weights, clean industrial design, polished concrete floors, and energetic atmosphere. Dynamic lighting, wide-angle lens photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLPm4tcnHhpimDakmgNKi5gTCcB7nJrfsS7HAGyw5B017cQY6FTLuF-_U92px-5elJFBFzI1688UBejX25x3QyY7SsRp3N7Bh7skaVJEc15HMHydW31SV8oP0iSV7F_fSeBW7d_abqTnyKl9FdgRiYuKZwRT-95VuHrUr5kYsVvqnx4ei1bvOOT3xduVI5QXD8GIADsVd0TUGOKB4_B_dpW0aogwBFAf8YwfBADyuQ96L3DkGe7pEkNyBn7P4Ke2dj3vHqFg_jcRM"/>
<div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-xs shadow-sm">
<span class="material-symbols-outlined text-primary text-[14px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-label-sm font-label-sm text-on-surface">4.9</span>
</div>
<div class="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div class="p-md flex items-start gap-md">
<div class="w-12 h-12 rounded-xl bg-white shadow-md p-1 -mt-10 relative z-10">
<img class="w-full h-full object-contain rounded-lg" data-alt="Bold athletic logo with a lightning bolt and shield motif, professional sports brand aesthetic, minimalist vector style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4oowNEAi-HvNCbFBo4kIAsE_wMzD5fDSfq5aV4wCNPNKdjvFQn7H5FYnQ5knlflSVVNh6qNYpLaFSAUe5_PKu6TJ1oTu26mtTvYCZWaFXx48wIFoMvhYdsBRVgxBHXQZcspNkhhpEcLDnSC__kcgcBhdtPzzrhYJrffl4-42Xmxjc2FN3TC2MdCpzPkfi5PM91MNhWLVlR87TkYpmux5hs2nbukbCiHV4cQ5CzIIN9o9_tr5xxkrevxM81G4omlZAJN5Sc_O9aLs"/>
</div>
<div class="flex-1">
<h3 class="font-title-md text-title-md text-on-surface truncate">فتنس بوكس</h3>
<div class="flex items-center gap-xs text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span class="text-label-sm font-label-sm">1.5 كم • رياضة</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section: Discover New Offers -->
<section class="px-margin-mobile">
<div class="flex items-center justify-between mb-md">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">اكتشف عروضاً جديدة</h2>
</div>
<div class="grid grid-cols-2 gap-md mb-lg">
<!-- Grid Item 1 -->
<div class="flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden group active:opacity-90 transition-all">
<div class="h-32 overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="Authentic Italian restaurant interior with brick walls, warm pendant lighting, wooden tables set with plates of pasta and pizza, cozy and inviting atmosphere. Vibrant food photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGmylIzeriCg-SWwR-FJo0CEp4r9pfVCcl_9wIpZtrkS43wlkTwSZ4B_pnOuit89-Dl83I2XZXv-YcelwB9L2GLIbJ6jEFiKd4s34gMLJvcfLo3Vz8Zn-2Ho3LY7Hf7SgcGKbtNn7CDDxG5IDCiQWbo1sepAr_P45G8AHScY5rzE1x75vQVpnmT_ISRW676cjraCVex4OM84zZjcBBD2l2Oon6sjDZHAXsA_rCEzWN0IWQDemZRlDT7RBpSaCDLjUd58_4Man6BNM"/>
<div class="absolute top-2 right-2 bg-primary/90 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">جديد</div>
</div>
<div class="p-sm">
<h4 class="font-label-sm text-label-sm text-on-surface truncate">باستا لا فيتا</h4>
<p class="text-[10px] text-on-surface-variant mb-xs">مطعم إيطالي</p>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[12px] text-primary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-[10px] font-bold text-on-surface">4.5</span>
</div>
</div>
</div>
<!-- Grid Item 2 -->
<div class="flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden group active:opacity-90 transition-all">
<div class="h-32 overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="Upscale modern hair salon interior with gold-trimmed mirrors, plush velvet chairs, bright studio lighting, and marble floors. Elegant and professional atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNE12SE8HRbYibv__1e9qo6kDMjelOMluWOEtvv6ZrQuEKO-FH-SGr6ZcHodyuUngJtJZNEvTDgxwdT1BNUqyMVcTqFK-Bf8Ez1LDVxpzd1gjvFJw02jqRpQYlTZPyZzGexdcRkIoiIb4fI3uCjMTXhBGeaKsvf2e2NrFzLABXwHAZjj1CbfwtcrWJL997xpsAHzTDtLairTMykkpY0aNw2BelIyPnw8yrh15IaVI18ZQoPs7xlY7ze8-ED4azFXbceo-TSAzHFSo"/>
<div class="absolute top-2 right-2 bg-primary/90 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">جديد</div>
</div>
<div class="p-sm">
<h4 class="font-label-sm text-label-sm text-on-surface truncate">جليم آند جلو</h4>
<p class="text-[10px] text-on-surface-variant mb-xs">صالون تجميل</p>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[12px] text-primary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-[10px] font-bold text-on-surface">4.7</span>
</div>
</div>
</div>
<!-- Grid Item 3 -->
<div class="flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden group active:opacity-90 transition-all">
<div class="h-32 overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="Artisanal bakery with fresh bread, golden croissants, and pastries displayed on wooden shelves, warm morning light, dust particles in sunbeams, rustic charming vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD2dzyHYqxURHkCCWUZ2n_EZQWQZ-kTR5uyn12vLb8jC3wuEtOlLG__efvW4SMTOI8K6P_Q_nNdp2pe76hko3QHnWhGgOs6SaPZUJ4qOiLE5sFo8XGQh0KmIIKs-9YnMoNTyX06j71LbQTSgpDlJUVk9y98Vf0dHptsUCwYqakUSp6zsm8TBPCo8NnHKcf2wHjXk2ShGwj4tqzRLp8tEvx--237ykqKU9__NXOHWhpNKiHIRwoIEfnHB5OsYZ3C840OFAHQo0Ricg"/>
</div>
<div class="p-sm">
<h4 class="font-label-sm text-label-sm text-on-surface truncate">لو بريد</h4>
<p class="text-[10px] text-on-surface-variant mb-xs">مخبز فرنسي</p>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[12px] text-primary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-[10px] font-bold text-on-surface">4.9</span>
</div>
</div>
</div>
<!-- Grid Item 4 -->
<div class="flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden group active:opacity-90 transition-all">
<div class="h-32 overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="Modern dental clinic waiting room with calm blue tones, comfortable seating, minimalist design, bright clean lighting, and technology integrated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpTgxE0i6y7NgfYd80E8XWPYABtO_t_N6BrLFKF9OuBo7JXrS-H-WXmSB7MwiF2NMa42EGtP1zmbDPcOLateFfJptvfQ2ivt3BRBxJtZFpTEXDZN14cAo1K7K69wtxEQe8LiTkhuWKlM-UbU2p-sTcCN5WmyMsAYf1bNOzO1gN8niqAR_xBkBLzrHunqtNH0JXTGFXcQP7MFVJGfN0CuDX5gz-ILGSBA45gJqpA3Tlu0JGB6OmNeqoHi21oC9KkEpIBrkGZu1r9OM"/>
</div>
<div class="p-sm">
<h4 class="font-label-sm text-label-sm text-on-surface truncate">مركز الابتسامة</h4>
<p class="text-[10px] text-on-surface-variant mb-xs">عيادة أسنان</p>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[12px] text-primary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-[10px] font-bold text-on-surface">4.6</span>
</div>
</div>
</div>
</div>
</section>
<!-- Floating Action Button -->
<div class="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
<button class="flex items-center gap-sm bg-primary text-on-primary px-lg py-md rounded-full shadow-xl shadow-primary/30 active:scale-90 transition-all">
<span class="material-symbols-outlined">explore</span>
<span class="font-title-md text-body-lg font-semibold">استكشاف على الخريطة</span>
</button>
</div>
<style>
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>
<script>
    // Subtle entry animation for cards
    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.flex-shrink-0, .grid > div');
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'all 0.5s ease-out';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      });
    });

    // Ripple effect on chips
    const chips = document.querySelectorAll('button');
    chips.forEach(chip => {
      chip.addEventListener('click', function(e) {
        if(this.classList.contains('bg-primary')) return;

        // Simple active state toggle simulation
        document.querySelectorAll('.rounded-full.bg-primary').forEach(c => {
          c.classList.remove('bg-primary', 'text-on-primary', 'shadow-md', 'shadow-primary/20');
          c.classList.add('bg-surface-container-high', 'text-on-surface-variant');
        });

        this.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
        this.classList.add('bg-primary', 'text-on-primary', 'shadow-md', 'shadow-primary/20');
      });
    });
  </script>
</div></main><nav class="fixed bottom-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl pb-safe shadow-[0_-1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary-container font-semibold"><div class="flex justify-around items-center h-16 px-sm"><a class="flex flex-col items-center gap-xs text-on-surface-variant transition-colors" data-path="home" href="#"><span class="material-symbols-outlined">home</span><span class="text-label-sm font-label-sm">الرئيسية</span></a><a aria-current="page" class="flex flex-col items-center gap-xs transition-colors active text-primary-container font-semibold" data-path="explore" href="#"><span class="material-symbols-outlined">explore</span><span class="text-label-sm font-label-sm">اكتشف</span></a><a class="flex flex-col items-center gap-xs text-on-surface-variant transition-colors" data-path="qr-scan" href="#"><span class="material-symbols-outlined">qr_code_scanner</span><span class="text-label-sm font-label-sm">QR</span></a><a class="flex flex-col items-center gap-xs text-on-surface-variant transition-colors" data-path="my-shops" href="#"><span class="material-symbols-outlined">storefront</span><span class="text-label-sm font-label-sm">محلاتي</span></a><a class="flex flex-col items-center gap-xs text-on-surface-variant transition-colors" data-path="account" href="#"><span class="material-symbols-outlined">account_circle</span><span class="text-label-sm font-label-sm">الحساب</span></a></div></nav></body></html>
