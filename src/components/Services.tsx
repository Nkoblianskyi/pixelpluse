import Link from "next/link";
import { Monitor, Code2, Palette } from "lucide-react";

export default function Services() {
    const services = [
        {
            href: "/services/frontend",
            icon: <Monitor size={36} />,
            title: "Front-end",
            description: "We craft pixel-perfect interfaces that look great and run smoothly across devices.",
        },
        {
            href: "/services/backend",
            icon: <Code2 size={36} />,
            title: "Back-end",
            description: "We build robust server-side logic and APIs to power your applications securely and efficiently.",
        },
        {
            href: "/services/design",
            icon: <Palette size={36} />,
            title: "UI/UX Design",
            description: "We design intuitive user experiences and beautiful, modern interfaces with your users in mind.",
        },
    ];

    return (
        <section className="py-20 px-6 sm:px-20 bg-white">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-12">
                Our Multidisciplinary Services
            </h2>
            <div className="grid gap-8 sm:grid-cols-3 max-w-screen-xl mx-auto">
                {services.map((service, index) => (
                    <Link
                        href={service.href}
                        key={index}
                        className="block rounded-xl shadow-md p-6 text-center bg-white hover:shadow-xl hover:scale-[1.02] transition"
                    >
                        <div className="text-blue-600 mb-4 flex justify-center">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
