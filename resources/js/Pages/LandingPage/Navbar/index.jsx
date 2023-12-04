import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import Dropdown from "@/Components/Dropdown";

import PrimaryButton from "@/Pages/LandingPage/buttons/PrimaryButton";
import Menus from "./Menus";

export default function Navbar({ user, auth }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [backgroundwhite, setBackgroundWhite] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: "768px" });

    const handleWindowScroll = (e) => {
        const height = window.scrollY;
        const tresholdHeight = 50;

        if (height > tresholdHeight) {
            setBackgroundWhite(true);
        } else {
            setBackgroundWhite(false);
        }
    };

    const handleBlackScreenClick = (e) => {
        e.stopPropagation();
        setDropdownOpen(false);
    };

    useEffect(() => {
        if (isMobile) {
            setDropdownOpen(false);
        }
    }, [isMobile]);

    useEffect(() => {
        setBackgroundWhite(dropdownOpen);
    }, [dropdownOpen]);

    useEffect(() => {
        window.addEventListener("scroll", handleWindowScroll);

        return () => window.removeEventListener("scroll", handleWindowScroll);
    }, []);

    return (
        <nav
            className={classNames(
                "fixed w-full transition-all duration-700 z-10 py-4  ",
                {
                    "bg-orange-500 shadow-lg !py-3": backgroundwhite,
                    "bg-orange-600": !backgroundwhite,
                }
            )}
        >
            <div className="px-4 container mx-auto top-0 flex justify-between items-center">
                <div className="flex ">
                    <a href="/" className="text-3xl font-bold text-white">
                        PB BINAWA
                    </a>
                </div>

                <div
                    className={classNames(
                        "hidden  gap-10 md:flex text-white   ",
                        {}
                    )}
                >
                    <Menus />
                </div>
                <div className="ml-6 hidden gap-4 md:flex ">
                    {user ? (
                        <div className="hidden md:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md ">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name.toUpperCase()}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("dashboard")}
                                        >
                                            Dashboard
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    ) : (
                        // <a href={route("accept-sop")} className="">
                        //     <PrimaryButton>Dashboard</PrimaryButton>
                        // </a>
                        <a href="/login" className="">
                            <PrimaryButton>Log in</PrimaryButton>
                        </a>
                    )}
                </div>
                <div className="md:hidden text-2xl">
                    <button
                        className="z-50 p-4 block transition-all"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <div className="text-white">
                            {dropdownOpen ? <BsX /> : <BsList />}
                        </div>
                    </button>

                    {/* Menu dropdown */}
                    <div
                        className={classNames({
                            "text-base left-0 top-full right-0 absolute transition-all duration-400": true,
                            "invisible opacity-0": !dropdownOpen,
                            "visible opacity-80": dropdownOpen,
                        })}
                    >
                        <div
                            className="h-screen left-0 bg-black bg-opacity-30"
                            onClick={handleBlackScreenClick}
                        >
                            <div className="z-20 shadow-xl bg-black p-6 flex">
                                <div className="w-full gap-4 items-center justify-center mb-6 ">
                                    <div className="mb-4 text-white text-center">
                                        <Menus />
                                    </div>
                                    <div className="w-full flex justify-center">
                                        {user ? (
                                            <div className="flex w-full flex-col  justify-center items-center mx-auto text-center">
                                                <a
                                                    href={route("dashboard")}
                                                    className="w-1/2 text-center flex "
                                                >
                                                    <PrimaryButton className=" w-full items-center">
                                                        DASHBOARD
                                                    </PrimaryButton>
                                                </a>
                                                <div className="text-white  ">
                                                    <Dropdown.Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        LOG OUT
                                                    </Dropdown.Link>
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                href="/login"
                                                className="w-1/2 text-center flex "
                                            >
                                                <PrimaryButton className=" w-full items-center">
                                                    LOG IN
                                                </PrimaryButton>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
