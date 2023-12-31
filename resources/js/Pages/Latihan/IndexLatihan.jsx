import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function IndexLatihan({ auth, latihan, absen }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Latihan
                </h2>
            }
        >
            <Head title="Latihan" />

            <div className="py-12">
                {auth.user.roles === "USER" ? (
                    <>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <h1 className="text-xl">
                                        Histori Absensi Latihan {auth.user.name}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {absen.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2 border border-neutral-300 rounded-md shadow-md mb-5"
                                >
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                        <div className="p-6 text-gray-900 grid grid-row gap-1">
                                            <p>{data.latihan.keterangan}</p>
                                            <p>
                                                {new Date(
                                                    data.latihan.tanggal
                                                ).toLocaleDateString("id-ID", {
                                                    weekday: "long",
                                                    day: "2-digit",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <Link
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                        href="/latihan/create"
                                    >
                                        Create Latihan
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {latihan.data.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2 border border-neutral-300 rounded-md shadow-md mb-5"
                                >
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                        <div className="p-6 text-gray-900 grid grid-row gap-1">
                                            <p>{data.keterangan}</p>
                                            <p>
                                                {new Date(
                                                    data.tanggal
                                                ).toLocaleDateString("id-ID", {
                                                    weekday: "long",
                                                    day: "2-digit",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </p>

                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/latihan/${data.id}`}
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-lg"
                                                >
                                                    Lihat
                                                </Link>
                                                <Link
                                                    href={`/latihan/${data.id}/edit`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-5 py-2 rounded-lg"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="flex w-full justify-center pt-10">
                            <Pagination class="mt-6" links={latihan.meta} />
                        </div>
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
