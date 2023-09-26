import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function ShowEvent({ auth, event, users }) {
    const [memberId, setMemberId] = useState([]);

    console.log(users);

    function renderListUser(user) {
        // Mengecek apakah user.id ada dalam event.peserta
        const isUserInEvent = event.peserta.some(
            (peserta) => peserta.user_id === user.id
        );

        if (!isUserInEvent) {
            return (
                <div key={user.id}>
                    <input
                        type="checkbox"
                        id={user.name}
                        name={user.name}
                        className="rounded"
                        value={user.id}
                        onChange={(e) => handleCheck(e)}
                    />
                    <label className="mx-2 capitalize" htmlFor={user.name}>
                        {user.name}
                    </label>
                </div>
            );
        }

        return null; // Return null jika user ada dalam event.peserta
    }

    function renderListPeserta() {
        // Untuk Menampung render elemen
        const pesertaList = [];

        for (let i = 0; i < event.peserta.length; i++) {
            const peserta = event.peserta[i];
            if (peserta.approve) {
                const event_id = event.peserta[i].id;
                pesertaList.push(
                    <li key={i} className="capitalize ">
                        <span>{peserta.user.name}</span>
                        <span className="mx-2 font-bold">{peserta.skor}</span>
                        <Link
                            href={`/peserta/${peserta.id}/edit`}
                            className="bg-yellow-500 hover:bg-yellow-700 text-sm text-white  px-4 ms-2 me-1 rounded-md"
                        >
                            Beri Skor
                        </Link>
                        {peserta.skor > 0 ? (
                            ""
                        ) : (
                            <button
                                onClick={(e) =>
                                    handleDeletePeserta(e, event_id)
                                }
                                className="bg-red-500 hover:bg-red-700 text-sm text-white  px-4  rounded-md"
                            >
                                Delete
                            </button>
                        )}
                    </li>
                );
            }
        }

        return <>{pesertaList}</>;
    }

    function renderListReq() {
        // Untuk Menampung render elemen
        const reqList = [];

        for (let i = 0; i < event.peserta.length; i++) {
            let event_id = event.peserta[i].id;
            if (!event.peserta[i].approve) {
                console.log(event.peserta[i]);
                reqList.push(
                    <li key={i} className="capitalize pb-3 ">
                        <span>{event.peserta[i].user.name}</span>

                        <button
                            onClick={(e) => handleApprove(e, event.peserta[i])}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white  px-4 ms-2 me-1 rounded-md"
                        >
                            Approve
                        </button>
                        <button
                            onClick={(e) =>
                                handleDeletePeserta(e, event.peserta[i].id)
                            }
                            className="bg-red-500 hover:bg-red-700 text-white text-sm  px-4  rounded-md"
                        >
                            Reject
                        </button>
                    </li>
                );
            }
        }
        return <>{reqList}</>;
    }

    function handleCheck(e) {
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

    function handleApprove(e, peserta) {
        e.preventDefault();

        const data = {
            user_id: peserta.user_id,
            event_id: peserta.event_id,
            approve_by: auth.user.id,
            approve: true,
            skor: parseInt(peserta.skor),
            keterangan: peserta.keterangan,
        };

        router.put(`/peserta/${peserta.id}`, data);
    }

    function handleDeletePeserta(e, id) {
        // console.log(id);
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/peserta/${id}`);
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        const data = [];
        for (let i = 0; i < memberId.length; i++) {
            const peserta = {
                user_id: parseInt(memberId[i]),
                event_id: event.id,
                approve: true,
                approve_by: auth.user.id,
                skor: 0,
                keterangan: "",
            };
            data.push(peserta);
        }

        if (data.length < 1) {
            alert("Data Kosong!");
            return;
        } else {
            router.post(`/peserta?multi=${data.length}`, data);
            setMemberId([]);
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Event
                </h2>
            }
        >
            <Head title="Detail Event" />

            {auth.user.roles == "ADMIN" ? (
                ""
            ) : (
                <>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-2">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h1 className="text-xl">{event.nama_event}</h1>
                                <p>{event.tempat_event}</p>
                                <p>{event.tanggal_deadline}</p>
                                <div className="mt-2">
                                    <h1 className="text-xl mb-2">
                                        Member Terdaftar
                                    </h1>
                                    {event.peserta.length > 0
                                        ? renderListPeserta()
                                        : "Belum Ada"}
                                </div>
                                <div className="mt-2">
                                    <h1 className="text-xl mb-2">
                                        Request to join
                                    </h1>
                                    {event.peserta.length > 0
                                        ? renderListReq()
                                        : "Belum Ada"}
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
                                        Masukan Member
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </AuthenticatedLayout>
    );
}
