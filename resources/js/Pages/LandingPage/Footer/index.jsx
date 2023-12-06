import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineMail, HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaCalendarDays } from "react-icons/fa6";
import { GiShuttlecock } from "react-icons/gi";

export default function Footer() {
    return (
        <footer className="" id="contact">
            <div className="container px-0 border-y border-lightgray py-6">
                <div className="grid lg:grid-cols-3 xl:grid-cols-3">
                    <div className="px-6 md:flex md:justify-between items-center md:border-r border-lightgray mr-2">
                        <ul className="px-2">
                            <li className="mb-1 ">
                                <div className="flex items-center">
                                    <FaCalendarDays
                                        className=" py-2  text-primary"
                                        size={48}
                                    />
                                    <p className="text-gray hover:text-primary text-lg pr-1">
                                        Senin - Rabu - Jumat
                                    </p>
                                </div>
                            </li>
                            <li className="mb-1  ">
                                <div className="flex items-center">
                                    <FaRegClock
                                        className="text-primary  py-2"
                                        size={48}
                                    />
                                    <p className="text-gray hover:text-primary text-lg pr-1">
                                        15.00 - 18.00
                                    </p>
                                </div>
                            </li>

                            <li className="mb-1">
                                <div className="flex items-top">
                                    <GiShuttlecock
                                        className=" py-2  text-primary"
                                        size={48}
                                    />
                                    <a
                                        href="https://maps.app.goo.gl/LgifNx8zNmPXSTnL8"
                                        className="text-gray hover:text-primary text-lg flex-1 pr-1"
                                    >
                                        Jl. Pelita Raya IV No.32, Balla Parang,
                                        Kec. Rappocini, Kota Makassar, Sulawesi
                                        Selatan 90222 (GOR PELITA)
                                        <br className="hidden xl:block" />{" "}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="px-6 md:flex md:justify-center md:border-r  border-lightgray text-left">
                        <ul className="px-2">
                            <li className="mb-4">
                                <h2
                                    id="contact"
                                    className="text-4xl md:text-5xl  font-bold leading-normal text-center  mb-5 pt-20 md:pt-0"
                                >
                                    CONTACT
                                </h2>
                            </li>
                            <li className="mb-1  ">
                                <div className="flex items-center">
                                    <BsWhatsapp
                                        className="text-primary  py-2"
                                        size={48}
                                    />
                                    <a
                                        href="https://api.whatsapp.com/send?phone=+6282188571089&text=Hai!, Saya ingin mengetahui lebih lanjut tentang PB. BINAWA 😊"
                                        className="text-gray hover:text-primary text-lg pr-1"
                                    >
                                        +62 856 5661 1440
                                    </a>
                                </div>
                            </li>
                            <li className="mb-1 ">
                                <div className="flex items-center">
                                    <BsInstagram
                                        className=" py-2  text-primary"
                                        size={48}
                                    />
                                    <a
                                        href="https://www.instagram.com/pb.binawa/"
                                        className="text-gray hover:text-primary text-lg pr-1"
                                    >
                                        pb.binawa
                                    </a>
                                </div>
                            </li>

                            <li className="mb-1">
                                <div className="flex items-top">
                                    <HiOutlineOfficeBuilding
                                        className=" py-2  text-primary"
                                        size={48}
                                    />
                                    <a
                                        href="https://maps.app.goo.gl/x7YR8icgSkgJ9C5u6"
                                        className="text-gray hover:text-primary text-lg flex-1 pr-1"
                                    >
                                        Jl. Maccini Sawah No.55, Maccini Gusung,
                                        Kec. Makassar, Kota Makassar, Sulawesi
                                        Selatan 90144 (Apotek Anggoro Farma)
                                        <br className="hidden xl:block" />{" "}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 flex justify-center border-lightgray ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15894.788375237382!2d119.432698!3d-5.152363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2baf61dc801%3A0xf24666886aaa856b!2sGOR%20Badminton%20Pelita!5e0!3m2!1sid!2sid!4v1701592912722!5m2!1sid!2sid"
                            width="300"
                            height="300"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="text-center py-6">
                <p className="text-gray">
                    © {new Date().getFullYear()} Copyright PB. BINAWA
                    <br />
                    ALL RIGHT RESERVED
                </p>
            </div>
        </footer>
    );
}
