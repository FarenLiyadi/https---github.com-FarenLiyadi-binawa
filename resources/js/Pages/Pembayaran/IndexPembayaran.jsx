import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CurrencyFormat from "@/Utils/CurrencyFormat";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function IndexPembayaran({ auth, pembayaran }) {
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [searchResults, setSearchResults] = useState(pembayaran || [{}]);
    const [total, setTotal] = useState(0);

    searchResults.data.sort(function (a, b) {
        return new Date(b.tanggal_pembayaran) - new Date(a.tanggal_pembayaran);
    });

    useEffect(() => {
        let tempTotal = 0;

        searchResults.data.forEach((data) => {
            tempTotal += data.nominal;
        });

        setTotal(tempTotal);
    }, [searchResults]);

    useEffect(() => {
        const fetchData = async () => {
            if (startDate || endDate || search) {
                const response = await fetch(
                    `/pembayaran-search?search=${search}&start_date=${startDate}&end_date=${endDate}`
                );
                const data = await response.json();

                setSearchResults(data);
            } else {
                setSearchResults(pembayaran);
            }
        };

        fetchData();

        // ditrigger oleh perubahan pada var search
    }, [startDate, endDate, search]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Histori Pembayaran
                </h2>
            }
        >
            <Head title="Histori Pembayaran" />

            <div className="py-12">
                {searchResults.length > 0 || searchResults ? (
                    auth.user.roles == "USER" ? (
                        <>
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Keterangan
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Nominal
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Tanggal Pembayaran
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchResults.data.map(
                                                (data, index) => {
                                                    return (
                                                        <tr
                                                            key={index}
                                                            className={`border-b hover:bg-neutral-400 dark:border-neutral-500 `}
                                                        >
                                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                                {
                                                                    data.keterangan
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                {CurrencyFormat(
                                                                    data.nominal
                                                                )}
                                                            </td>

                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                {new Date(
                                                                    data.tanggal_pembayaran
                                                                ).toLocaleDateString(
                                                                    "id-ID",
                                                                    {
                                                                        weekday:
                                                                            "long",
                                                                        day: "2-digit",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    }
                                                                )}
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                {data.approve ? (
                                                                    <span className="text-green-500 font-bold">
                                                                        Done
                                                                    </span>
                                                                ) : (
                                                                    <span className="text-red-500 font-bold">
                                                                        Not Done
                                                                    </span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                    <p className="whitespace-nowrap px-6 py-4 text-xl font-semibold">
                                        Total {CurrencyFormat(total)}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="max-w-7xl flex mx-auto sm:px-6 lg:px-8 mb-2">
                                <input
                                    className="rounded-lg"
                                    type="date"
                                    id="start_date"
                                    name="start_date"
                                    defaultValue={startDate}
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                />
                                <input
                                    className="rounded-lg mx-1"
                                    type="date"
                                    id="end_date"
                                    name="end_date"
                                    defaultValue={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                                <input
                                    className="rounded-lg w-full"
                                    type="text"
                                    id="search"
                                    name="search"
                                    placeholder="Cari pengeluaran"
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Keterangan
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Nominal
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Tanggal Pembayaran
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Oleh
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase"
                                                >
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchResults.data.map(
                                                (data, index) => {
                                                    return (
                                                        <tr
                                                            key={index}
                                                            className={`border-b hover:bg-neutral-400 dark:border-neutral-500 `}
                                                        >
                                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                                {
                                                                    data.keterangan
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                {CurrencyFormat(
                                                                    data.nominal
                                                                )}
                                                            </td>

                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                {new Date(
                                                                    data.tanggal_pembayaran
                                                                ).toLocaleDateString(
                                                                    "id-ID",
                                                                    {
                                                                        weekday:
                                                                            "long",
                                                                        day: "2-digit",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    }
                                                                )}
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                {data.approve ? (
                                                                    <span className="text-green-500 font-bold">
                                                                        Done
                                                                    </span>
                                                                ) : (
                                                                    <span className="text-red-500 font-bold">
                                                                        Not Done
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                {data.user.name}
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                <Link
                                                                    className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg"
                                                                    href={`/pembayaran/${data.id}`}
                                                                >
                                                                    Detail
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                    <p className="whitespace-nowrap px-6 py-4 text-xl font-semibold">
                                        Total {CurrencyFormat(total)}
                                    </p>
                                </div>
                            </div>

                            <div className="flex w-full justify-center pt-10">
                                <Pagination
                                    class="mt-6"
                                    links={searchResults.meta}
                                />
                            </div>
                        </>
                    )
                ) : (
                    ""
                )}
            </div>
        </AuthenticatedLayout>
    );
}
