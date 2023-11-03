import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { BsEye, BsTrash3, BsFillPlusCircleFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

export default function AdminCompany(props) {
    const { user, auth } = props;
    console.log(user);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Daftar user
                </h2>
            }
        >
            <div className=" flex flex-col px-10">
                <div className="overflow-x-auto ">
                    <div className="inline-block min-w-full py-2 px-3">
                        {user.data.length > 0 ? (
                            <div className="overflow">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 uppercase"
                                            >
                                                email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 uppercase"
                                            >
                                                name
                                            </th>

                                            <th
                                                scope="col"
                                                className="text-center px-6 py-4 uppercase"
                                            >
                                                roles
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center px-6 py-4 uppercase"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.data.map((e, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className={`border-b hover:bg-neutral-400 dark:border-neutral-500  ${
                                                        (index + 1) % 2 == 0
                                                            ? "bg-neutral-200"
                                                            : "bg-white"
                                                    }`}
                                                >
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {e.email}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {e.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {e.roles}
                                                    </td>

                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <div className="flex flex-row gap-3 items-center justify-center">
                                                            <a
                                                                href={`/user/${e.id}/edit`}
                                                            >
                                                                <FaUserEdit />
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div className="flex w-full justify-center pt-10">
                                    <Pagination
                                        class="mt-6"
                                        links={user.meta}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="px-10 text-3xl">
                                <h1>Tidak ada data User!</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
