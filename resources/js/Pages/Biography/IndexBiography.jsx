import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import React from "react";
import ReactDropdown from "react-dropdown";

export default function IndexBiography({ biography, auth, errors }) {
    console.log(biography);
    const options2 = [biography[0].jenis_kelamin];

    const options = [biography[0].agama];

    const options3 = [biography[0].tangan];
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Biodata {auth.user.name}
                </h2>
            }
        >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-5">
                <div className=" overflow-hidden shadow-sm sm:rounded-lg py-5">
                    {biography.length != 0 ? (
                        <div className="container flex justify-center items-center flex-col pt-4">
                            <div className="container flex justify-end w-full py-10">
                                <PrimaryButton
                                    onClick={() =>
                                        window.open(
                                            `/biography/${biography[0].id}/edit`,
                                            "_self"
                                        )
                                    }
                                >
                                    Edit Biodata KAMU
                                </PrimaryButton>
                            </div>
                            <div className="lg:w-1/2 w-3/4">
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="nama_lengkap"
                                        value="Nama Lengkap"
                                    />

                                    <TextInput
                                        disabled
                                        id="nama_lengkap"
                                        type="text"
                                        name="nama_lengkap"
                                        value={biography[0].nama_lengkap}
                                        className="mt-1 block w-full"
                                        autoComplete="nama_lengkap"
                                        onChange={(e) =>
                                            setData(
                                                "nama_lengkap",
                                                e.target.value
                                            )
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
                                        disabled
                                        id="NIK"
                                        type="text"
                                        name="nik"
                                        value={biography[0].nik}
                                        className="mt-1 block w-full"
                                        autoComplete="nik"
                                        onChange={(e) =>
                                            setData("nik", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.nik}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel htmlFor="nisn" value="NISN" />

                                    <TextInput
                                        disabled
                                        id="nisn"
                                        type="text"
                                        name="nisn"
                                        value={biography[0].nisn}
                                        className="mt-1 block w-full"
                                        autoComplete="nisn"
                                        onChange={(e) =>
                                            setData("nisn", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.nisn}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="tempat_lahir"
                                        value="Tempat Lahir"
                                    />

                                    <TextInput
                                        disabled
                                        id="tempat_lahir"
                                        type="text"
                                        name="tempat_lahir"
                                        value={biography[0].tempat_lahir}
                                        className="mt-1 block w-full"
                                        autoComplete="tempat_lahir"
                                        onChange={(e) =>
                                            setData(
                                                "tempat_lahir",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.tempat_lahir}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="w-full">
                                    <InputLabel htmlFor="agama" value="Agama" />
                                    <ReactDropdown
                                        options={options}
                                        value={biography[0].agama}
                                        placeholder="Pilih Agama"
                                        className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                                        onChange={(e) =>
                                            setData("agama", e.value)
                                        }
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="jenis_kelamin"
                                        value="Jenis Kelamin"
                                    />
                                    <ReactDropdown
                                        options={options2}
                                        value={biography[0].jenis_kelamin}
                                        placeholder="Pilih Jenis Kelamin"
                                        className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                                        onChange={(e) =>
                                            setData("jenis_kelamin", e.value)
                                        }
                                    />
                                </div>

                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="nama_ayah"
                                        value="Nama Ayah"
                                    />

                                    <TextInput
                                        disabled
                                        id="nama_ayah"
                                        type="text"
                                        name="nama_ayah"
                                        value={biography[0].nama_ayah}
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
                                    <InputLabel
                                        htmlFor="nama_ibu"
                                        value="Nama Ibu"
                                    />

                                    <TextInput
                                        disabled
                                        id="nama_ibu"
                                        type="text"
                                        name="nama_ibu"
                                        value={biography[0].nama_ibu}
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
                                        disabled
                                        id="pekerjaan_ayah"
                                        type="text"
                                        name="pekerjaan_ayah"
                                        value={biography[0].pekerjaan_ayah}
                                        className="mt-1 block w-full"
                                        autoComplete="pekerjaan_ayah"
                                        onChange={(e) =>
                                            setData(
                                                "pekerjaan_ayah",
                                                e.target.value
                                            )
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
                                        disabled
                                        id="pekerjaan_ibu"
                                        type="text"
                                        name="pekerjaan_ibu"
                                        value={biography[0].pekerjaan_ibu}
                                        className="mt-1 block w-full"
                                        autoComplete="pekerjaan_ibu"
                                        onChange={(e) =>
                                            setData(
                                                "pekerjaan_ibu",
                                                e.target.value
                                            )
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
                                        disabled
                                        id="tinggi_badan"
                                        type="text"
                                        name="tinggi_badan"
                                        value={biography[0].tinggi_badan}
                                        className="mt-1 block w-full"
                                        autoComplete="tinggi_badan"
                                        onChange={(e) =>
                                            setData(
                                                "tinggi_badan",
                                                e.target.value
                                            )
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
                                        disabled
                                        id="berat_badan"
                                        type="text"
                                        name="berat_badan"
                                        value={biography[0].berat_badan}
                                        className="mt-1 block w-full"
                                        autoComplete="berat_badan"
                                        onChange={(e) =>
                                            setData(
                                                "berat_badan",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.berat_badan}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="tangan"
                                        value="Tangan"
                                    />
                                    <ReactDropdown
                                        options={options3}
                                        value={biography[0].tangan}
                                        placeholder="Pilih Tangan Pemain"
                                        className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                                        onChange={(e) =>
                                            setData("tangan", e.value)
                                        }
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="alamat"
                                        value="Alamat"
                                    />

                                    <TextInput
                                        disabled
                                        id="alamat"
                                        type="text"
                                        name="alamat"
                                        value={biography[0].alamat}
                                        className="mt-1 block w-full"
                                        autoComplete="alamat"
                                        onChange={(e) =>
                                            setData("alamat", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.alamat}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full">
                                    <InputLabel
                                        htmlFor="no_telp"
                                        value="No Telp"
                                    />

                                    <TextInput
                                        disabled
                                        id="no_telp"
                                        type="text"
                                        name="no_telp"
                                        value={biography[0].no_telp}
                                        className="mt-1 block w-full"
                                        autoComplete="no_telp"
                                        onChange={(e) =>
                                            setData("no_telp", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.no_telp}
                                        className="mt-2"
                                    />
                                </div>

                                {auth.user.roles == "USER" && (
                                    <div className="">
                                        <div className="mt-2">
                                            <label className="" id="pas_foto">
                                                Pas Foto 4 x 6
                                            </label>
                                            {biography[0].pas_foto != null ? (
                                                <img
                                                    className="rounded-t-lg "
                                                    sizes="30px"
                                                    src={
                                                        biography[0].pas_foto ==
                                                        null
                                                            ? `/no-photo.png`
                                                            : `/${biography[0].pas_foto}`
                                                    }
                                                    alt=""
                                                />
                                            ) : (
                                                <h1 className="text-red-500">
                                                    PAS FOTO BELUM ADA
                                                </h1>
                                            )}
                                        </div>
                                        <div className="mt-2">
                                            <label
                                                className=""
                                                id="kartu_keluarga"
                                            >
                                                Foto Kartu Keluarga
                                            </label>
                                            {biography[0].kartu_keluarga !=
                                            null ? (
                                                <img
                                                    className="rounded-t-lg "
                                                    sizes="30px"
                                                    src={`/${biography[0].kartu_keluarga}`}
                                                    alt=""
                                                />
                                            ) : (
                                                <h1 className="text-red-500">
                                                    FOTO KARTU KELUARGA BELUM
                                                    ADA
                                                </h1>
                                            )}
                                        </div>
                                        <div className="mt-2">
                                            <label
                                                className=""
                                                id="akte_kelahiran"
                                            >
                                                Foto Akte Kelahiran
                                            </label>
                                            {biography[0].akte_kelahiran !=
                                            null ? (
                                                <img
                                                    className="rounded-t-lg "
                                                    sizes="30px"
                                                    src={`/${biography[0].akte_kelahiran}`}
                                                    alt=""
                                                />
                                            ) : (
                                                <h1 className="text-red-500">
                                                    FOTO AKTE KELAHIRAN BELUM
                                                    ADA
                                                </h1>
                                            )}
                                        </div>
                                        <div className="mt-2">
                                            <label className="" id="ktp">
                                                Foto KTP
                                            </label>
                                            {biography[0].ktp != null ? (
                                                <img
                                                    className="rounded-t-lg "
                                                    sizes="30px"
                                                    src={`/${biography[0].ktp}`}
                                                    alt=""
                                                />
                                            ) : (
                                                <h1 className="text-red-500">
                                                    FOTO KTP BELUM ADA
                                                </h1>
                                            )}
                                        </div>
                                        <div className="mt-2">
                                            <label className="" id="rapor">
                                                Foto rapor
                                            </label>
                                            {biography[0].rapor != null ? (
                                                <img
                                                    className="rounded-t-lg "
                                                    sizes="30px"
                                                    src={`/${biography[0].rapor}`}
                                                    alt=""
                                                />
                                            ) : (
                                                <h1 className="text-red-500">
                                                    FOTO RAPOR BELUM ADA
                                                </h1>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="container flex justify-start w-full lg-">
                            <PrimaryButton
                                onClick={() =>
                                    window.open(`/biography/create`, "_self")
                                }
                            >
                                Tambah Biodata Kamu
                            </PrimaryButton>
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
