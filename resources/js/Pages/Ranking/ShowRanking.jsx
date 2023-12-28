import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Ranking({ auth, peserta, user }) {
    console.log("peserta", peserta);
    console.log("user", user);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Ranking {user.name}
                </h2>
            }
        >
            <Head title="Detail Ranking" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-3 border border-neutral-300 rounded-md shadow-md mb-5">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl font-bold">
                                Total Poin: {user.total_skor}
                            </h1>
                        </div>
                    </div>
                </div>
                {peserta.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-3 border border-neutral-300 rounded-md shadow-md mb-5"
                        >
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <p className="text-xl font-bold uppercase">
                                        {data.event.nama_event}
                                    </p>
                                    <p className="text-lg">
                                        Keterangan: {data.keterangan}
                                    </p>
                                    <p className="text-lg">
                                        Poin diperoleh: {data.skor}
                                    </p>
                                    <p>Piagam/Medali:</p>
                                    <div className="my-2 flex flex-row gap-5">
                                        {data.foto_piagam
                                            ? data.foto_piagam.map(
                                                  (dt, index) => {
                                                      return (
                                                          <div className="my-2">
                                                              <img
                                                                  key={index}
                                                                  className="rounded-t-lg w-64"
                                                                  src={`/${dt}`}
                                                                  alt={
                                                                      data.keterangan
                                                                  }
                                                              />
                                                          </div>
                                                      );
                                                  }
                                              )
                                            : "Foto Piagam/Medali Tidak Ada"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
}
