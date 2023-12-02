import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function EditPeserta({ auth, peserta }) {
    peserta = peserta[0];
    const [skor, setSkor] = useState(peserta.skor);
    const [keterangan, setKeterangan] = useState(peserta.keterangan || "");
    const [piagam, setPiagam] = useState(peserta.foto_piagam || null);

    console.log(piagam);

    function submitHandler(e) {
        e.preventDefault();
        const data = {
            user_id: peserta.user_id,
            event_id: peserta.event_id,
            approve_by: auth.user.id,
            approve: peserta.approve,
            skor: parseInt(skor),
            keterangan: keterangan,
            foto_piagam: piagam,
        };
        console.log(data);

        router.post(
            `/peserta/${peserta.id}?prevSkor=${peserta.skor}&id=${peserta.id}`,
            {
                _method: "PUT",
                ...data,
            }
        );
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Beri Skor
                </h2>
            }
        >
            <Head title="Skor" />

            <div className="py-12">
                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div className="container">
                                    <p className="capitalize">
                                        Nama Member: {peserta.user.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div className="container">
                                    <form
                                        className="grid gap-3"
                                        onSubmit={submitHandler}
                                    >
                                        <div>
                                            <label htmlFor="skor">Skor</label>
                                            <input
                                                className="w-full rounded-lg mt-2"
                                                type="number"
                                                id="skor"
                                                name="skor"
                                                placeholder="Skor"
                                                defaultValue={skor}
                                                required
                                                onChange={(e) => {
                                                    setSkor(e.target.value);
                                                }}
                                            />
                                        </div>
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
                                                defaultValue={keterangan}
                                                required
                                                onChange={(e) => {
                                                    setKeterangan(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="piagam">
                                                Foto Piagam
                                            </label>
                                            <img
                                                className="rounded-t-lg w-64"
                                                src={`/${peserta.foto_piagam}`}
                                                alt={peserta.keterangan}
                                            />
                                            <input
                                                className="w-full rounded-lg mt-2"
                                                type="file"
                                                id="piagam"
                                                name="piagam"
                                                placeholder="piagam"
                                                onChange={(e) => {
                                                    setPiagam(
                                                        e.target.files[0]
                                                    );
                                                }}
                                            />
                                        </div>

                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                            type="submit"
                                        >
                                            Simpan Skor
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
