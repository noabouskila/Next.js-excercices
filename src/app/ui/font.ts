// font optimisé par next :
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";



export const inter = Inter({
    subsets: ['latin'],
    display: 'swap', // facutlatif
})

console.log(inter)

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});