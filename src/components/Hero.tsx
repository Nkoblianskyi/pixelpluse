import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: 'TechSynergy | PixelPulse – Innovate, Create, Elevate',
    description: 'Unlocking Possibilities, One Code at a Time. Explore our cutting-edge tech services including Front-end, Back-end, and UI/UX Design.',
    openGraph: {
        title: 'TechSynergy | PixelPulse',
        description: 'Unlocking Possibilities, One Code at a Time',
        url: 'https://pixelpulse.com',
        siteName: 'PixelPulse',
        images: [
            {
                url: '/images/og-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'TechSynergy Hero Image',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Hero() {
    return (
        <section className="relative bg-white py-4 px-6 md:px-4">
            <Script id="ld-hero-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "TechSynergy | PixelPulse",
                    "description": "Unlocking Possibilities, One Code at a Time",
                    "url": "https://pixelpulse.com",
                    "publisher": {
                        "@type": "Organization",
                        "name": "PixelPulse",
                        "url": "https://pixelpulse.com",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://pixelpulse.com/logo.png"
                        }
                    }
                })}
            </Script>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-sm text-yellow-500 font-semibold uppercase mb-2">Tech Services</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        TechSynergy: <br />
                        Innovate, <br />
                        Create, Elevate
                    </h1>
                    <p className="text-gray-600 text-base mb-6">
                        Unlocking Possibilities, One Code at a Time
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-full hover:bg-green-700 transition"
                    >
                        Contact Us
                    </Link>
                </div>

                <div className="relative w-full h-80 md:h-[420px] rounded-3xl overflow-hidden">
                    <Image
                        src="/images/hero.png"
                        alt="Team working"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}