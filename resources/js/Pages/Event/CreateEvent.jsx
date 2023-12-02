import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import slug from "slug";

export default function CreateEvent({ auth }) {
    const [namaEvent, setNamaEvent] = useState("");
    const [tempatEvent, setTempatEvent] = useState("");
    const [tanggalDeadline, setTanggalDeadline] = useState();
    const [posterUrl, setPosterUrl] = useState("");

    function submitHandler(e) {
        e.preventDefault();

        const data = {
            last_update_by: auth.user.id,
            nama_event: namaEvent,
            slug: slug(namaEvent),
            tempat_event: tempatEvent,
            tanggal_deadline: tanggalDeadline,
            poster_url: posterUrl,
        };

        console.log(data);

        router.post("/event", data);
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Event
                </h2>
            }
        >
            <Head title="Create Event" />

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
                                            required
                                            onChange={(e) => {
                                                setTanggalDeadline(
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <label className="" id="poster_url">
                                            Masukkan Foto Poster
                                        </label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            name="PosterUrl"
                                            onChange={(e) =>
                                                setPosterUrl(e.target.files[0])
                                            }
                                        />
                                    </div>

                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                        type="submit"
                                    >
                                        Create Event
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
