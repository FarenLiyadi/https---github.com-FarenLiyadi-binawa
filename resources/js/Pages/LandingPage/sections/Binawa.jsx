import React from "react";
import { Carousel } from "react-responsive-carousel";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Binawa() {
    return (
        <section id="about" className="relative pt-[50px] bg-opacity-20 pb-24">
            <section
                className="bg-[url('/background.jpg')] bg-no-repeat bg-fixed bg-cover bg-top"
                id="home"
            >
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
                            Jadilah juara <br />
                            bersama <br />
                            PB BINAWA
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Mari bergabung bersama PB. BINAWA dan asah skill
                            bulutangkis kamu hingga menjadi seorang juara.
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a
                                href="/register"
                                className="bg-primary inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center rounded-lg sm:w-auto text-white"
                            >
                                DAFTAR SEKARANG !
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="/badminton.png" alt="hero image" />
                    </div>
                </div>
            </section>
            <section>
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={false}
                >
                    <div className="relative">
                        <img src="landing-page/bg-laptop.jpg" />
                        <div className="absolute top-1/2 w-full">
                            <p className="text-center  text-3xl uppercase font-bold text-white ">
                                WELCOME TO PB BINAWA MAKASSAR
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="landing-page/bg-laptop.jpg" />
                        <div className="absolute top-1/2 w-full">
                            <p className="text-center  text-3xl uppercase font-bold text-white ">
                                Belajar badminton konsisten
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="landing-page/bg-laptop.jpg" />
                        <div className="absolute top-1/2 w-full">
                            <p className="text-center  text-3xl uppercase font-bold text-white ">
                                pelatih berpengalaman dan profesional
                            </p>
                        </div>
                    </div>
                </Carousel>
                <div className=""></div>
            </section>
        </section>
    );
}
