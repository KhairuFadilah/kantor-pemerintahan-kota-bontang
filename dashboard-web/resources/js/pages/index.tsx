import { useState } from "react";
import { Head } from "@inertiajs/react";
import CountUp from "react-countup";
import CardNav, { CardNavItem } from "@/components/card-nav";
import '../../css/styles.css';
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";

type Kantor = {
    id: number;
    nama: string;
    alamat: string;
};

const items: CardNavItem[] = [
    {
        label: "Need Anything?",
        bgColor: "#111827",
        textColor: "#ffffff",
        links: [
            { label: "Contact Me", href: "https://instagram.com/fadilah_172", ariaLabel: "Contact" },
        ],
    },
    {
        label: "Fullscreen Map",
        bgColor: "#0ea5e9",
        textColor: "#ffffff",
        links: [
            { label: "Click Here", href: "https://khairufadilah.github.io/kantor-pemerintahan-kota-bontang/", ariaLabel: "Fullscreen Map" },
        ],
    },
    {
        label: "YouTube Channel",
        bgColor: "#ef4444",
        textColor: "#ffffff",
        links: [
            { label: "Click Here", href: "https://www.youtube.com/@UnmulKhairu", ariaLabel: "YouTube Channel" },
        ],
    },
];


export default function Dashboard({ kantor }: { kantor: Kantor[] }) {
    const [open, setOpen] = useState(false);
    const totalKantor = kantor.length;
    const totalKecamatan = kantor.filter(k => /camat/i.test(k.nama)).length;
    const totalKelurahan = kantor.filter(k => /lurah/i.test(k.nama)).length;

    return (
        <>
            <Head title="Dashboard Persebaran Kantor Pemerintahan Kota Bontang">
                <meta charSet="UTF-8" />
            </Head>

            <CardNav
                logo="/logo.svg"
                items={items}
                baseColor="#ffffff"
                menuColor="#111827"
                buttonBgColor="#111827"
                buttonTextColor="#ffffff"
            />

            {/* Main Content */}
            <div className="container mx-auto mt-6 grid grid-cols-3 auto-rows-min gap-4 md:grid-cols-2 pt-20">
                {/* Peta */}
                <div className="p-4 shadow rounded col-span-3 bg-red-300">
                    <h2 className="text-lg text-black font-semibold mb-4">Peta Interaktif</h2>
                    <iframe
                        src="https://khairufadilah.github.io/kantor-pemerintahan-kota-bontang/#13/0.0907/117.4435"
                        className="w-full h-96 border rounded"
                        allowFullScreen
                    />
                </div>
                <section className="mx-auto max-w-6xl px-4 mt-6 mb-6 grid grid-cols-3 gap-6 col-span-3 items-start text-black">
                    <StatCard label="Total Kantor" value={totalKantor} />
                    <StatCard label="Kantor Kecamatan" value={totalKecamatan} />
                    <StatCard label="Kantor Kelurahan" value={totalKelurahan} />
                </section>
                {/* Tabel Data Kantor */}
                <div className="bg-white p-4 col-span-3 row-span-2 border rounded">
                    <h2 className="text-lg text-black font-semibold mb-4">Data Kantor Pemerintahan</h2>
                    <Table className="text-black">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-black">ID</TableHead>
                                <TableHead className="text-black">Nama</TableHead>
                                <TableHead className="text-black">Alamat</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {kantor.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.nama}</TableCell>
                                    <TableCell>{item.alamat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}

function StatCard({ label, value }: { label: string; value: number }) {
    return (
        <div className="self-start h-auto rounded-2xl shadow bg-white px-5 py-4 text-center">
            <p className="text-sm text-gray-500">{label}</p>
            <div className="text-3xl font-bold mt-1">
                <CountUp start={0} end={value} duration={1.2} separator="," />
            </div>
        </div>
    );
}
