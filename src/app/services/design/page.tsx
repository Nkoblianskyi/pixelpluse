'use client';

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function DesignPage() {
    return (
        <div className="max-w-screen-lg mx-auto px-6 sm:px-0 py-20">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">UI/UX Design</h1>
            <p className="text-lg text-gray-600 mb-10">
                Clean. Intuitive. Human-centered.
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                <p>
                    At PixelPulse, our design team specializes in crafting modern, intuitive, and conversion-focused UI/UX experiences. From landing pages to enterprise dashboards, we create layouts that are as beautiful as they are functional.
                </p>
                <p>
                    We believe in user-first design. Every decision is backed by UX research, accessibility principles, and behavioral patterns. We map journeys, define goals, and design interfaces that guide users naturally.
                </p>
                <p>
                    Tools like Figma and Adobe XD help us prototype quickly and collaboratively. We maintain scalable design systems to ensure consistency, whether you аre a startup or a large-scale platform.
                </p>
            </div>

            {/* Carousel with work examples */}
            <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Selected Design Work</h2>
                <Carousel className="w-full">
                    <CarouselContent>
                        {[1, 2, 3, 4 , 5].map((i) => (
                            <CarouselItem key={i} className="basis-full sm:basis-1/2 lg:basis-1/3">
                                <div className="p-2">
                                    <Image
                                        src={`/images/design-${i}.jpg`}
                                        alt={`Design mockup ${i}`}
                                        width={600}
                                        height={400}
                                        className="rounded-xl object-cover w-full h-auto"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* Tools & UX methods */}
            <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">What We Use</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700 list-disc pl-4">
                    <li>Wireframing & Prototyping</li>
                    <li>Figma & Adobe XD</li>
                    <li>User Flows</li>
                    <li>Design Systems</li>
                    <li>Accessibility</li>
                    <li>Mobile-first Design</li>
                </ul>
            </div>
        </div>
    );
}
