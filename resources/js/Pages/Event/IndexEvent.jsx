import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function IndexEvent({ auth, event }) {
    const date = new Date();

    // Funtion untuk merender button untuk user
    function checkRequest(data) {
        if (data.peserta.length > 0) {
            const isUserInEvent = data.peserta.find(
                (peserta) => peserta.user_id === auth.user.id
            );
            if (isUserInEvent) {
                return (
                    <button
                        disabled
                        className={`${
                            isUserInEvent.approve
                                ? "bg-green-600"
                                : "bg-slate-600"
                        }  cursor-not-allowed text-white font-bold px-5 py-2 rounded-lg`}
                    >
                        {isUserInEvent.approve ? "Joined" : "Requested"}
                    </button>
                );
            }
        }
        return (
            <button
                onClick={(e) => handleRequestJoin(e, data)}
                className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg"
            >
                Request Join
            </button>
        );
    }

    function handleDelete(e, slug) {
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/event/${slug}`);
        }
    }

    function handleRequestJoin(e, event) {
        e.preventDefault();
        const data = {
            user_id: auth.user.id,
            event_id: event.id,
            approve: false,
            approve_by: "",
            skor: 0,
            keterangan: "",
        };

        router.post("/peserta", data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Event
                </h2>
            }
        >
            <Head title="Event" />

            <div className="py-12">
                {auth.user.roles == "USER" ? (
                    ""
                ) : (
                    <div className="py-2">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <Link
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                                        href="/event/create"
                                    >
                                        Create Event
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                {event.length > 0
                                    ? event.map((data, key) => {
                                          const eventDate = new Date(
                                              data.tanggal_deadline
                                          );
                                          return (
                                              <div
                                                  key={key}
                                                  className="my-3 grid grid-rows gap-2 bg-slate-300 p-4 rounded-md"
                                              >
                                                  <p>{data.nama_event}</p>
                                                  <p>
                                                      Lokasi:{" "}
                                                      {data.tempat_event}
                                                  </p>
                                                  <p>
                                                      Deadline Registrasi:{" "}
                                                      {data.tanggal_deadline}
                                                  </p>
                                                  {eventDate < date ? (
                                                      <p className="font-bold text-red-600">
                                                          Expired!
                                                      </p>
                                                  ) : (
                                                      ""
                                                  )}
                                                  {auth.user.roles == "USER" ? (
                                                      <div>
                                                          {/* Funtion untuk
                                                          mengecek button mana
                                                          yang perlu di render */}
                                                          {checkRequest(data)}
                                                      </div>
                                                  ) : (
                                                      <div className="flex gap-2">
                                                          <Link
                                                              className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg"
                                                              href={`/event/${data.slug}`}
                                                          >
                                                              Lihat
                                                          </Link>
                                                          <Link
                                                              className="bg-green-600 text-white font-bold px-5 py-2 rounded-lg"
                                                              href={`/event/${data.slug}/edit`}
                                                          >
                                                              Edit
                                                          </Link>
                                                          <span
                                                              className="cursor-pointer bg-red-600 text-white font-bold px-5 py-2 rounded-lg"
                                                              onClick={(
                                                                  event
                                                              ) =>
                                                                  handleDelete(
                                                                      event,
                                                                      data.slug
                                                                  )
                                                              }
                                                          >
                                                              Hapus
                                                          </span>
                                                      </div>
                                                  )}
                                              </div>
                                          );
                                      })
                                    : "No Event"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
