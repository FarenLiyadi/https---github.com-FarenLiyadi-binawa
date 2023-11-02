// import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import React from "react";
import ReactDropdown from "react-dropdown";

export default function CreateCompany({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        judul: "",
        desc: "",
        harga: "",
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(`/adminlanding`, {
            _method: "post",
            ...data,
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Create Menu Harga
                </h2>
            }
        >
            <div className="container flex justify-center items-center flex-col pt-4">
                <form onSubmit={submit} className="lg:w-1/2 w-3/4">
                    <div className="">
                        <div className="w-full">
                            <InputLabel htmlFor="judul" value="Judul" />

                            <TextInput
                                id="judul"
                                type="text"
                                name="judul"
                                value={data.judul}
                                className="mt-1 block w-full"
                                autoComplete="judul"
                                onChange={(e) =>
                                    setData("judul", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.judul}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="desc" value="Desc" />

                            <TextInput
                                id="desc"
                                type="text"
                                name="desc"
                                value={data.desc}
                                className="mt-1 block w-full"
                                autoComplete="desc"
                                onChange={(e) =>
                                    setData("desc", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.desc}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel htmlFor="harga " value="Harga " />

                            <TextInput
                                id="harga "
                                type="text"
                                name="harga "
                                value={data.harga}
                                className="mt-1 block w-full"
                                autoComplete="harga "
                                onChange={(e) =>
                                    setData("harga", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.harga}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center m-10">
                        <PrimaryButton disabled={processing}>
                            Tambah Menu Harga
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}
