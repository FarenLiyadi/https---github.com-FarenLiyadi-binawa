import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import CurrencyFormat from "@/Utils/CurrencyFormat";

export default function IndexPengeluaran({ auth, pengeluaran }) {
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [total, setTotal] = useState(0);
    const [endDate, setEndDate] = useState("");
    const [searchResults, setSearchResults] = useState(pengeluaran || [{}]);
    let temp = 0;

    searchResults.data.sort(function (a, b) {
        return (
            new Date(b.tanggal_pengeluaran) - new Date(a.tanggal_pengeluaran)
        );
    });

    // const formatter = new Intl.NumberFormat("id-ID", {
    //     style: "currency",
    //     currency: "IDR",
    // });

    useEffect(() => {
        let tempTotal = 0;

        searchResults.data.forEach((data) => {
            tempTotal += data.nominal;
        });

        setTotal(tempTotal);
    }, [searchResults]);

    useEffect(() => {
        // Panggil Data pencarian
        const fetchData = async () => {
            if (startDate || endDate || search) {
                const response = await fetch(
                    `/pengeluaran-search?search=${search}&start_date=${startDate}&end_date=${endDate}`
                );
                const data = await response.json();

                setSearchResults(data);
            } else {
                setSearchResults(pengeluaran);
            }
        };

        fetchData();
    }, [startDate, endDate, search]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Histori Pengeluaran
                </h2>
            }
        >
            <Head title="Histori Pengeluaran" />

            <div className="py-12">
                {searchResults.length > 0 || searchResults ? (
                    <>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                            <div className="bg-white shadow-sm sm:rounded-lg">
                                <div className="pb-6 text-gray-900">
                                    <Link
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                        href="/pengeluaran/create"
                                    >
                                        Tambah Pengeluaran
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="max-w-7xl flex mx-auto sm:px-6 lg:px-8 mb-2">
                            <input
                                className="rounded-lg"
                                type="date"
                                id="start_date"
                                name="start_date"
                                defaultValue={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
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
                                                Tanggal Pengeluaran
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
                                                            {data.keterangan}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            {CurrencyFormat(
                                                                data.nominal
                                                            )}
                                                        </td>

                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            {new Date(
                                                                data.tanggal_pengeluaran
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
                                                            {data.user.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Aksi
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
                ) : (
                    ""
                )}
            </div>
        </AuthenticatedLayout>
    );
}
