import ArabicPersianReshaper from "arabic-persian-reshaper";


export function formatArabicText(text) {

    if (!text) return "";

    return ArabicPersianReshaper.ArabicShaper.convertArabic(text);

}
