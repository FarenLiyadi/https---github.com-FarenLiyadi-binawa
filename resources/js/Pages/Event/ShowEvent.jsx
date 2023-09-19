import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function ShowEvent({ auth, event }) {
    console.log(event.peserta);

    function handleDelete(e, slug) {
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/event/${slug}`);
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
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h1 className="text-xl">{event.nama_event}</h1>
                                <p>{event.tempat_event}</p>
                                <p>{event.tanggal_deadline}</p>
                                {event.peserta.length > 0 ? "ADA" : "Tidak Ada"}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
