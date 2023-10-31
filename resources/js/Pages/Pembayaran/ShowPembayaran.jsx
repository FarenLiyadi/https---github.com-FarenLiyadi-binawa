import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function ShowPembayaran({ auth, pembayaran }) {
    function formattedDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

    function addOneMonth(date) {
        // tanggal awal
        const prevDate = new Date(date);
        // tanggal akhir
        const newDate = new Date(date);

        // Tambah 1 bulan
        newDate.setMonth(newDate.getMonth() + 1);
        // jika bulan setelahnya memiliki hari yang lebih kurang
        if (newDate.getDate() < prevDate.getDate()) {
            newDate.setDate(0);
        }

        const formatDate = formattedDate(newDate);

        return formatDate;
    }

    function handleApprove(e) {
        e.preventDefault();

        const today = new Date();

        const tanggalAwal = formattedDate(today);
        const tanggalAkhir = addOneMonth(tanggalAwal);

        const data = {
            user_id: pembayaran.user_id,
            keterangan: pembayaran.keterangan,
            jenis_pembayaran: pembayaran.jenis_pembayaran,
            tanggal_pembayaran: pembayaran.tanggal_pembayaran,
            tanggal_awal: tanggalAwal,
            tanggal_akhir: tanggalAkhir,
            approved_by: auth.user.id,
            approve: true,
            bukti_pembayaran: pembayaran.bukti_pembayaran,
        };

        router.put(`/pembayaran/${pembayaran.id}`, data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Pembayaran
                </h2>
            }
        >
            <Head title="Detail Pembayaran" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p>
                                Pembayaran Oleh:{" "}
                                <span className="font-bold">
                                    {pembayaran.user.name}
                                </span>
                            </p>
                            <p>{pembayaran.keterangan}</p>
                            <p>
                                Metode Pembayaran: {pembayaran.jenis_pembayaran}
                            </p>
                            <p>
                                {new Date(
                                    pembayaran.tanggal_pembayaran
                                ).toLocaleDateString("id-ID", {
                                    weekday: "long",
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                            {pembayaran.bukti_pembayaran ? (
                                <div className="w-96 h-auto">
                                    <p>Bukti Pembayaran</p>
                                    <img
                                        className="rounded-lg w-56"
                                        src={`/storage/${pembayaran.bukti_pembayaran}`}
                                        alt={`Bukti Pembayaran ${pembayaran.user.name}`}
                                    />
                                </div>
                            ) : (
                                ""
                            )}

                            {pembayaran.approve ? (
                                <div className="mt-3">
                                    <span className="text-green-500 font-bold">
                                        Done
                                    </span>
                                    <p>
                                        Approved By:{" "}
                                        {pembayaran.approved_by.name}
                                    </p>
                                </div>
                            ) : (
                                <button
                                    onClick={handleApprove}
                                    className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-lg"
                                >
                                    Approve
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
