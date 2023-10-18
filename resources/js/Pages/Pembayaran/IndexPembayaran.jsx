import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function IndexPembayaran({ auth, pembayaran }) {
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
                {pembayaran.map((data, index) => {
                    return (
                        <div key={index} className="py-2">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">
                                        <p>{data.keterangan}</p>
                                        <p>{data.jenis_pembayaran}</p>
                                        <p>{data.tanggal_pembayaran}</p>
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
                })}
            </div>
        </AuthenticatedLayout>
    );
}
