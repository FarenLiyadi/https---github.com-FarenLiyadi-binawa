import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard({ auth, users, pembayaran }) {
    const [flag, setFlag] = useState(false);
    const today = new Date();
    const ids = [];

    useEffect(() => {
        const flag = localStorage.getItem("flag");

        // First time Visiting website
        if (!flag) {
            for (let i = 0; i < pembayaran.length; i++) {
                let user = pembayaran[i].user;
                const tanggal_akhir = new Date(pembayaran[i].tanggal_akhir);

                if (user.active) {
                    if (tanggal_akhir < today) {
                        console.log("Masa Member Lewat");
                        ids.push(user.id);
                    }
                }
            }

            localStorage.setItem("flag", true);
            setFlag(true);

            router.post(`/membership?length=${ids.length}`, ids);
        }
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in as {auth.user.roles}
                        </div>
                    </div>
                </div>
            </div>

            {auth.user.roles == "USER" ? (
                ""
            ) : (
                <div className="">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <button>Create Event</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
