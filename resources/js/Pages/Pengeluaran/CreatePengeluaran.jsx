import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function CreatePengeluaran({ auth }) {
    const [keterangan, setKeterangan] = useState("");
    const [nominal, setNominal] = useState(0);
    const [tanggalPengeluaran, setTanggalPengeluaran] = useState("");

    function submitHandler(e) {
        e.preventDefault();

        const data = {
            user_id: auth.user.id,
            keterangan: keterangan,
            nominal: nominal,
            tanggal_pengeluaran: tanggalPengeluaran,
        };

        console.log(data);
        router.post(`/pengeluaran`, data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pengeluaran
                </h2>
            }
        >
            <Head title="Pengeluaran" />

            <div className="py-12">
                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <form
                                    className="grid gap-3"
                                    onSubmit={submitHandler}
                                >
                                    <div>
                                        <label htmlFor="keterangan">
                                            Keterangan
                                        </label>
                                        <input
                                            className="w-full rounded-lg mt-2"
                                            type="text"
                                            id="keterangan"
                                            name="keterangan"
                                            placeholder="Keterangan"
                                            required
                                            onChange={(e) => {
                                                setKeterangan(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="nominal">Nominal</label>
                                        <input
                                            className="w-full rounded-lg mt-2"
                                            type="number"
                                            id="nominal"
                                            name="nominal"
                                            placeholder="0"
                                            min={0}
                                            required
                                            onChange={(e) => {
                                                setNominal(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="tanggalPembayaran">
                                            Tanggal Pembayaran
                                        </label>
                                        <input
                                            className="w-full rounded-lg mt-2"
                                            type="date"
                                            id="tanggalPembayaran"
                                            name="tanggalPembayaran"
                                            required
                                            onChange={(e) => {
                                                setTanggalPengeluaran(
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>

                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                        type="submit"
                                    >
                                        Laporkan Pengeluaran
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
