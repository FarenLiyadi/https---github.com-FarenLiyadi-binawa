import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <a href="/">
                                    <h1 className=" text-2xl text-black font-bold">
                                        PB BINAWA
                                    </h1>
                                </a>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    href="/biography"
                                    active={
                                        route().current("biography.index") ||
                                        route().current("biography.create") ||
                                        route().current("biography.show") ||
                                        route().current("biography.edit")
                                    }
                                >
                                    Biography
                                </NavLink>
                                <NavLink
                                    href="/event"
                                    active={
                                        route().current("event.index") ||
                                        route().current("event.create") ||
                                        route().current("event.show") ||
                                        route().current("event.edit")
                                    }
                                >
                                    Event
                                </NavLink>
                                <NavLink
                                    href="/ranking"
                                    active={route().current("ranking")}
                                >
                                    Ranking
                                </NavLink>
                                <NavLink
                                    href="/latihan"
                                    active={
                                        route().current("latihan.index") ||
                                        route().current("latihan.create") ||
                                        route().current("latihan.edit") ||
                                        route().current("latihan.show")
                                    }
                                >
                                    Latihan
                                </NavLink>
                                {user.roles === "PELATIH" ? (
                                    ""
                                ) : (
                                    <NavLink
                                        href="/pembayaran"
                                        active={
                                            route().current(
                                                "pembayaran.index"
                                            ) ||
                                            route().current(
                                                "pembayaran.create"
                                            ) ||
                                            route().current(
                                                "pembayaran.show"
                                            ) ||
                                            route().current("pembayaran.edit")
                                        }
                                    >
                                        Pembayaran
                                    </NavLink>
                                )}
                                {user.roles === "PELATIH" ? (
                                    ""
                                ) : (
                                    <NavLink
                                        href="/langganan"
                                        active={route().current("langganan")}
                                    >
                                        Langganan
                                    </NavLink>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

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
                                        {user.roles == "ADMIN" ? (
                                            <Dropdown.Link
                                                href={route("admin.user")}
                                            >
                                                User
                                            </Dropdown.Link>
                                        ) : (
                                            ""
                                        )}
                                        {user.roles == "ADMIN" ? (
                                            <Dropdown.Link
                                                href={route(
                                                    "adminlanding.index"
                                                )}
                                            >
                                                CompanyProfile
                                            </Dropdown.Link>
                                        ) : (
                                            ""
                                        )}
                                        {user.roles !== "USER" ? (
                                            <Dropdown.Link
                                                href={route(
                                                    "biographypelatih.index"
                                                )}
                                            >
                                                Biography Pelatih
                                            </Dropdown.Link>
                                        ) : (
                                            ""
                                        )}

                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
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

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/biography"
                            active={
                                route().current("biography.index") ||
                                route().current("biography.create") ||
                                route().current("biography.show") ||
                                route().current("biography.edit")
                            }
                        >
                            Biography
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/event"
                            active={
                                route().current("event.index") ||
                                route().current("event.create") ||
                                route().current("event.show") ||
                                route().current("event.edit")
                            }
                        >
                            Event
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/ranking"
                            active={route().current("ranking")}
                        >
                            Ranking
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/latihan"
                            active={
                                route().current("latihan.index") ||
                                route().current("latihan.create") ||
                                route().current("latihan.edit") ||
                                route().current("latihan.show")
                            }
                        >
                            Latihan
                        </ResponsiveNavLink>
                        {user.roles == "PELATIH" ? (
                            ""
                        ) : (
                            <ResponsiveNavLink
                                href="/pembayaran"
                                active={
                                    route().current("pembayaran.index") ||
                                    route().current("pembayaran.create") ||
                                    route().current("pembayaran.show") ||
                                    route().current("pembayaran.edit")
                                }
                            >
                                Pembayaran
                            </ResponsiveNavLink>
                        )}
                        {user.roles == "PELATIH" ? (
                            ""
                        ) : (
                            <ResponsiveNavLink
                                href="/langganan"
                                active={route().current("langganan")}
                            >
                                Langganan
                            </ResponsiveNavLink>
                        )}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="mt-3 space-y-1">
                            {user.roles == "ADMIN" ? (
                                <ResponsiveNavLink href={route("admin.user")}>
                                    User
                                </ResponsiveNavLink>
                            ) : (
                                ""
                            )}
                            {user.roles == "ADMIN" ? (
                                <ResponsiveNavLink
                                    href={route("adminlanding.index")}
                                >
                                    CompanyProfile
                                </ResponsiveNavLink>
                            ) : (
                                ""
                            )}
                            {user.roles !== "USER" ? (
                                <ResponsiveNavLink
                                    href={route("biographypelatih.index")}
                                >
                                    Biography Pelatih
                                </ResponsiveNavLink>
                            ) : (
                                ""
                            )}

                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
