"use client";

import { Carousel, Flowbite  } from "flowbite-react";

const customTheme = {
    "carousel": {
        "root": {
          "base": "relative h-full w-full bg-red-300",
          "leftControl": "hidden left-[46%] bottom-0 flex h-full items-end justify-center px-4 focus:outline-none",
          "rightControl": "hidden right-[46%] top-0 flex h-full items-end justify-center px-4 focus:outline-none"
        },
        "indicators": {
          "active": {
            "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
            "on": "bg-white dark:bg-gray-800 border-2 custom-box-shadow animation-custom"
          },
          "base": "h-3 w-3 rounded-full",
          "wrapper": "absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3",
          "animate": "animate-spin"
        },
        "item": {
          "base": "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
          "wrapper": {
            "off": "w-full flex-shrink-0 transform cursor-default snap-center",
            "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
          }
        },
        "control": {
          "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
          "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
        },
        "scrollContainer": {
          "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
          "snap": "snap-x"
        }
    }
}

export default function CompCarousel() {
  return (
    <div className="h-60 sm:h-64 xl:h-80 2xl:h-96">
    <style jsx>{`
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        .animation-custom{
            animation: spin 2s linear infinite;
        }
        .custom-box-shadow {
            box-shadow: 
            0 0 0 2px rgba(66, 153, 225, 0.5), /* Bayangan biru luar */
            0 0 0 4px rgba(66, 153, 225, 0.5), /* Bayangan biru luar */
            0 0 0 6px rgba(66, 153, 225, 0.5), /* Bayangan biru luar */
            0 0 0 8px rgba(66, 153, 225, 0.5), /* Bayangan biru luar */
            0 0 0 10px rgba(153, 102, 255, 0.5), /* Bayangan ungu luar */
            0 0 0 12px rgba(153, 102, 255, 0.5), /* Bayangan ungu luar */
            0 0 0 14px rgba(153, 102, 255, 0.5), /* Bayangan ungu luar */
            0 0 0 16px rgba(153, 102, 255, 0.5); /* Bayangan ungu luar */
        }
    `}</style>
        <Flowbite theme={{ theme: customTheme }}>
            <Carousel>
                <img src="/logo.svg" className="rounded-0" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
        </Flowbite>
    </div>
  );
}