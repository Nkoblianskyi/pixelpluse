// app/services/[slug]/page.tsx
'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Image from 'next/image';

export default function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    const service = services.find((s) => s.slug === slug);

    if (!service) return notFound();

    return (
        <section className="max-w-screen-md mx-auto px-6 py-20 text-gray-800">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">{service.title}</h1>

            <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={800}
                className="rounded-lg shadow mb-8"
            />

            <div className="prose prose-lg max-w-none mb-10 text-gray-800">
                {service.description && <p>{service.description}</p>}
            </div>

            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                {service.content?.split('\n').map((para, i) => (
                    <p key={`content-${i}`}>{para}</p>
                ))}
            </div>

            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                {service.content2?.split('\n').map((para, i) => (
                    <p key={`content2-${i}`}>{para}</p>
                ))}
            </div>

            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                {service.content3?.split('\n').map((para, i) => (
                    <p key={`content3-${i}`}>{para}</p>
                ))}
            </div>
        </section>
    );
}
