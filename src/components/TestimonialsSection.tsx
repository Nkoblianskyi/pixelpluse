'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        name: "Mary Johnson",
        title: "CEO of TechCraft Solutions",
        quote: "Exceptional Solutions, Exceeded Expectations!",
        content:
            "Working with PixelPulse has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that exceeded expectations.",
        icon: "🌟",
    },
    {
        name: "Mark Williams",
        title: "COO of InnovateNow Inc",
        quote: "Transformed Our Business with Innovative Tech!",
        content:
            "Their custom software streamlined our processes and saved us time and resources. We’re grateful for their partnership.",
        icon: "🚀",
    },
    {
        name: "Emily Clark",
        title: "CMO of Visionary Apps",
        quote: "Sculpted User Experiences Beyond Imagination!",
        content:
            "The UI/UX design crafted by PixelPulse turned our app into a masterpiece. Their design expertise took our brand to a new level.",
        icon: "🎨",
    },
    {
        name: "Olivia Martinez",
        title: "CTO of SynergiSoft",
        quote: "A Reliable Tech Partner from Day One!",
        content:
            "PixelPulse quickly became an extension of our own team. Their developers are proactive, detail-oriented, and constantly deliver ahead of deadlines.",
        icon: "🤝",
    },
    {
        name: "Daniel Roberts",
        title: "Founder of GreenTech Innovations",
        quote: "Intelligent Solutions That Drive Results!",
        content:
            "From architecture to deployment, PixelPulse helped us rethink how we build software. Their solutions are clean, maintainable, and tailored to our use case.",
        icon: "💡",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-10 text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                    We’ve stopped counting. Over 500 brands count on us.
                </h2>
                <p className="text-gray-600 mb-10 text-sm sm:text-base">
                    Our 4,000+ team has expertise in almost every programming language.
                </p>

                <Carousel className="w-full">
                    <CarouselContent>
                        {testimonials.map((item, i) => (
                            <CarouselItem
                                key={i}
                                className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
                            >
                                <div className="bg-white rounded-2xl border shadow p-6 text-left h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 text-indigo-700 mb-4">
                                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-700" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-700" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-700" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-700" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">{`"${item.quote}"`}</h3>
                                        <p className="text-sm text-gray-600">{item.content}</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t flex items-center gap-3 text-sm text-gray-800">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-gray-500">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
