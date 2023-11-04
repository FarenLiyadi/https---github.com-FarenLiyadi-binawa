import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function IndexPembayaran({ auth, pembayaran }) {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState(pembayaran || [{}]);

    useEffect(() => {
        console.log(search);

        // Panggil Data pencarian
        const fetchData = async () => {
            // Jika kolom search ada
            if (search) {
                const response = await fetch(
                    `/pembayaran-search?nama=${search}`
                );

                const data = await response.json();

                setSearchResults(data);
            } else {
                // jika tidak ada maka kemalikan data awal
                setSearchResults(pembayaran);
            }
        };

        fetchData();

        // ditrigger oleh perubahan pada var search
    }, [search]);

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
                        searchResults.map((data, index) => {
                            return (
                                <div key={index} className="py-2">
                                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                            <div className="p-6 text-gray-900">
                                                {data.bukti_pembayaran ? (
                                                    <div className="w-96 h-auto mb-3">
                                                        <p>Bukti Pembayaran</p>
                                                        <img
                                                            className="rounded-lg w-56"
                                                            src={`/storage/${data.bukti_pembayaran}`}
                                                            alt={`Bukti Pembayaran ${data.user.name}`}
                                                        />
                                                    </div>
                                                ) : (
                                                    ""
                                                )}

                                                <p>{data.keterangan}</p>
                                                <p>Rp.{data.nominal}</p>
                                                <p>{data.jenis_pembayaran}</p>
                                                <p>
                                                    {new Date(
                                                        data.tanggal_pembayaran
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
                                                {data.approve ? (
                                                    <span className="text-green-500 font-bold">
                                                        Done
                                                    </span>
                                                ) : (
                                                    <span className="text-red-500 font-bold">
                                                        Not Checked Yet
                                                    </span>
                                                )}
                                                {auth.user.roles != "USER" ? (
                                                    <div>
                                                        <p>
                                                            Pembayaran Oleh:{" "}
                                                            <span className="font-bold">
                                                                {data.user.name}
                                                            </span>
                                                        </p>
                                                        <div className="mt-2">
                                                            <Link
                                                                className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg"
                                                                href={`/pembayaran/${data.id}`}
                                                            >
                                                                Lihat Detail
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <>
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                                <input
                                    className="rounded-xl w-full"
                                    type="text"
                                    id="search"
                                    name="search"
                                    placeholder="Cari nama member"
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
                                                    <p>{data.keterangan}</p>
                                                    <p>
                                                        {data.jenis_pembayaran}
                                                    </p>
                                                    <p>
                                                        {new Date(
                                                            data.tanggal_pembayaran
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
                                                    {data.approve ? (
                                                        <span className="text-green-500 font-bold">
                                                            Done
                                                        </span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">
                                                            Not Checked Yet
                                                        </span>
                                                    )}
                                                    {auth.user.roles !=
                                                    "USER" ? (
                                                        <div>
                                                            <p>
                                                                Pembayaran Oleh:{" "}
                                                                <span className="font-bold">
                                                                    {
                                                                        data
                                                                            .user
                                                                            .name
                                                                    }
                                                                </span>
                                                            </p>
                                                            <div className="mt-2">
                                                                <Link
                                                                    className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg"
                                                                    href={`/pembayaran/${data.id}`}
                                                                >
                                                                    Lihat Detail
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
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
                    )
                ) : (
                    ""
                )}
            </div>
        </AuthenticatedLayout>
    );
}
