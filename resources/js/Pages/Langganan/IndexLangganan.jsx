import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function IndexLangganan({ auth, users, pembayaran }) {
    let deactivated = false;

    function checkStatus() {
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

    checkStatus();

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
                    <div className="py-2">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <h1 className="text-xl font-bold">
                                        Langganan
                                    </h1>
                                    <p className="capitalize">
                                        {auth.user.name}
                                    </p>
                                    <p>
                                        Status:{" "}
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

                                    {auth.user.active ? (
                                        <button
                                            className="bg-slate-500 hover:bg-slate-700 py-1 px-3 my-1 text-white cursor-not-allowed rounded-md"
                                            disabled
                                        >
                                            Active
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleActivate}
                                            className="bg-green-500 hover:bg-green-700 py-1 px-3 my-1 text-white rounded-md"
                                        >
                                            Activate
                                        </button>
                                    )}

                                    {deactivated ? (
                                        <div>
                                            <p className="text-red-500">
                                                Akun dinonaktifkan oleh admin!
                                            </p>
                                            <p>Silahkan hubungi admin</p>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="py-2">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">
                                        <h1 className="text-xl font-bold">
                                            Users
                                        </h1>
                                        {users.map((user, index) => {
                                            return (
                                                <div
                                                    className=" my-2 "
                                                    key={index}
                                                >
                                                    <div>
                                                        <p className="capitalize">
                                                            {user.name}
                                                        </p>
                                                        <p>
                                                            Status Member:{" "}
                                                            {user.active ? (
                                                                <span className="text-green-400 font-bold">
                                                                    Active
                                                                </span>
                                                            ) : (
                                                                <span className="text-red-500 font-bold">
                                                                    Not Active
                                                                </span>
                                                            )}
                                                        </p>
                                                        {user.active ? (
                                                            <button
                                                                onClick={(e) =>
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
                                                                onClick={(e) =>
                                                                    handleLangganan(
                                                                        e,
                                                                        true,
                                                                        user.id
                                                                    )
                                                                }
                                                                className="bg-green-500 hover:bg-green-700 py-1 px-3 my-1 text-white rounded-md"
                                                            >
                                                                Activate Member
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
