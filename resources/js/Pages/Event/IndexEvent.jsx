import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function IndexEvent({ auth, event }) {
    function checkRequest(data) {
        let enlisted = false;

        // Mengecek Jika data peserta sudah ada atau tidak
        if (data.peserta.length > 0) {
            for (let i = 0; i < data.peserta.length; i++) {
                if (data.peserta[i].user_id == auth.user.id) {
                    enlisted = true;
                }
            }
        }
        if (enlisted) {
            return (
                <button
                    disabled
                    className="bg-slate-600 cursor-not-allowed text-white font-bold px-5 py-2 rounded-lg"
                >
                    Requested
                </button>
            );
        } else {
            return (
                <button
                    onClick={(e) => handleRequestJoin(e, data.slug)}
                    className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg"
                >
                    Request Join
                </button>
            );
        }
    }

    function handleDelete(e, slug) {
        e.preventDefault();
        if (confirm("Yakin mau dihapus?")) {
            router.delete(`/event/${slug}`);
        }
    }

    function handleRequestJoin(e, slug) {
        e.preventDefault();
        const data = {
            user_id: auth.user.id,
            approve: false,
            approve_by: "",
            skor: 0,
            keterangan: "",
        };
        router.put(`/event/${slug}?join=true`, data);
        // router.get(`/join-event?event_id=${id}`, data);
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
