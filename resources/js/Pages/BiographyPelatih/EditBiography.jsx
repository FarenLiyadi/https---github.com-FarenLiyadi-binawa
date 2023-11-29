// import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import React from "react";
import ReactDropdown from "react-dropdown";

export default function EditBiography({ biography, auth }) {
    console.log(biography[0].nama_lengkap);
    const { data, setData, post, processing, errors, reset } = useForm({
        id: biography[0].id,
        user_id: biography[0].user_id,
        nama_lengkap: biography[0].nama_lengkap,
        nik: biography[0].nik,
        tempat_lahir: biography[0].tempat_lahir,
        tanggal_lahir: biography[0].tanggal_lahir,
        jenis_kelamin: biography[0].jenis_kelamin,
        agama: biography[0].agama,
        asal: biography[0].asal,
        pelatihan: biography[0].pelatihan,
        club_terakhir: biography[0].club_terakhir,
        karier: biography[0].karier,

        kk: "",
        bukti_pelatih: "",
        ktp: "",
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(`/biographypelatih/${biography[0].id}`, {
            _method: "PUT",
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
                    EDIT Biodata{" "}
                    {auth.user.roles == "USER"
                        ? auth.user.name
                        : biography[0].user.name}
                </h2>
            }
        >
            <div className="w-full">
                <div className="container flex justify-center items-center flex-col pt-4 mx-auto px-20 ">
                    <form
                        onSubmit={submit}
                        className="flex justify-center flex-col lg:w-full w-3/4"
                    >
                        <div className=" flex justify-center mx-auto">
                            <div className="mt-2">
                                <label className="" id="ktp">
                                    Edit Foto KTP
                                </label>
                                {biography[0].ktp != null && (
                                    <img
                                        className="rounded-t-lg w-64"
                                        src={`/${biography[0].ktp}`}
                                        alt=""
                                    />
                                )}
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
                        </div>
                        <div className="flex w-full flex-col lg:flex-row gap-3 mt-2">
                            <div className="lg:w-1/3">
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
                            <div className="lg:w-1/3">
                                <InputLabel htmlFor="NIK" value="NIK" />

                                <TextInput
                                    id="NIK"
                                    type="text"
                                    name="nik"
                                    value={data.nik}
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
                                <InputLabel htmlFor="asal" value="Asal" />

                                <TextInput
                                    id="asal"
                                    type="text"
                                    name="asal"
                                    value={data.asal}
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

                            <div className="lg:w-1/3">
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

                            <div className="lg:w-1/3">
                                <InputLabel htmlFor="agama" value="Agama" />
                                <ReactDropdown
                                    options={options}
                                    value={biography[0].agama}
                                    placeholder="Pilih Agama"
                                    className="mt-1 bg-white p-2 border border-solid border-gray-400 rounded-md "
                                    onChange={(e) => setData("agama", e.value)}
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
                            <div className="lg:w-1/3">
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
                            <div className="lg:w-1/3">
                                <InputLabel htmlFor="karier" value="Karier" />

                                <TextInput
                                    id="karier"
                                    type="text"
                                    name="karier"
                                    value={data.karier}
                                    className="mt-1 block w-full"
                                    autoComplete="karier"
                                    onChange={(e) =>
                                        setData("karier", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.karier}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="flex w-full justify-center flex-col lg:flex-row gap-3">
                            <div className="mt-2 mx-auto">
                                <label className="" id="bukti_pelatih">
                                    Edit Foto Bukti Pelatih
                                </label>
                                {biography[0].bukti_pelatih != null && (
                                    <img
                                        className="rounded-t-lg w-64"
                                        src={`/${biography[0].bukti_pelatih}`}
                                        alt=""
                                    />
                                )}
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
                            <div className="mt-2 mx-auto">
                                <label className="" id="kk">
                                    Edit Foto Kartu Keluarga
                                </label>
                                {biography[0].kk != null && (
                                    <img
                                        className="rounded-t-lg w-64"
                                        src={`/${biography[0].kk}`}
                                        alt=""
                                    />
                                )}
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
                        </div>

                        <div className="flex items-center justify-center m-10">
                            <PrimaryButton disabled={processing}>
                                Edit Biography Pelatih
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
