import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import React from "react";
import ReactDropdown from "react-dropdown";
import NavLink from "@/Components/NavLink";

export default function IndexBiography({ biography, auth, errors }) {
    console.log(biography);
    const options2 = [biography.length > 0 ? biography[0].jenis_kelamin : ""];

    const options = [biography.length > 0 ? biography[0].agama : ""];

    const options3 = [biography.length > 0 ? biography[0].tipe_melatih : ""];
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Biodata Pelatih{" "}
                    {auth.user.roles == "PELATIH"
                        ? auth.user.name
                        : biography[0].user.name}
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
                                            `/biographypelatih/${biography[0].id}/edit`,
                                            "_self"
                                        )
                                    }
                                >
                                    Edit Biodata pelatih
                                </PrimaryButton>
                            </div>
                            <div className="lg:w-full w-3/4 ">
                                <div className="flex justify-center mx-auto">
                                    <div className="mt-2 ">
                                        <label className="" id="pas_foto">
                                            Pas Foto 4 x 6
                                        </label>
                                        {biography[0].pas_foto != null ? (
                                            <img
                                                className="rounded-t-lg w-64"
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
                                </div>

                                <div className="flex w-full flex-col lg:flex-row gap-3 mt-2">
                                    <div className="lg:w-1/3">
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
                                    <div className="lg:w-1/3">
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
                                    <div className="lg:w-1/3">
                                        <InputLabel
                                            htmlFor="asal"
                                            value="Asal"
                                        />

                                        <TextInput
                                            disabled
                                            id="asal"
                                            type="text"
                                            name="asal"
                                            value={biography[0].asal}
                                            className="mt-1 block w-full"
                                            autoComplete="asal"
                                            onChange={(e) =>
                                                setData("asal", e.target.value)
                                            }
                                        />

                                        <InputError
                                            message={errors.asal}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full flex-col lg:flex-row gap-3 mt-2">
                                    <div className="lg:w-1/3">
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
                                    <div className="lg:w-1/3">
                                        <InputLabel
                                            htmlFor="tanggal_lahir"
                                            value="Tanggal Lahir"
                                        />

                                        <TextInput
                                            disabled
                                            id="tanggal_lahir"
                                            type="text"
                                            name="tanggal_lahir"
                                            value={
                                                biography[0].tanggal_lahir
                                                    ? new Date(
                                                          biography[0].tanggal_lahir
                                                      ).toLocaleDateString(
                                                          "id-ID",
                                                          {
                                                              weekday: "long",
                                                              day: "2-digit",
                                                              month: "long",
                                                              year: "numeric",
                                                          }
                                                      )
                                                    : "none"
                                            }
                                            className="mt-1 block w-full"
                                            autoComplete="tanggal_lahir"
                                            onChange={(e) =>
                                                setData(
                                                    "tanggal_lahir",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.tanggal_lahir}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="lg:w-1/3">
                                        <InputLabel
                                            htmlFor="agama"
                                            value="Agama"
                                        />
                                        <ReactDropdown
                                            options={options}
                                            disabled
                                            value={biography[0].agama}
                                            placeholder="Pilih Agama"
                                            className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                                            onChange={(e) =>
                                                setData("agama", e.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="flex w-full flex-col lg:flex-row gap-3 mt-2">
                                    <div className="lg:w-1/3">
                                        <InputLabel
                                            htmlFor="pelatihan"
                                            value="Pelatihan"
                                        />

                                        <TextInput
                                            disabled
                                            id="pelatihan"
                                            type="text"
                                            name="pelatihan"
                                            value={biography[0].pelatihan}
                                            className="mt-1 block w-full"
                                            autoComplete="pelatihan"
                                            onChange={(e) =>
                                                setData(
                                                    "pelatihan",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.pelatihan}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="lg:w-1/3">
                                        <InputLabel
                                            htmlFor="club_terakhir"
                                            value="Club Terakhir"
                                        />

                                        <TextInput
                                            disabled
                                            id="club_terakhir"
                                            type="text"
                                            name="club_terakhir"
                                            value={biography[0].club_terakhir}
                                            className="mt-1 block w-full"
                                            autoComplete="club_terakhir"
                                            onChange={(e) =>
                                                setData(
                                                    "club_terakhir",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.club_terakhir}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="lg:w-1/3">
                                        <InputLabel
                                            htmlFor="karier"
                                            value="Karier"
                                        />

                                        <TextInput
                                            disabled
                                            id="karier"
                                            type="text"
                                            name="karier"
                                            value={biography[0].karier}
                                            className="mt-1 block w-full"
                                            autoComplete="karier"
                                            onChange={(e) =>
                                                setData(
                                                    "karier",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.karier}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full flex-col lg:flex-row gap-3 mt-2">
                                    <div className="lg:w-1/3">
                                        <InputLabel
                                            htmlFor="jenis_kelamin"
                                            value="Jenis Kelamin"
                                        />
                                        <ReactDropdown
                                            options={options2}
                                            disabled
                                            value={biography[0].jenis_kelamin}
                                            placeholder="Pilih Jenis Kelamin"
                                            className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                                            onChange={(e) =>
                                                setData(
                                                    "jenis_kelamin",
                                                    e.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="lg:w-1/3">
                                        <InputLabel
                                            htmlFor="tipe_melatih"
                                            value="Tipe Melatih"
                                        />
                                        <ReactDropdown
                                            options={options3}
                                            disabled
                                            value={biography[0].tipe_melatih}
                                            placeholder="Pilih Tipe Melatih"
                                            className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md"
                                            onChange={(e) =>
                                                setData("tipe_melatih", e.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="flex w-full flex-col lg:flex-row gap-5 mt-2 justify-between">
                                    <div className="mt-2">
                                        <label className="" id="ktp">
                                            Foto KTP
                                        </label>
                                        {biography[0].ktp != null ? (
                                            <img
                                                className="rounded-t-lg w-64"
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
                                        <label className="" id="bukti_pelatih">
                                            Foto Bukti Pelatih
                                        </label>
                                        {biography[0].bukti_pelatih != null ? (
                                            <img
                                                className="rounded-t-lg w-64"
                                                src={`/${biography[0].bukti_pelatih}`}
                                                alt=""
                                            />
                                        ) : (
                                            <h1 className="text-red-500">
                                                FOTO Bukti Pelatih BELUM ADA
                                            </h1>
                                        )}
                                    </div>
                                    <div className="mt-2">
                                        <label className="" id="kk">
                                            Foto Kartu Keluarga
                                        </label>
                                        {biography[0].kk != null ? (
                                            <img
                                                className="rounded-t-lg w-64"
                                                src={`/${biography[0].kk}`}
                                                alt=""
                                            />
                                        ) : (
                                            <h1 className="text-red-500">
                                                FOTO Kartu Keluarga BELUM ADA
                                            </h1>
                                        )}
                                    </div>
                                    <div className="mt-2">
                                        <label className="">
                                            Foto Sertifikat
                                        </label>
                                        {biography[0].sertifikat.length > 0 ? (
                                            biography[0].sertifikat.map(
                                                (data, key) => {
                                                    return (
                                                        <div
                                                            key={key}
                                                            className="mb-2"
                                                        >
                                                            <label>
                                                                {
                                                                    data.keterangan
                                                                }
                                                            </label>
                                                            <img
                                                                className="rounded-t-lg w-64"
                                                                src={`/${data.gambar}`}
                                                                alt={
                                                                    data.keterangan
                                                                }
                                                            />
                                                        </div>
                                                    );
                                                }
                                            )
                                        ) : (
                                            <h1 className="text-red-500">
                                                FOTO Sertifikat BELUM ADA
                                            </h1>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="container flex justify-start w-full lg-">
                            <PrimaryButton
                                onClick={() =>
                                    window.open(
                                        `/biographypelatih/create`,
                                        "_self"
                                    )
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
