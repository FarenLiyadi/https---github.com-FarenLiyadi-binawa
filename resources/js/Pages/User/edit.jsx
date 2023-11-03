// import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import React from "react";
import ReactDropdown from "react-dropdown";

export default function EditCompany({ user, auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        id: user[0].id,
        email: user[0].email,
        name: user[0].name,
        roles: user[0].roles,
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(`/user/${user[0].id}`, {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Edit user {user[0].name}
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
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="text"
                                    disabled
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    disabled
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="roles">Roles</label>
                                <select
                                    className="w-full rounded-lg"
                                    id="roles"
                                    name="roles"
                                    value={data.roles}
                                    onChange={(e) => {
                                        setData("roles", e.target.value);
                                    }}
                                >
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="PELATIH">PELATIH</option>
                                    <option value="USER">USER</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-center m-10">
                            <PrimaryButton disabled={processing}>
                                Edit roles user
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
