// import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import { React, useState } from "react";
import ReactDropdown from "react-dropdown";

export default function CreateBiography({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        nama_lengkap: "",
        nik: "",
        tanggal_lahir: "",
        tempat_lahir: "",
        agama: "",
        asal: "",
        pelatihan: "",
        club_terakhir: "",
        jenis_kelamin: "",
        tipe_melatih: "",

        karier: "",
        ktp: "",
        bukti_pelatih: "",
        kk: "",
        pas_foto: "",

        sertifikat: [],
    });

    const [sertifikatCount, setSertifikatCount] = useState(0);
    const [keteranganSertifikatData, setKeteranganSertifikatData] = useState(
        []
    );
    const [isSimpan, setIsSimpan] = useState(false);
    const [gambarSertifikatData, setGambarSertifikatData] = useState([]);

    const options2 = ["PRIA", "WANITA"];

    const options = [
        "ISLAM",
        "KATHOLIK",
        "PROTESTAN",
        "PENTAKOSTA",
        "BUDDHA",
        "HINDU",
    ];

    const options3 = ["SINGLE", "DOUBLE", "MIX"];

    function TambahForm() {
        setSertifikatCount((prevCount) => prevCount + 1);
        const updatedData = [...keteranganSertifikatData];
        updatedData.push("");
        setKeteranganSertifikatData(updatedData);

        const updatedData1 = [...gambarSertifikatData];
        updatedData1.push("");
        setGambarSertifikatData(updatedData1);

        setIsSimpan(false);
    }

    function KurangForm() {
        setSertifikatCount((prevCount) => prevCount - 1);
        const updatedData = [...keteranganSertifikatData];
        updatedData.pop();
        setKeteranganSertifikatData(updatedData);

        const updatedData1 = [...gambarSertifikatData];
        updatedData1.pop();
        setGambarSertifikatData(updatedData1);

        setIsSimpan(false);
    }

    function handleKeteranganChange(index, e) {
        const updatedData = [...keteranganSertifikatData];
        updatedData[index] = e.target.value;
        setKeteranganSertifikatData(updatedData);

        setIsSimpan(false);
    }

    function handleGambarChange(index, e) {
        const updatedData = [...gambarSertifikatData];
        updatedData[index] = e.target.files[0];
        setGambarSertifikatData(updatedData);

        setIsSimpan(false);
    }

    function simpan() {
        if (sertifikatCount > 0) {
            const updatedData = [];
            for (let i = 0; i < sertifikatCount; i++) {
                const newData = {
                    keterangan: keteranganSertifikatData[i],
                    gambar: gambarSertifikatData[i],
                };

                updatedData.push(newData);
            }
            console.log(updatedData);
            setData("sertifikat", updatedData);
            setIsSimpan(true);
        }
    }

    const submit = (e) => {
        e.preventDefault();

        console.log(data);

        router.post(`/biographypelatih`, {
            _method: "post",
            ...data,
        });
    };

    function sendForm() {}

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Create Biodata Pelatih {auth.user.name}
                </h2>
            }
        >
            <div className="container flex justify-center items-center flex-col pt-4">
                <form onSubmit={submit} className="lg:w-1/2 w-3/4">
                    <div className="w-full">
                        <InputLabel
                            htmlFor="nama_lengkap"
                            value="Nama Lengkap"
                        />

                        <TextInput
                            id="nama_lengkap"
                            type="text"
                            name="nama_lengkap"
                            value={data.nama_lengkap}
                            className="mt-1 block w-full"
                            autoComplete="nama_lengkap"
                            onChange={(e) =>
                                setData("nama_lengkap", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.nama_lengkap}
                            className="mt-2"
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel htmlFor="NIK" value="NIK" />

                        <TextInput
                            id="NIK"
                            type="text"
                            name="nik"
                            value={data.nik}
                            className="mt-1 block w-full"
                            autoComplete="nik"
                            onChange={(e) => setData("nik", e.target.value)}
                        />

                        <InputError message={errors.nik} className="mt-2" />
                    </div>

                    <div className="w-full">
                        <InputLabel
                            htmlFor="tempat_lahir"
                            value="Tempat Lahir"
                        />

                        <TextInput
                            id="tempat_lahir"
                            type="text"
                            name="tempat_lahir"
                            value={data.tempat_lahir}
                            className="mt-1 block w-full"
                            autoComplete="tempat_lahir"
                            onChange={(e) =>
                                setData("tempat_lahir", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.tempat_lahir}
                            className="mt-2"
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel
                            htmlFor="tanggal_lahir"
                            value="Tanggal Lahir"
                        />

                        <TextInput
                            id="tanggal_lahir"
                            type="date"
                            name="tanggal_lahir"
                            value={data.tanggal_lahir}
                            className="mt-1 block w-full"
                            autoComplete="tanggal_lahir"
                            onChange={(e) =>
                                setData("tanggal_lahir", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.tanggal_lahir}
                            className="mt-2"
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel htmlFor="agama" value="Agama" />
                        <ReactDropdown
                            options={options}
                            value=""
                            placeholder="Pilih Agama"
                            className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                            onChange={(e) => setData("agama", e.value)}
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel htmlFor="asal" value="Asal" />

                        <TextInput
                            id="asal"
                            type="text"
                            name="asal"
                            value={data.asal}
                            className="mt-1 block w-full"
                            autoComplete="asal"
                            onChange={(e) => setData("asal", e.target.value)}
                        />

                        <InputError message={errors.asal} className="mt-2" />
                    </div>

                    <div className="w-full">
                        <InputLabel
                            htmlFor="pelatihan"
                            value="Pelatihan dibidang"
                        />

                        <TextInput
                            id="pelatihan"
                            type="text"
                            name="pelatihan"
                            value={data.pelatihan}
                            className="mt-1 block w-full"
                            autoComplete="pelatihan"
                            onChange={(e) =>
                                setData("pelatihan", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.pelatihan}
                            className="mt-2"
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel
                            htmlFor="club_terakhir"
                            value="Club Terakhir"
                        />

                        <TextInput
                            id="club_terakhir"
                            type="text"
                            name="club_terakhir"
                            value={data.club_terakhir}
                            className="mt-1 block w-full"
                            autoComplete="club_terakhir"
                            onChange={(e) =>
                                setData("club_terakhir", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.club_terakhir}
                            className="mt-2"
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel htmlFor="karier" value="Karier" />

                        <TextInput
                            id="karier"
                            type="text"
                            name="karier"
                            value={data.karier}
                            className="mt-1 block w-full"
                            autoComplete="karier"
                            onChange={(e) => setData("karier", e.target.value)}
                        />

                        <InputError message={errors.karier} className="mt-2" />
                    </div>

                    <div className="flex w-full flex-col lg:flex-row gap-3 mt-2">
                        <div className="lg:w-1/2">
                            <InputLabel
                                htmlFor="jenis_kelamin"
                                value="Jenis Kelamin"
                            />
                            <ReactDropdown
                                options={options2}
                                value=""
                                placeholder="Pilih Jenis Kelamin"
                                className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                                onChange={(e) =>
                                    setData("jenis_kelamin", e.value)
                                }
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <InputLabel
                                htmlFor="tipe_melatih"
                                value="Tipe Melatih"
                            />
                            <ReactDropdown
                                options={options3}
                                value=""
                                placeholder="Pilih Tipe Melatih"
                                className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                                onChange={(e) =>
                                    setData("tipe_melatih", e.value)
                                }
                            />
                        </div>
                    </div>

                    {auth.user.roles == "PELATIH" && (
                        <div className="">
                            <div className="mt-2">
                                <label className="" id="kk">
                                    Masukkan Foto Kartu Keluarga
                                </label>
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    name="kk"
                                    onChange={(e) =>
                                        setData("kk", e.target.files[0])
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.kk}
                                </span>
                            </div>

                            <div className="mt-2">
                                <label className="" id="ktp">
                                    Masukkan Foto KTP
                                </label>
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    name="ktp"
                                    onChange={(e) =>
                                        setData("ktp", e.target.files[0])
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.ktp}
                                </span>
                            </div>
                            <div className="mt-2">
                                <label className="" id="bukti_pelatih">
                                    Masukkan Foto bukti pelatih
                                </label>
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    name="bukti_pelatih"
                                    onChange={(e) =>
                                        setData(
                                            "bukti_pelatih",
                                            e.target.files[0]
                                        )
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.bukti_pelatih}
                                </span>
                            </div>
                            <div className="mt-2">
                                <label className="" id="pas_foto">
                                    Masukkan Pas Foto 4 x 6
                                </label>

                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    name="pas_foto"
                                    onChange={(e) =>
                                        setData("pas_foto", e.target.files[0])
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.pas_foto}
                                </span>
                            </div>

                            <div className="mt-2 bg-yellow-30 flex  md:col-span-2 gap-2">
                                <span
                                    className="cursor-pointer px-4 py-2 bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold rounded-md text-center"
                                    onClick={() => TambahForm()}
                                >
                                    + Sertifikat
                                </span>

                                {sertifikatCount > 0 ? (
                                    <span
                                        className="cursor-pointer text-center bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-lg"
                                        onClick={() => KurangForm()}
                                    >
                                        - Sertifikat
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>

                            {Array.from({ length: sertifikatCount }).map(
                                (_, index) => (
                                    <div
                                        className="gap-3 col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2"
                                        key={index}
                                    >
                                        <div className="mt-2 flex flex-col mb-3">
                                            <label
                                                htmlFor={`sertifikat${
                                                    index + 1
                                                }`}
                                                className="block"
                                            >
                                                Sertifikat {index + 1}
                                            </label>

                                            <input
                                                type="text"
                                                required
                                                className="rounded-md h-8 "
                                                id={`sertifikat${index + 1}`}
                                                name={`sertifikat${index + 1}`}
                                                placeholder="Keterangan"
                                                value={
                                                    keteranganSertifikatData[
                                                        index
                                                    ] || ""
                                                }
                                                onChange={(e) =>
                                                    handleKeteranganChange(
                                                        index,
                                                        e
                                                    )
                                                }
                                            ></input>
                                        </div>

                                        <div className="flex flex-col mb-3">
                                            <label
                                                htmlFor={`gambar${index + 1}`}
                                                className="block"
                                            >
                                                Gambar {index + 1}
                                            </label>

                                            <input
                                                type="file"
                                                required
                                                className="w-full px-4 py-2"
                                                id={`gambart${index + 1}`}
                                                name={`gambart${index + 1}`}
                                                onChange={(e) =>
                                                    handleGambarChange(index, e)
                                                }
                                            />
                                            <span className="text-red-600">
                                                {errors.pas_foto}
                                            </span>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    )}

                    <div className="flex items-center justify-center m-10">
                        {isSimpan === true || sertifikatCount == 0 ? (
                            <PrimaryButton disabled={processing}>
                                Tambah Biography Pelatih
                            </PrimaryButton>
                        ) : (
                            ""
                        )}
                    </div>
                </form>
                <div className="mb-10">
                    {sertifikatCount > 0 && isSimpan == false ? (
                        <button
                            onClick={(e) => simpan()}
                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                         'opacity-25'"
                        >
                            Simpan
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
