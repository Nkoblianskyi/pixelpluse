'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const benefits = [
    {
        title: "Expertise Across the Tech Spectrum",
        description: "Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.",
    },
    {
        title: "Proven Track Record of Success:",
        description: "Our portfolio is a testament to our ability to deliver impactful results.",
    },
    {
        title: "Collaborative Approach, Transparent Communication:",
        description: "We believe in working hand-in-hand with our clients.",
    },
    {
        title: "Tailored Solutions, Unique Results:",
        description: "We understand that no two businesses are alike. We design solutions that are just as unique.",
    },
];

export default function ChooseUsSection() {
    return (
        <section className="py-20 bg-[#f7f8ff] px-4 sm:px-10 rounded-3xl mt-10">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
                    Choose Us: Your Path to Innovation and{" "}
                    <span className="text-blue-600">Success</span>
                </h2>

                <Carousel className="w-full">
                    <CarouselContent>
                        {benefits.map((item, i) => (
                            <CarouselItem key={i} className="basis-full sm:basis-1/2 lg:basis-1/3 px-4">
                                <div
                                    className={`rounded-2xl p-6 h-full transition shadow `}
                                >
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center mt-6 gap-4">
                        <CarouselPrevious className="bg-white shadow w-10 h-10 rounded-full" />
                        <CarouselNext className="bg-white shadow w-10 h-10 rounded-full" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
