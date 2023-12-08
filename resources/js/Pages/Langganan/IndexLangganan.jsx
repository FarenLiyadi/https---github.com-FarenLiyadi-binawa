import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function IndexLangganan({ auth, users, pembayaran }) {
    let deactivated = false;

    function checkStatus() {
        if (pembayaran.length > 0) {
            const today = new Date();
            const tanggal_akhir = new Date(pembayaran[0].tanggal_akhir);
            // Jika Akun User Tidak Aktif
            if (!auth.user.active) {
                // Belum Lewat Tanggal Member
                // berarti di nonaktifkan oleh Admin
                if (tanggal_akhir > today) {
                    deactivated = true;
                }
            }
        }
    }

    function handleActivate(e) {
        e.preventDefault();
        if (deactivated) {
            alert("Akun anda dinonaktifkan, silahkan hubungi Admin");
        } else {
            router.get("/pembayaran/create");
        }
    }

    function handleLangganan(e, value, user_id) {
        e.preventDefault();
        const data = {
            user_id: user_id,
            value: value,
        };

        router.post(`/langganan`, data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Langganan
                </h2>
            }
        >
            <Head title="Langganan" />

            <div className="py-12">
                {auth.user.roles == "USER" ? (
                    <>
                        {checkStatus()}
                        <div className="overflow-x-auto px-4">
                            <div className="inline-block min-w-full py-2 px-3">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border font-medium border-neutral-500">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase border-r border-neutral-500 "
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase border-r border-neutral-500"
                                                >
                                                    Status
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
                                            <tr
                                                className={`border hover:bg-neutral-400 border-neutral-500 `}
                                            >
                                                <td className="whitespace-nowrap px-6 py-4 font-medium border-r border-neutral-500">
                                                    {auth.user.name}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 border-r border-neutral-500">
                                                    <p>
                                                        {auth.user.active ? (
                                                            <span className="text-green-400">
                                                                Active
                                                            </span>
                                                        ) : (
                                                            <span className="text-red-500">
                                                                Not Active
                                                            </span>
                                                        )}
                                                    </p>
                                                </td>

                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                        {auth.user.active ? (
                                                            <div className="flex gap-3">
                                                                <button
                                                                    className="bg-slate-500 hover:bg-slate-700 py-1 px-3 my-1 text-white cursor-not-allowed rounded-md"
                                                                    disabled
                                                                >
                                                                    Active
                                                                </button>
                                                                <button
                                                                    onClick={() =>
                                                                        router.get(
                                                                            "/pembayaran/create"
                                                                        )
                                                                    }
                                                                    className="bg-yellow-600 hover:bg-yellow-700 py-1 px-3 my-1 text-white rounded-md"
                                                                >
                                                                    Tambah
                                                                    Pembayaran
                                                                    Lagi
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div className="">
                                                                <button
                                                                    onClick={
                                                                        handleActivate
                                                                    }
                                                                    className="bg-green-500 hover:bg-green-700 py-1 px-3 my-1 text-white rounded-md"
                                                                >
                                                                    Activate
                                                                </button>
                                                            </div>
                                                        )}

                                                        {deactivated ? (
                                                            <div>
                                                                <p className="text-red-500">
                                                                    Akun
                                                                    dinonaktifkan
                                                                    oleh admin!
                                                                </p>
                                                                <p>
                                                                    Silahkan
                                                                    hubungi
                                                                    admin
                                                                </p>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className=" flex flex-col">
                        <div className="overflow-x-auto px-4">
                            <div className="inline-block min-w-full py-2 px-3">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border font-medium border-neutral-500">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase border-r border-neutral-500"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-4 uppercase border-r border-neutral-500"
                                                >
                                                    Status
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
                                            {users.data.map((user, index) => {
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
                                                            {user.name !== null
                                                                ? user.name
                                                                : "NOT SET"}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 border-r border-neutral-500">
                                                            <p>
                                                                {user.active ? (
                                                                    <span className="text-green-400 font-bold">
                                                                        Active
                                                                    </span>
                                                                ) : (
                                                                    <span className="text-red-500 font-bold">
                                                                        Not
                                                                        Active
                                                                    </span>
                                                                )}
                                                            </p>
                                                        </td>

                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            <div className="flex flex-col gap-3 items-center justify-center">
                                                                {user.active ? (
                                                                    <button
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            handleLangganan(
                                                                                e,
                                                                                false,
                                                                                user.id
                                                                            )
                                                                        }
                                                                        className="bg-red-500 hover:bg-red-700 py-1 px-3 my-1 text-white rounded-md"
                                                                    >
                                                                        Disabled
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            handleLangganan(
                                                                                e,
                                                                                true,
                                                                                user.id
                                                                            )
                                                                        }
                                                                        className="bg-green-500 hover:bg-green-700 py-1 px-3 my-1 text-white rounded-md"
                                                                    >
                                                                        Activate
                                                                        Member
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-center pt-10">
                            <Pagination class="mt-6" links={users.meta} />
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
