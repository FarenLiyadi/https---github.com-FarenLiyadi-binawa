import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function IndexPengeluaran({ auth, pengeluaran }) {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState(pengeluaran || [{}]);

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
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <Link
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                        href="/pengeluaran/create"
                                    >
                                        Tambah Pengeluaran
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                            <input
                                className="rounded-xl w-full"
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Cari pengeluaran"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                        </div>

                        {searchResults.data.map((data, index) => {
                            return (
                                <div key={index} className="py-2">
                                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                            <div className="p-6 text-gray-900">
                                                <p className="text-xl uppercase font-bold">
                                                    {data.keterangan}
                                                </p>
                                                <p className="text-lg">
                                                    Rp. {data.nominal}
                                                </p>
                                                <p>
                                                    {new Date(
                                                        data.tanggal_pengeluaran
                                                    ).toLocaleDateString(
                                                        "id-ID",
                                                        {
                                                            weekday: "long",
                                                            day: "2-digit",
                                                            month: "long",
                                                            year: "numeric",
                                                        }
                                                    )}
                                                </p>
                                                <p>Oleh: {data.user.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

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
