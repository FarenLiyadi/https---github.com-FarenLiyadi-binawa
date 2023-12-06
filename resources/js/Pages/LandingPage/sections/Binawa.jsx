import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ReactDOM from "react-dom";
import { Fade } from "react-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import { array } from "prop-types";

export default function Binawa({ harga, atlet, pelatih }) {
    console.log(pelatih);

    const imagess = [];
    atlet.map((e) => {
        imagess.push({
            original: e.biography
                ? e.biography.pas_foto != null
                    ? e.biography.pas_foto
                    : "no-photo.png"
                : "no-photo.png",
            description: e.biography
                ? e.biography.nama_lengkap != null
                    ? e.biography.nama_lengkap
                    : e.name
                : e.name,
        });
    });
    console.log(imagess);
    return (
        <section id="" className="relative pt-[50px] bg-opacity-20 ">
            <Fade up>
                <section className="mt-0 lg:-mt-36">
                    <Carousel
                        showArrows={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showIndicators={false}
                        stopOnHover={false}
                    >
                        <div className="relative">
                            <img src="badminton-1.jpg" className="" />
                            <div className="absolute top-[40%] lg:top-1/2 w-full">
                                <p className="text-center  text-2xl lg:text-3xl xl:text-4xl uppercase font-bold text-white ">
                                    WELCOME TO
                                    <br /> PB BINAWA MAKASSAR OFFICIAL WEBSITE
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="badmin-2.jpeg" />
                            <div className="absolute top-[40%] lg:top-1/2  w-full">
                                <p className="text-center  text-2xl xl:text-4xl lg:text-3xl uppercase font-bold text-white ">
                                    Belajar badminton rutin dan teratur
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="badmin-3.jpg" />
                            <div className="absolute top-[40%] lg:top-1/2  w-full">
                                <p className="text-center  text-2xl xl:text-4xl lg:text-3xl uppercase font-bold text-white ">
                                    pelatih berpengalaman dan profesional
                                </p>
                            </div>
                        </div>
                    </Carousel>
                    <div className=""></div>
                </section>
            </Fade>
            <Fade up>
                <section className="bg-white dark:bg-gray-800 py-8" id="whyus">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:py-10 lg:px-6">
                        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                                    Latihan badminton di Binawa
                                </h2>
                                <p className="mb-8 font-light lg:text-xl">
                                    Rasakan manfaat dan keseruan berlatih
                                    badminton di PB. BINAWA, Jangan salah pilih
                                    tempat latihan agar skillmu bisa bertumbuh
                                    maksimal.
                                </p>

                                <ul role="list" className="space-y-5 my-7">
                                    <li className="flex space-x-3">
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-primary dark:text-primary"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">
                                            Dilatih oleh bekas ATLET
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-primary dark:text-primary"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">
                                            Jadwal latihan rutin dan terstruktur
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-primary dark:text-primary"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">
                                            Tempat latihan strategis dan bersih
                                        </span>
                                    </li>
                                </ul>
                                <p className="mb-8 font-light lg:text-xl">
                                    Segera daftar dan maximalkan potensimu
                                    dengan berlatih di PB. BINAWA
                                </p>
                            </div>
                            <img
                                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                                src="/lapangan.jpg"
                                alt="dashboard feature image"
                            />
                        </div>
                    </div>
                </section>
            </Fade>

            <Fade up>
                <section className="bg-slate-200 bg-cover bg-top" id="home">
                    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-9 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                        <div className=" place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-gray-900">
                                Jadilah juara <br />
                                bersama <br />
                                PB BINAWA
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl ">
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
                        <div className="mx-auto lg:mt-0 lg:col-span-5 lg:flex">
                            <div className="w-96  pt-10 pb-20 lg:pt-20   ">
                                <h1 className="text-center uppercase text-xl font-bold mb-3">
                                    Atlet berprestasi
                                </h1>
                                {imagess.length > 0 ? (
                                    <ImageGallery
                                        items={imagess}
                                        onImageLoad="lazy"
                                        lazyLoad={true}
                                        // showThumbnails={false}
                                        // thumbnailPosition="bottom"
                                        showPlayButton={false}
                                        showFullscreenButton={false}
                                        slideInterval={3000}
                                        autoPlay={true}
                                        // slideOnThumbnailOver={true}
                                        showIndex={true}
                                        showNav={false}
                                        description={true}
                                    />
                                ) : (
                                    <h1 className="text-xl text-gray uppercase text-center">
                                        Belum ada atlet berprestasi!
                                    </h1>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
            <Fade up>
                <section className="bg-white dark:bg-gray-900" id="penawaran">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                                Dapatkan harga promo
                            </h2>
                            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                Daftarkan diri anda sekarang dan dapatkan
                                penawaran spesial dari kami.
                            </p>
                        </div>
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            {harga.map((items) => {
                                return (
                                    <Fade up>
                                        <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 border border-slate-200 bg-white  rounded-lg shadow-lg  xl:p-8 dark:bg-gray-800">
                                            <h3 className="mb-4 text-2xl font-semibold">
                                                {items.judul}
                                            </h3>
                                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                                {items.desc}
                                            </p>
                                            <div className="flex items-baseline justify-center my-8">
                                                <span className="mr-2 text-5xl font-extrabold">
                                                    Rp {items.harga}K
                                                </span>
                                            </div>

                                            <a
                                                href="/register"
                                                className="text-white bg-primary hover:opacity-80 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900"
                                            >
                                                Daftar sekarang!
                                            </a>
                                        </div>
                                    </Fade>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </Fade>

            <Fade up>
                <section className="bg-slate-300 ">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                            <svg
                                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                                viewBox="0 0 24 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <blockquote>
                                <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                                    "If we DARE TO WIN, we should also DARE TO
                                    LOSE."
                                </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                <img
                                    className="w-6 h-6 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                    alt="profile picture"
                                />
                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                        LEE CHONG WEI
                                    </div>
                                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                        ALL ENGLAND BADMINTON CHAMPIONSHIP
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </Fade>
            <Fade up>
                <section className="bg-white dark:bg-gray-900" id="penawaran">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                                Pelatih di PB Binawa
                            </h2>
                            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                Yuk kenalan dengan pelatih di PB Binawa agar
                                lebih dekat.
                            </p>
                        </div>
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            {pelatih.map((items) => {
                                return (
                                    <Fade up>
                                        <div className="flex min-w-full  flex-col max-w-lg p-6 mx-auto text-center text-gray-900 border border-slate-200 bg-white  rounded-lg shadow-lg  xl:p-8 dark:bg-gray-800">
                                            <h3 className="mb-4 text-2xl font-semibold uppercase">
                                                {items.biography_pelatih != null
                                                    ? items.biography_pelatih
                                                          .nama_lengkap
                                                        ? items
                                                              .biography_pelatih
                                                              .nama_lengkap
                                                        : items.name
                                                    : items.name}
                                            </h3>
                                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                                {items.biography_pelatih != null
                                                    ? items.biography_pelatih
                                                          .karier
                                                        ? items
                                                              .biography_pelatih
                                                              .karier
                                                        : "Karier Not Set"
                                                    : "Karier Not Set"}
                                            </p>
                                            <div className="flex items-baseline justify-center my-8">
                                                <img
                                                    src={
                                                        items.biography_pelatih !=
                                                        null
                                                            ? items
                                                                  .biography_pelatih
                                                                  .pas_foto
                                                                ? items
                                                                      .biography_pelatih
                                                                      .pas_foto
                                                                : "no-photo.png"
                                                            : "no-photo.png"
                                                    }
                                                    alt=""
                                                    className="w-60"
                                                />
                                            </div>
                                        </div>
                                    </Fade>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </Fade>
        </section>
    );
}
