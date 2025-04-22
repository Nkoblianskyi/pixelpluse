// app/services/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/data/services'

export default function ServicesPage() {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
                Our Services
            </h1>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h2>
                            <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
