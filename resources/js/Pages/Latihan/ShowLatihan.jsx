import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function ShowLatihan({ auth, latihan, users, absen }) {
    const [memberId, setMemberId] = useState([]);
    const [memberId1, setMemberId1] = useState([]);

    function renderListPeserta(dt) {
        return (
            <div key={dt.id}>
                <input
                    type="checkbox"
                    id={dt.user.name}
                    name={dt.user.name}
                    className="rounded"
                    value={dt.id}
                    onChange={(e) => handleCheckAbsen(e)}
                />
                <label className="mx-2 capitalize" htmlFor={dt.name}>
                    {dt.user.name}
                </label>
            </div>
        );
    }

    function handleCheckAbsen(e) {
        const updatedData = [...memberId1];

        if (e.target.checked) {
            // Jika checkbox ter Check, maka tambah data
            updatedData.push(e.target.value);
        } else {
            // jika checkbox tidak ter check, maka hapus data dari array
            // mencari index dari data yang kita inginkan dari array
            const valueIndex = updatedData.indexOf(e.target.value);
            if (valueIndex !== -1) {
                // menghapus data dari array
                updatedData.splice(valueIndex, 1);
            }
        }

        // update data dari state
        setMemberId1(updatedData);
    }

    function handlerAbsen(e) {
        e.preventDefault();

        const data = [];

        for (let i = 0; i < memberId1.length; i++) {
            data.push(parseInt(memberId1[i]));
        }

        if (data.length < 1) {
            alert("Data Kosong!");
            return;
        } else {
            if (confirm("Yakin mau dihapus?")) {
                router.post(`/delete-absen?length=${data.length}`, data);
                setMemberId1([]);
            }
        }
    }

    function renderListUser(user) {
        // Mengecek apakah user.id ada dalam Absne

        const isUserAlreadyExists = absen.some(
            (data) => data.user_id === user.id
        );

        if (!isUserAlreadyExists) {
            return (
                <div key={user.id}>
                    <input
                        type="checkbox"
                        id={user.name}
                        name={user.name}
                        className="rounded"
                        value={user.id}
                        onChange={(e) => handleCheckHadir(e)}
                    />
                    <label className="mx-2 capitalize" htmlFor={user.name}>
                        {user.name}
                    </label>
                </div>
            );
        }

        return null; // Return null jika user ada dalam absen
    }

    function handleCheckHadir(e) {
        const updatedData = [...memberId];

        if (e.target.checked) {
            // Jika checkbox ter Check, maka tambah data
            updatedData.push(e.target.value);
        } else {
            // jika checkbox tidak ter check, maka hapus data dari array
            // mencari index dari data yang kita inginkan dari array
            const valueIndex = updatedData.indexOf(e.target.value);
            if (valueIndex !== -1) {
                // menghapus data dari array
                updatedData.splice(valueIndex, 1);
            }
        }

        // update data dari state
        setMemberId(updatedData);
    }

    function submitHandler(e) {
        e.preventDefault();
        const data = [];
        for (let i = 0; i < memberId.length; i++) {
            const peserta = {
                user_id: parseInt(memberId[i]),
                latihan_id: latihan.id,
                last_update_by: auth.user.id,
            };
            data.push(peserta);
        }

        if (data.length < 1) {
            alert("Data Kosong!");
            return;
        } else {
            router.post(`/absen?length=${data.length}`, data);
            setMemberId([]);
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Latihan
                </h2>
            }
        >
            <Head title="Detail Latihan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl">{latihan.keterangan}</h1>
                            <p>{latihan.tanggal}</p>
                            <p>Last Update By: {latihan.last_update_by.name}</p>
                            <div className="mt-2">
                                <h1 className="text-xl">Member Hadir</h1>
                                <form className="grid" onSubmit={handlerAbsen}>
                                    <div className="grid gap-2 my-3">
                                        {absen.length > 0
                                            ? absen.map((dt) => {
                                                  return renderListPeserta(dt);
                                              })
                                            : "Belum Ada"}
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-xl"
                                    >
                                        Tidak Hadir
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl">Daftar Member</h1>
                            <form className="grid" onSubmit={submitHandler}>
                                <div className="grid gap-2 my-3">
                                    {users.map((user) => {
                                        return renderListUser(user);
                                    })}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                                >
                                    Hadir
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
