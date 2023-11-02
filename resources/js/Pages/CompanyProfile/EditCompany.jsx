// import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import React from "react";
import ReactDropdown from "react-dropdown";

export default function EditCompany({ company, auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        id: company[0].id,
        judul: company[0].judul,
        desc: company[0].desc,
        harga: company[0].harga,
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(`/adminlanding/${company[0].id}`, {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Edit Menu Harga {company[0].judul}
                </h2>
            }
        >
            <div className="w-full">
                <div className="container lg:px-20 flex justify-center items-center flex-col pt-4 mx-auto  ">
                    <form
                        onSubmit={submit}
                        className="flex justify-center flex-col lg:w-full w-3/4"
                    >
                        <div className="flex w-full flex-col  gap-3 mt-2">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="judul"
                                    value="Nama Lengkap"
                                />

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
                                <InputLabel htmlFor="desc" value="desc" />

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
                                <InputLabel htmlFor="harga" value="harga" />

                                <TextInput
                                    id="harga"
                                    type="text"
                                    name="harga"
                                    value={data.harga}
                                    className="mt-1 block w-full"
                                    autoComplete="harga"
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
                                Edit Menu harga
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
