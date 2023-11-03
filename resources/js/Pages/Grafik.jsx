import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "../Components/BarChart";

// Chart.register(CategoryScale);

export default function Grafik({ auth, pembayaran }) {
    const months = {};

    for (let i = 0; i < pembayaran.length; i++) {
        let date = new Date(pembayaran[i].tanggal_pembayaran);
        const month = date.toLocaleString("default", { month: "long" });
        if (!months[month]) {
            months[month] = pembayaran[i].nominal;
        } else {
            months[month] += pembayaran[i].nominal;
        }
    }

    console.log(months);

    const chartData = {
        labels: Object.keys(months),
        datasets: [
            {
                label: "Pendapatan",
                data: Object.values(months),
                borderWidth: 1,
            },
        ],
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Grafik
                </h2>
            }
        >
            <Head title="Grafik" />

            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 p-12">
                <BarChart chartData={chartData} />
            </div>
        </AuthenticatedLayout>
    );
}
