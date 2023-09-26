import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function EditLatihan({ auth, latihan }) {
    const [keterangan, setKeterangan] = useState(latihan.keterangan || "");
    const [tanggal, setTanggal] = useState(latihan.tanggal);

    console.log(latihan);

    function submitHandler(e) {
        e.preventDefault();

        const data = {
            tanggal: tanggal,
            keterangan: keterangan,
            last_update_by: auth.user.id,
        };
        console.log(data);

        router.put(`/latihan/${latihan.id}`, data);
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Latihan
                </h2>
            }
        >
            <Head title="Edit Latihan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="container">
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
                                            defaultValue={keterangan}
                                            placeholder="Keterangan Latihan"
                                            required
                                            onChange={(e) => {
                                                setKeterangan(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="tanggal">
                                            Tanggal Latihan
                                        </label>
                                        <input
                                            className="w-full rounded-lg mt-2"
                                            type="date"
                                            id="tanggal"
                                            defaultValue={tanggal}
                                            name="tanggal"
                                            required
                                            onChange={(e) => {
                                                setTanggal(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                        type="submit"
                                    >
                                        Edit Latihan
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
