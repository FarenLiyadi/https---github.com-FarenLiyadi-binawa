import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { BsEye, BsTrash3, BsFillPlusCircleFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

export default function AdminCompany(props) {
    function handleDelete(id) {
        if (confirm("Yakin mau dihapus?")) {
            console.log(id);
            router.delete(`/adminlanding/${id}`);
        }
    }

    const { company, auth } = props;
    console.log(company);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Menu Harga landing Page
                </h2>
            }
        >
            <div className=" flex flex-col px-10">
                <div className="container flex justify-end w-full py-10">
                    <PrimaryButton
                        onClick={() =>
                            window.open(`/adminlanding/create`, "_self")
                        }
                    >
                        Create Menu Harga
                    </PrimaryButton>
                </div>
                <div className="overflow-x-auto ">
                    <div className="inline-block min-w-full py-2 px-3">
                        {company.length > 0 ? (
                            <div className="overflow">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 uppercase"
                                            >
                                                Judul
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 uppercase"
                                            >
                                                Desc
                                            </th>

                                            <th
                                                scope="col"
                                                className="text-center px-6 py-4 uppercase"
                                            >
                                                Harga
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
                                        {company.map((e, index) => {
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
                                                        {e.judul}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {e.desc}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        Rp {e.harga}K
                                                    </td>

                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <div className="flex flex-row gap-3 items-center justify-center">
                                                            <a
                                                                href={`/adminlanding/${e.id}/edit`}
                                                            >
                                                                <FaUserEdit />
                                                            </a>
                                                            <button
                                                                onClick={(
                                                                    event
                                                                ) =>
                                                                    handleDelete(
                                                                        e.id
                                                                    )
                                                                }
                                                            >
                                                                <BsTrash3 />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="px-10 text-3xl">
                                <h1>Tidak ada data company!</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
