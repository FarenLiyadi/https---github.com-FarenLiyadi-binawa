import BarChart from "../Components/BarChart";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";

export default function Dashboard({
    auth,
    users,
    pembayaran,
    biodata,
    pertandingan,
    total_member,
    total_member_active,
    pembayaran_graph,
    pengeluaran_graph,
}) {
    console.log(pembayaran);
    const [flag, setFlag] = useState(false);
    const today = new Date();
    const ids = [];
    let pendapatan = 0;
    let pengeluaran = 0;
    let this_month = today.toLocaleDateString("id-ID", {
        month: "long",
    });

    function subtractDays(date, days) {
        date.setDate(date.getDate() + days);

        return date;
    }

    const usia = () => {
        let dob = new Date(biodata[0].tanggal_lahir);
        let month_diff = Date.now() - dob;

        //convert the calculated difference in date format
        let age_dt = new Date(month_diff);

        //extract year from date
        let year = age_dt.getUTCFullYear();

        //now calculate the age of the user
        let age = Math.abs(year - 1970);
        return age;
    };

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

    // Graph Pembayaran
    if (pembayaran_graph) {
        for (let i = 0; i < pembayaran_graph.length; i++) {
            // print(pembayaran_graph[i]);
            let date = new Date(pembayaran_graph[i].tanggal_pembayaran);
            const month_pembayaran = date.toLocaleDateString("id-ID", {
                month: "long",
            });
            if (this_month == month_pembayaran) {
                pendapatan += pembayaran_graph[i].nominal;
            }
        }
    }

    // Graph Pengeluaran
    if (pengeluaran_graph) {
        for (let i = 0; i < pengeluaran_graph.length; i++) {
            let date = new Date(pengeluaran_graph[i].tanggal_pengeluaran);
            const month_pengeluaran = date.toLocaleDateString("id-ID", {
                month: "long",
            });
            if (this_month == month_pengeluaran) {
                pengeluaran += pengeluaran_graph[i].nominal;
            }
        }
    }

    const chartData = {
        labels: [this_month],
        datasets: [
            {
                label: "Pendapatan",
                data: [pendapatan],
                borderWidth: 1,
            },
            {
                label: "Pengeluaran",
                data: [pengeluaran],
                borderWidth: 1,
            },
        ],
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight uppercase">
                    Dashboard{" "}
                    {auth.user.roles == "ADMIN"
                        ? `ADMIN ${auth.user.name}`
                        : auth.user.name}
                </h2>
            }
        >
            <Head title="Dashboard" />

            {auth.user.roles == "USER" ? (
                <div className="flex flex-col md:flex-row">
                    <div className="px-5 flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                                <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                                    <div className="flex flex-row items-center">
                                        <div className="flex-shrink pr-4">
                                            <div className="rounded-full p-5 bg-green-600">
                                                <i className="fa fa-wallet fa-2x fa-inverse"></i>
                                            </div>
                                        </div>
                                        <div className="flex-1 text-right md:text-center">
                                            <h5 className="font-bold uppercase text-gray-600">
                                                Member Sejak
                                            </h5>
                                            <h3 className="font-bold text-2xl">
                                                {auth.user.created_at
                                                    ? new Date(
                                                          auth.user.created_at
                                                      ).toLocaleDateString(
                                                          "id-ID",
                                                          {
                                                              //   weekday: "long",
                                                              day: "2-digit",
                                                              month: "long",
                                                              year: "numeric",
                                                          }
                                                      )
                                                    : ""}
                                                <span className="text-green-500">
                                                    <i className="fas fa-caret-up"></i>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="w-full md:w-1/2 xl:w-1/3 p-6"
                                href="/ranking"
                            >
                                <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                                    <div className="flex flex-row items-center">
                                        <div className="flex-shrink pr-4">
                                            <div className="rounded-full p-5 bg-pink-600">
                                                <i className="fas fa-users fa-2x fa-inverse"></i>
                                            </div>
                                        </div>
                                        <div className="flex-1 text-right md:text-center">
                                            <h5 className="font-bold uppercase text-gray-600">
                                                Total Poin
                                            </h5>
                                            <h3 className="font-bold text-2xl">
                                                {auth.user.total_skor}
                                                <span className="text-pink-500">
                                                    <i className="fas fa-exchange-alt"></i>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a
                                className="w-full md:w-1/2 xl:w-1/3 p-6"
                                href={`/ranking-detail?id=${auth.user.id}`}
                            >
                                <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                                    <div className="flex flex-row items-center">
                                        <div className="flex-shrink pr-4">
                                            <div className="rounded-full p-5 bg-yellow-600">
                                                <i className="fas fa-user-plus fa-2x fa-inverse"></i>
                                            </div>
                                        </div>
                                        <div className="flex-1 text-right md:text-center">
                                            <h5 className="font-bold uppercase text-gray-600">
                                                Jumlah Pertandingan
                                            </h5>
                                            <h3 className="font-bold text-3xl">
                                                {pertandingan
                                                    ? pertandingan.length
                                                    : "0"}
                                                <span className="text-yellow-600">
                                                    <i className="fas fa-caret-up"></i>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-1/2   p-6">
                                <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                                    <div className="flex flex-col lg:flex-row items-center">
                                        <div className="flex-shrink">
                                            <img
                                                src={
                                                    biodata.length > 0
                                                        ? biodata[0].pas_foto
                                                            ? biodata[0]
                                                                  .pas_foto
                                                            : "/no-photo.png"
                                                        : "/no-photo.png"
                                                }
                                                className="w-60 rounded-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-1 text-right md:text-center">
                                            <h3 className="font-bold text-3xl uppercase">
                                                {auth.user.name}
                                            </h3>
                                            <h3 className="font-bold text-3xl uppercase">
                                                {biodata.length > 0
                                                    ? usia() + " Tahun"
                                                    : "NOT SET"}{" "}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="pb-10">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="mt-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="flex flex-wrap">
                                <a
                                    className="w-full md:w-1/2 xl:w-1/3 p-6"
                                    href="/langganan"
                                >
                                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-green-600">
                                                    <i className="fa fa-wallet fa-2x fa-inverse"></i>
                                                </div>
                                            </div>
                                            <div className="flex-1 text-right md:text-center">
                                                <h5 className="font-bold uppercase text-gray-600">
                                                    Jumlah Member Aktif
                                                </h5>
                                                <h3 className="font-bold text-2xl">
                                                    {total_member_active.length}
                                                    <span className="text-green-500">
                                                        <i className="fas fa-caret-up"></i>
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="w-full md:w-1/2 xl:w-1/3 p-6"
                                    href="/langganan"
                                >
                                    <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-pink-600">
                                                    <i className="fas fa-users fa-2x fa-inverse"></i>
                                                </div>
                                            </div>
                                            <div className="flex-1 text-right md:text-center">
                                                <h5 className="font-bold uppercase text-gray-600">
                                                    total MEmber
                                                </h5>
                                                <h3 className="font-bold text-2xl">
                                                    {total_member.length}
                                                    <span className="text-pink-500">
                                                        <i className="fas fa-exchange-alt"></i>
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="w-full md:w-1/2 xl:w-1/3 p-6"
                                    href="/event"
                                >
                                    <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                                        <div className="flex flex-row items-center">
                                            <div className="flex-shrink pr-4">
                                                <div className="rounded-full p-5 bg-yellow-600">
                                                    <i className="fas fa-user-plus fa-2x fa-inverse"></i>
                                                </div>
                                            </div>

                                            <div className="flex-1 text-right md:text-center">
                                                <h5 className="font-bold uppercase text-gray-600 ">
                                                    Jumlah Pertandingan
                                                </h5>
                                                <h3 className="font-bold text-3xl">
                                                    {pertandingan.length}
                                                    <span className="text-yellow-600">
                                                        <i className="fas fa-caret-up"></i>
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full p-6">
                                    <div className="w-full bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                                        <h1 className="text-center text-2xl">
                                            REMINDER AKTIVASI MEMBER H-3
                                        </h1>
                                        <div className="flex flex-col lg:flex-row items-center w-full">
                                            <div className=" flex flex-col w-full">
                                                <div className="overflow-x-auto ">
                                                    <div className="inline-block min-w-full py-2 px-3">
                                                        <div className="overflow-hidden">
                                                            <table className="min-w-full text-left text-sm font-light">
                                                                <thead className="border-b font-medium dark:border-neutral-500">
                                                                    <tr>
                                                                        <th
                                                                            scope="col"
                                                                            className="px-6 py-4 uppercase"
                                                                        >
                                                                            Nama
                                                                            User
                                                                        </th>
                                                                        <th
                                                                            scope="col"
                                                                            className="px-6 py-4 uppercase"
                                                                        >
                                                                            Nama
                                                                        </th>

                                                                        <th
                                                                            scope="col"
                                                                            className="text-center px-6 py-4 uppercase"
                                                                        >
                                                                            Tanggal
                                                                            Berakhir
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {pembayaran.map(
                                                                        (
                                                                            e,
                                                                            index
                                                                        ) => {
                                                                            const tanggal_reminder =
                                                                                subtractDays(
                                                                                    new Date(),
                                                                                    3
                                                                                );
                                                                            return (
                                                                                <tr
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    className={`border-b hover:bg-neutral-400 ${
                                                                                        tanggal_reminder >
                                                                                        new Date(
                                                                                            e.tanggal_akhir
                                                                                        )
                                                                                            ? ""
                                                                                            : "hidden"
                                                                                    }  dark:border-neutral-500  ${
                                                                                        (index +
                                                                                            1) %
                                                                                            2 ==
                                                                                        0
                                                                                            ? "bg-neutral-200"
                                                                                            : "bg-white"
                                                                                    }`}
                                                                                >
                                                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                                                        {
                                                                                            e
                                                                                                .user
                                                                                                .email
                                                                                        }
                                                                                    </td>
                                                                                    <td className="whitespace-nowrap px-6 py-4">
                                                                                        {
                                                                                            e
                                                                                                .user
                                                                                                .name
                                                                                        }
                                                                                    </td>
                                                                                    <td className="whitespace-nowrap px-6 py-4 text-center">
                                                                                        {new Date(
                                                                                            e.tanggal_akhir
                                                                                        ).toLocaleDateString(
                                                                                            "id-ID",
                                                                                            {
                                                                                                weekday:
                                                                                                    "long",
                                                                                                day: "2-digit",
                                                                                                month: "long",
                                                                                                year: "numeric",
                                                                                            }
                                                                                        )}
                                                                                    </td>
                                                                                </tr>
                                                                            );
                                                                        }
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {auth.user.roles == "ADMIN" ? (
                                        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 p-12">
                                            <BarChart chartData={chartData} />
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
