import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function EditPeserta({ auth, peserta }) {
    peserta = peserta[0];
    const [skor, setSkor] = useState(peserta.skor);
    const [keterangan, setKeterangan] = useState(peserta.keterangan || "");
    // const [piagam, setPiagam] = useState(peserta.foto_piagam || null);

    console.log(peserta);
    const [fotoCount, setFotoCount] = useState(
        peserta.foto_piagam
            ? peserta.foto_piagam.length
                ? peserta.foto_piagam.length
                : 0
            : 0
    );
    const [fotoData, setFotoData] = useState(peserta.foto_piagam || []);
    const [isSimpan, setIsSimpan] = useState(false);

    // console.log(piagam);

    function TambahForm() {
        setFotoCount((prevCount) => prevCount + 1);
        const updatedData = [...fotoData];
        updatedData.push("");
        setFotoData(updatedData);

        setIsSimpan(false);
    }

    function KurangForm() {
        setFotoCount((prevCount) => prevCount - 1);
        const updatedData = [...fotoData];
        updatedData.pop();
        setFotoData(updatedData);

        setIsSimpan(false);
    }

    function handleFotoChange(index, e) {
        const updatedData = [...fotoData];
        updatedData[index] = e.target.files[0];
        setFotoData(updatedData);

        setIsSimpan(false);
    }

    console.log(fotoData);

    function submitHandler(e) {
        e.preventDefault();
        console.log(fotoCount);
        const data = {
            user_id: peserta.user_id,
            event_id: peserta.event_id,
            approve_by: auth.user.id,
            approve: peserta.approve,
            skor: parseInt(skor),
            keterangan: keterangan,
            foto_piagam: fotoData,
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
                                            <div className="my-2 bg-yellow-30 flex  md:col-span-2 gap-2">
                                                <span
                                                    className="cursor-pointer px-4 py-2 bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold rounded-md text-center"
                                                    onClick={() => TambahForm()}
                                                >
                                                    + Foto
                                                </span>

                                                {fotoCount > 0 ? (
                                                    <span
                                                        className="cursor-pointer text-center bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-lg"
                                                        onClick={() =>
                                                            KurangForm()
                                                        }
                                                    >
                                                        - Foto
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </div>

                                            {Array.from({
                                                length: fotoCount,
                                            }).map((_, index) => (
                                                <div
                                                    className="gap-3 col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2"
                                                    key={index}
                                                >
                                                    <div className="flex flex-col mb-3">
                                                        <label
                                                            htmlFor={`gambar${
                                                                index + 1
                                                            }`}
                                                            className="block"
                                                        >
                                                            Gambar {index + 1}
                                                        </label>

                                                        <img
                                                            className="rounded-t-lg w-64 mb-2"
                                                            src={`/${fotoData[index]}`}
                                                            alt={
                                                                peserta.keterangan
                                                            }
                                                        />

                                                        <input
                                                            type="file"
                                                            className="w-full px-4 py-2"
                                                            id={`gambart${
                                                                index + 1
                                                            }`}
                                                            name={`gambart${
                                                                index + 1
                                                            }`}
                                                            onChange={(e) =>
                                                                handleFotoChange(
                                                                    index,
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            ))}

                                            {/* <img
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
                                            /> */}
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
