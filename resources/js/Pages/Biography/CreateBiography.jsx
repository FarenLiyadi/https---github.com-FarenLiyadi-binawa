// import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import React from "react";
import ReactDropdown from "react-dropdown";

export default function CreateBiography({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        nama_lengkap: "",
        nik: "",
        nisn: "",
        tanggal_lahir: "",
        tempat_lahir: "",
        jenis_kelamin: "",
        agama: "",
        nama_ayah: "",
        nama_ibu: "",
        pekerjaan_ayah: "",
        pekerjaan_ibu: "",
        tinggi_badan: "",
        berat_badan: "",
        tangan: "",
        alamat: "",
        no_telp: "",
        pas_foto: "",
        kartu_keluarga: "",
        akte_kelahiran: "",
        ktp: "",
        rapor: "",
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(`/biography`, {
            _method: "post",
            ...data,
        });
    };

    const options2 = ["PRIA", "WANITA"];

    const options = [
        "ISLAM",
        "KATHOLIK",
        "PROTESTAN",
        "PENTAKOSTA",
        "BUDDHA",
        "HINDU",
    ];
    const options3 = ["KANAN", "KIRI"];
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Create Biodata {auth.user.name}
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
                        <InputLabel htmlFor="nisn" value="NISN" />

                        <TextInput
                            id="nisn"
                            type="text"
                            name="nisn"
                            value={data.nisn}
                            className="mt-1 block w-full"
                            autoComplete="nisn"
                            onChange={(e) => setData("nisn", e.target.value)}
                        />

                        <InputError message={errors.nisn} className="mt-2" />
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
                        <InputLabel
                            htmlFor="jenis_kelamin"
                            value="Jenis Kelamin"
                        />
                        <ReactDropdown
                            options={options2}
                            value=""
                            placeholder="Pilih Jenis Kelamin"
                            className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                            onChange={(e) => setData("jenis_kelamin", e.value)}
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel htmlFor="nama_ayah" value="Nama Ayah" />

                        <TextInput
                            id="nama_ayah"
                            type="text"
                            name="nama_ayah"
                            value={data.nama_ayah}
                            className="mt-1 block w-full"
                            autoComplete="nama_ayah"
                            onChange={(e) =>
                                setData("nama_ayah", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.nama_ayah}
                            className="mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel htmlFor="nama_ibu" value="Nama Ibu" />

                        <TextInput
                            id="nama_ibu"
                            type="text"
                            name="nama_ibu"
                            value={data.nama_ibu}
                            className="mt-1 block w-full"
                            autoComplete="nama_ibu"
                            onChange={(e) =>
                                setData("nama_ibu", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.nama_ibu}
                            className="mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel
                            htmlFor="pekerjaan_ayah"
                            value="Pekerjaan Ayah"
                        />

                        <TextInput
                            id="pekerjaan_ayah"
                            type="text"
                            name="pekerjaan_ayah"
                            value={data.pekerjaan_ayah}
                            className="mt-1 block w-full"
                            autoComplete="pekerjaan_ayah"
                            onChange={(e) =>
                                setData("pekerjaan_ayah", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.pekerjaan_ayah}
                            className="mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel
                            htmlFor="pekerjaan_ibu"
                            value="Pekerjaan Ibu"
                        />

                        <TextInput
                            id="pekerjaan_ibu"
                            type="text"
                            name="pekerjaan_ibu"
                            value={data.pekerjaan_ibu}
                            className="mt-1 block w-full"
                            autoComplete="pekerjaan_ibu"
                            onChange={(e) =>
                                setData("pekerjaan_ibu", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.pekerjaan_ibu}
                            className="mt-2"
                        />
                    </div>

                    <div className="w-full">
                        <InputLabel
                            htmlFor="tinggi_badan"
                            value="Tinggi Badan (cm)"
                        />

                        <TextInput
                            id="tinggi_badan"
                            type="text"
                            name="tinggi_badan"
                            value={data.tinggi_badan}
                            className="mt-1 block w-full"
                            autoComplete="tinggi_badan"
                            onChange={(e) =>
                                setData("tinggi_badan", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.tinggi_badan}
                            className="mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel
                            htmlFor="berat_badan"
                            value="Berat Badan (kg)"
                        />

                        <TextInput
                            id="berat_badan"
                            type="text"
                            name="berat_badan"
                            value={data.berat_badan}
                            className="mt-1 block w-full"
                            autoComplete="berat_badan"
                            onChange={(e) =>
                                setData("berat_badan", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.berat_badan}
                            className="mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel htmlFor="tangan" value="Tangan" />
                        <ReactDropdown
                            options={options3}
                            value=""
                            placeholder="Pilih Tangan Pemain"
                            className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                            onChange={(e) => setData("tangan", e.value)}
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel htmlFor="alamat" value="Alamat" />

                        <TextInput
                            id="alamat"
                            type="text"
                            name="alamat"
                            value={data.alamat}
                            className="mt-1 block w-full"
                            autoComplete="alamat"
                            onChange={(e) => setData("alamat", e.target.value)}
                        />

                        <InputError message={errors.alamat} className="mt-2" />
                    </div>
                    <div className="w-full">
                        <InputLabel htmlFor="no_telp" value="No Telp" />

                        <TextInput
                            id="no_telp"
                            type="text"
                            name="no_telp"
                            value={data.no_telp}
                            className="mt-1 block w-full"
                            autoComplete="no_telp"
                            onChange={(e) => setData("no_telp", e.target.value)}
                        />

                        <InputError message={errors.no_telp} className="mt-2" />
                    </div>

                    {auth.user.roles == "USER" && (
                        <div className="">
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
                            <div className="mt-2">
                                <label className="" id="kartu_keluarga">
                                    Masukkan Foto Kartu Keluarga
                                </label>
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    name="kartu_keluarga"
                                    onChange={(e) =>
                                        setData(
                                            "kartu_keluarga",
                                            e.target.files[0]
                                        )
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.kartu_keluarga}
                                </span>
                            </div>
                            <div className="mt-2">
                                <label className="" id="akte_kelahiran">
                                    Masukkan Foto Akte Kelahiran
                                </label>
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    name="akte_kelahiran"
                                    onChange={(e) =>
                                        setData(
                                            "akte_kelahiran",
                                            e.target.files[0]
                                        )
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.akte_kelahiran}
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
                                <label className="" id="rapor">
                                    Masukkan Foto rapor
                                </label>
                                <input
                                    type="file"
                                    className="w-full px-4 py-2"
                                    name="rapor"
                                    onChange={(e) =>
                                        setData("rapor", e.target.files[0])
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.rapor}
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-center m-10">
                        <PrimaryButton disabled={processing}>
                            Tambah Biography
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}
