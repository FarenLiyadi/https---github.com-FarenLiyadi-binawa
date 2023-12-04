import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp() {
    const [isOpen, setIsOpen] = useState(false);
    const handlerWhatsapp = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    return (
        <div>
            <a
                href="https://api.whatsapp.com/send?phone=+6282188571089&text=Hai!, Saya ingin mengetahui lebih lanjut tentang PB. BINAWA 😊"
                className="btn-whatsapp-pulse z-50"
                target={`_blank`}
            >
                <i>
                    <BsWhatsapp />
                </i>
            </a>
        </div>
    );
}
