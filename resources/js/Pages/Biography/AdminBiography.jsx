import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { BsEye, BsTrash3, BsFillPlusCircleFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import Pagination from "@/Components/Pagination";

export default function AdminBiography(props) {
    const { user, auth } = props;
    console.log(user);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Biodata Atlet
                </h2>
            }
        >
            <div className=" flex flex-col">
                <div className="overflow-x-auto ">
                    <div className="inline-block min-w-full py-2 px-3">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 uppercase"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 uppercase"
                                        >
                                            Nama Lengkap
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
                                                    {e.email !== null
                                                        ? e.email
                                                        : "NOT SET"}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {e.biography !== null
                                                        ? e.biography
                                                              .nama_lengkap
                                                            ? e.biography
                                                                  .nama_lengkap
                                                            : "NOT SET"
                                                        : "NOT SET"}
                                                </td>

                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <button
                                                            onClick={() => {
                                                                e.biography ==
                                                                null
                                                                    ? alert(
                                                                          "DATA BIOGRAPHY BELUM DI ISI OLEH USER"
                                                                      )
                                                                    : window.open(
                                                                          `/biography/${e.biography.user_id}`,
                                                                          "_self"
                                                                      );
                                                            }}
                                                        >
                                                            <BsEye />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="flex w-full justify-center pt-10">
                                <Pagination class="mt-6" links={user.meta} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
