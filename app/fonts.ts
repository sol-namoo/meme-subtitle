import { Inter } from "next/font/google";
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ["latin"] });

export const cinema = localFont({
  src: [
    {
      path: './aCinemaLight.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './aCinemaMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './aCinemaBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})