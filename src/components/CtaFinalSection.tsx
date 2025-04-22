import Image from "next/image";
import Link from "next/link";

export default function CtaFinalSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-tr from-blue-500 to-indigo-500 text-white px-6 py-24 text-center mb-10">
            <div className="max-w-screen-md mx-auto z-10 relative">
                <h2 className="text-2xl sm:text-4xl font-bold mb-6">
                    Ready to Transform Your Vision into Reality? <br />
                    Let&apos;s Get Started!
                </h2>
                <Link
                    href="/contact"
                    className="inline-block mt-2 bg-white text-blue-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition"
                >
                    Schedule a Call
                </Link>

                {/* Centered image below CTA */}
                <div className="mt-10 flex justify-center">
                    <div className="overflow-hidden rounded-[3rem] shadow-lg w-[360px] h-[220px] sm:w-[500px] sm:h-[300px]">
                        <Image
                            src="/team.jpg"
                            alt="Team photo"
                            width={500}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
