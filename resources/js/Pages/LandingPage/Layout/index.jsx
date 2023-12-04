import React from "react";
import PropTypes from "prop-types";

import Footer from "@/Pages/LandingPage/Footer";
import Navbar from "@/Pages/LandingPage/Navbar";

export default function Layout({ children, user }) {
    return (
        <div>
            <header>
                <Navbar user={user} />
            </header>
            <main className="overflow-hidden">{children}</main>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};
