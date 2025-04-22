import Image from 'next/image';

export default function AboutUsPage() {
    return (
        <section className="max-w-screen-lg mx-auto px-6 py-20 text-gray-800">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">About Us</h1>

            <p className="mb-4 text-lg">
                At PixelPulse, we are passionate about delivering innovative, high-quality digital solutions for businesses around the globe. Our team of developers, designers, and strategists is dedicated to turning ideas into impactful experiences.
            </p>

            <p className="mb-4">
                Founded in Vienna, Austria, our agency has grown from a small group of tech enthusiasts to a full-scale digital powerhouse. We focus on building robust front-end and back-end solutions, designing intuitive user interfaces, and shaping brand identities through digital storytelling.
            </p>

            <p className="mb-4">
                Every project we take on is treated with the same passion and precision. We believe in transparency, agile workflows, and open communication. Whether you are a startup or an enterprise, we tailor our solutions to fit your goals and scale with your growth.
            </p>

            <p className="mb-4">
                We believe that technology should empower businesses, not complicate them. That is why we put a strong emphasis on simplicity, usability, and performance — creating experiences that not only function well but feel great to use.
            </p>

            <p className="mb-4">
                Our team thrives on collaboration. We work closely with our clients to understand their needs, map out clear strategies, and bring ideas to life with precision and creativity. We celebrate diversity and believe that the best ideas come from open-minded exploration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                <Image
                    src="/images/about-1.jpg"
                    alt="Team collaboration"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                />
                <Image
                    src="/images/about-2.jpg"
                    alt="Office workspace"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                />
            </div>

            <p className="mb-4">
                We specialize in technologies such as React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, and more. With a deep understanding of modern frameworks and tools, we ensure fast, accessible, and secure digital products.
            </p>

            <p className="mb-4">
                Our approach is user-centric — from research and strategy to design and development. We continuously test, refine, and iterate to ensure your users get the best possible experience.
            </p>

            <p className="mb-4">
                Our clients span various industries, from fintech and healthcare to e-commerce and education. We pride ourselves on long-term partnerships and measurable results. Our collaborative process ensures that your voice is always heard, and your goals stay at the center of our work.
            </p>

            <p className="mb-4">
                Innovation is at the heart of everything we do. We embrace emerging technologies such as AI, headless CMS, JAMstack, and serverless architecture to future-proof the solutions we deliver.
            </p>

            <p className="mb-4">
                We also offer post-launch support and analytics — ensuring your product continues to perform and evolve as your business grows. We don’t just launch and leave — we build partnerships.
            </p>

            <p className="mb-4">
                With each project, we bring fresh perspectives, technical excellence, and a deep commitment to quality. Our mission is to not only meet your expectations but to exceed them — time and time again.
            </p>

            <div className="w-full mt-10">
                <Image
                    src="/images/about-3.jpg"
                    alt="Creative brainstorming"
                    width={1200}
                    height={500}
                    className="rounded-xl object-cover"
                />
            </div>

            <p className="mt-10 text-lg">
                Join hundreds of happy clients who trust PixelPulse to bring their ideas to life. Let’s build something extraordinary together.
            </p>
        </section>
    );
}