'use client'

import { useRouter } from 'next/navigation'
import {
    SearchCheck,
    TrendingUp,
    Users,
    FileText,
    Share2,
} from 'lucide-react'

const services = [
    {
        icon: <TrendingUp className="text-blue-600 w-6 h-6" />,
        title: 'PPC',
        description:
            'Our Pay-Per-Click campaigns are powered by in-depth keyword research and cutting-edge tools to maximize ROI. We prioritize understanding user intent, helping your business achieve measurable results.',
    },
    {
        icon: <SearchCheck className="text-green-600 w-6 h-6" />,
        title: 'SEO',
        description:
            'From technical SEO to content optimization, our strategies are designed to conquer search rankings. With years of experience, we ensure your website thrives on every SERP.',
    },
    {
        icon: <Users className="text-purple-600 w-6 h-6" />,
        title: 'Affiliate Marketing',
        description:
            'Affiliate marketing is at the heart of what we do. Whether building programs from scratch or optimizing existing networks, we bring expertise and passion to this essential growth channel.',
    },
    {
        icon: <FileText className="text-yellow-600 w-6 h-6" />,
        title: 'Content Services',
        description:
            'Elevate your brand with expertly crafted content that drives engagement and conversions. From blogs to email campaigns, our writing teams create impactful stories that resonate.',
    },
    {
        icon: <Share2 className="text-rose-600 w-6 h-6" />,
        title: 'Social Media',
        description:
            'Expand your digital footprint with our social media expertise. From engaging organic content to precisely targeted paid campaigns, we build lasting connections with your audience.',
    },
]

export default function TechServicesSection() {
    const router = useRouter()

    return (
        <section className="py-20 px-6 sm:px-20 bg-white">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-12">
                Unlock Growth Through Strategy: <br className="hidden sm:block" />
                Digital Marketing Services That Deliver.
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-gray-200 p-6 bg-white shadow-md hover:shadow-lg transition cursor-pointer"
                        onClick={() => router.push('/services')}
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
