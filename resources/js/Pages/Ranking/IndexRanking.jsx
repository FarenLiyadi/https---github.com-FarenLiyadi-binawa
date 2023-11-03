import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Ranking({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Ranking
                </h2>
            }
        >
            <Head title="Ranking" />

            <div className="py-6">
                {users.map((user, index) => {
                    return (
                        <div
                            key={index}
                            className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-3"
                        >
                            <div
                                className={` overflow-hidden shadow-sm sm:rounded-lg ${
                                    user.id == auth.user.id
                                        ? "bg-slate-300"
                                        : "bg-white"
                                }`}
                            >
                                <div className="p-6 text-gray-900">
                                    <p className="capitalize text-xl">
                                        <span className="mx-1">
                                            {index + 1}.
                                        </span>
                                        {user.name}
                                    </p>
                                    <p className="font-bold text-slate-400">
                                        <span>Poin </span>
                                        {user.total_skor}
                                    </p>

                                    <Link
                                        href={`/ranking-detail?id=${user.id}`}
                                    >
                                        Lihat
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
}
