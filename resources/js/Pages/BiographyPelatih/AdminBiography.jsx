import Authenticated from "@/Layouts/AuthenticatedLayout";
import { React, useEffect, useState } from "react";
import { BsEye, BsTrash3, BsFillPlusCircleFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import Pagination from "@/Components/Pagination";

export default function AdminBiography(props) {
    const { user, auth } = props;
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState(user || [{}]);

    useEffect(() => {
        console.log(search);

        // Panggil Data pencarian
        const fetchData = async () => {
            // Jika kolom search ada
            if (search) {
                const response = await fetch(
                    `/biography-pelatih-search?nama=${search}`
                );

                const data = await response.json();

                setSearchResults(data);
                console.log(searchResults);
            } else {
                // jika tidak ada maka kemalikan data awal
                setSearchResults(user);
            }
        };

        fetchData();

        // ditrigger oleh perubahan pada var search
    }, [search]);

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Biodata Pelatih
                </h2>
            }
        >
            <div className=" flex flex-col">
                <div className="overflow-x-auto ">
                    <div className="inline-block min-w-full py-2 px-3">
                        <div className="overflow-hidden">
                            <div className="mx-4 my-2">
                                <input
                                    className="rounded-xl w-full"
                                    type="text"
                                    id="search"
                                    name="search"
                                    placeholder="Cari nama pelatih"
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                />
                            </div>
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border font-medium border-neutral-500">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 uppercase border-r border-neutral-500"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 uppercase border-r border-neutral-500"
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
                                    {searchResults.data.map((e, index) => {
                                        console.log(e);
                                        return (
                                            <tr
                                                key={index}
                                                className={`border hover:bg-neutral-400 border-neutral-500  ${
                                                    (index + 1) % 2 == 0
                                                        ? "bg-neutral-200"
                                                        : "bg-white"
                                                }`}
                                            >
                                                <td className="whitespace-nowrap px-6 py-4 font-medium border-r border-neutral-500">
                                                    {e.email !== null
                                                        ? e.email
                                                        : "NOT SET"}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 border-r border-neutral-500">
                                                    {e.biography_pelatih !==
                                                    null
                                                        ? e.biography_pelatih
                                                              .nama_lengkap
                                                            ? e
                                                                  .biography_pelatih
                                                                  .nama_lengkap
                                                            : e.name
                                                        : e.name}
                                                </td>

                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        <button
                                                            onClick={() => {
                                                                e.biography_pelatih ==
                                                                null
                                                                    ? alert(
                                                                          "DATA BIOGRAPHY PELATIH BELUM DI ISI OLEH PELATIH"
                                                                      )
                                                                    : window.open(
                                                                          `/biographypelatih/${e.biography_pelatih.user_id}`,
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
                                <Pagination
                                    class="mt-6"
                                    links={searchResults.meta}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
