import type { Metadata } from 'next'
import Script from 'next/script'
import './global.css'

export const metadata: Metadata = {
  title: 'WazaDevs - Desarrollo de Software a Medida',
  description: 'Convertimos tus ideas en soluciones de software robustas, escalables y diseñadas exclusivamente para tus necesidades.',
  icons: {
    icon: '/assets/images/WSLGV01WT.png',
  },
}

import Effects from '@/components/Effects'

import Preloader from '@/components/Preloader'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body>
        <Preloader />
        <div id="read-progress-bar"></div>
        <Effects />
        {children}

        {/* Scripts externos cargados con next/script para mejor rendimiento */}
        <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}