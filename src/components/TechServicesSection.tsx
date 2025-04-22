import { Monitor, Bug, BrainCircuit, Pencil, Smartphone, Server } from "lucide-react";

const services = [
    {
        icon: <Monitor className="text-green-500 w-6 h-6" />,
        title: "Custom Software Development",
        description: "Create custom software tailored for your unique needs, including front-end and core back-end technology.",
    },
    {
        icon: <Bug className="text-indigo-500 w-6 h-6" />,
        title: "QA and Testing",
        description: "Ensure quality and reliability through comprehensive testing practices across frontend and backend systems.",
    },
    {
        icon: <BrainCircuit className="text-yellow-500 w-6 h-6" />,
        title: "AI and Data Science",
        description: "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
    },
    {
        icon: <Pencil className="text-orange-500 w-6 h-6" />,
        title: "UX/UI Design",
        description: "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
    },
    {
        icon: <Smartphone className="text-blue-500 w-6 h-6" />,
        title: "Mobile App Development",
        description: "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
    },
    {
        icon: <Server className="text-rose-500 w-6 h-6" />,
        title: "Platform and Infrastructure",
        description: "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
    },
];

export default function TechServicesSection() {
    return (
        <section className="py-20 px-6 sm:px-20 bg-white">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-12">
                Empowering Your Digital Vision: Our <br className="hidden sm:block" />
                Comprehensive Tech Services.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-gray-200 p-6 bg-white shadow-md hover:shadow-lg transition"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
