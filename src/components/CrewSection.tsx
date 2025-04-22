import Image from "next/image";
import Link from "next/link";

const crew = [
    { name: "Software Developers", image: "/team/dev.jpg" },
    { name: "QA Engineers", image: "/team/qa.jpg" },
    { name: "UX Designers", image: "/team/ux.jpg" },
    { name: "Data Scientists", image: "/team/data.jpg" },
    { name: "Project Managers", image: "/team/pm.jpg" },
];

export default function CrewSection() {
    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Avatars */}
                <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
                    {crew.map((person, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    width={128}
                                    height={128}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <p className="mt-3 text-sm sm:text-base font-medium text-gray-800">{person.name}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                    Let&apos;s Form Your Crew.
                </h2>

                <Link
                    href="/contact"
                    className="inline-block bg-blue-600 text-white text-sm px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Schedule a Call
                </Link>
            </div>
        </section>
    );
}
