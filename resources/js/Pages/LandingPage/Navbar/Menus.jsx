import React from "react";

export default function Menus() {
    return (
        <>
            <div className="w-full ">
                <a
                    href="#about"
                    className="hover:text-primary py-2 block whitespace-nowrap"
                >
                    ABOUT US
                </a>
            </div>
            <div className="w-full">
                <a href={`#profile`} className="hover:text-primary py-2 block">
                    PROFILE
                </a>
            </div>
            <div className="w-full">
                <a href="#service" className="hover:text-primary py-2 block">
                    SERVICE
                </a>
            </div>
            <div className="w-full">
                <a href="#package" className="hover:text-primary py-2 block">
                    PACKAGE
                </a>
            </div>
            <div className="w-full">
                <a href="#contact" className="hover:text-primary py-2 block">
                    CONTACT
                </a>
            </div>
        </>
    );
}
