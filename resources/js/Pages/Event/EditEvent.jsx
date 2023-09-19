import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import slug from "slug";

export default function EditEvent({ auth, event }) {
    const [namaEvent, setNamaEvent] = useState(event.nama_event);
    const [tempatEvent, setTempatEvent] = useState(event.tempat_event);
    const [tanggalDeadline, setTanggalDeadline] = useState(
        event.tanggal_deadline
    );

    function submitHandler(e) {
        e.preventDefault();

        const pesertaObject = {};

        const data = {
            last_update_by: auth.user.id,
            nama_event: namaEvent,
            slug: slug(namaEvent),
            tempat_event: tempatEvent,
            tanggal_deadline: tanggalDeadline,
            peserta: pesertaObject,
        };
        console.log(data);
        router.put(`/event/${event.slug}`, data);
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Event
                </h2>
            }
        >
            <Head title="Edit Event" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="container">
                                <form
                                    className="grid gap-3"
                                    onSubmit={submitHandler}
                                >
                                    <div>
                                        <label htmlFor="namaEvent">
                                            Nama Event
                                        </label>
                                        <input
                                            className="w-full rounded-lg mt-2"
                                            type="text"
                                            id="namaEvent"
                                            name="namaEvent"
                                            placeholder="Nama Event"
                                            defaultValue={namaEvent}
                                            required
                                            onChange={(e) => {
                                                setNamaEvent(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="tempatEvent">
                                            Tempat Event
                                        </label>
                                        <input
                                            className="w-full rounded-lg mt-2"
                                            type="text"
                                            id="tempatEvent"
                                            name="tempatEvent"
                                            placeholder="Tempat Event"
                                            defaultValue={tempatEvent}
                                            required
                                            onChange={(e) => {
                                                setTempatEvent(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="tanggalDeadline">
                                            Deadline Registrasi
                                        </label>
                                        <input
                                            className="w-full rounded-lg mt-2"
                                            type="date"
                                            id="tanggalDeadline"
                                            name="tanggalDeadline"
                                            defaultValue={tanggalDeadline}
                                            required
                                            onChange={(e) => {
                                                setTanggalDeadline(
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>

                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                        type="submit"
                                    >
                                        Edit Event
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
