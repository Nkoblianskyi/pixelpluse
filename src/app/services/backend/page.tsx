import Image from "next/image";

export default function BackendPage() {
    return (
        <div className="max-w-screen-lg mx-auto px-6 sm:px-0 py-20">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Back-end Development</h1>
            <p className="text-lg text-gray-600 mb-10">
                Scalable, secure, and performance-driven back-end solutions tailored to your business needs.
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                <p>
                    At PixelPulse, our backend engineers craft robust APIs and scalable infrastructure using modern, battle-tested technologies. Whether you need a fast MVP or a complex microservice architecture — weve got you covered.
                </p>
                <p>
                    We use frameworks like <strong>NestJS</strong> on top of <strong>Node.js</strong> to enforce code structure and testability. Our systems are modular, secure, and built with best practices in mind — from authentication to database design.
                </p>
                <p>
                    Every API is carefully designed to follow REST or GraphQL conventions, support versioning, and handle errors gracefully. We work with both SQL and NoSQL databases and ensure that data is handled safely, consistently, and efficiently.
                </p>
                <p>
                    From monoliths to microservices — we build it right from the ground up, always focusing on performance, observability, and future scalability.
                </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <Image
                    src="/images/backend-1.jpg"
                    alt="Backend API development"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                />
                <Image
                    src="/images/backend-2.jpg"
                    alt="Backend architecture planning"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                />
            </div>

            {/* Technologies */}
            <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Core Technologies We Use:</h2>
                <ul className="grid gap-6 sm:grid-cols-2 text-sm text-gray-700">
                    <li>
                        <p className="font-medium text-gray-800">Node.js & NestJS</p>
                        <p>Event-driven and modular backend built for speed and structure using modern TypeScript practices.</p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">PostgreSQL</p>
                        <p>Reliable, fast and secure SQL database used for complex data modeling and business-critical applications.</p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">Prisma / Drizzle ORM</p>
                        <p>Type-safe, modern database abstraction layers that allow smooth integration and migrations.</p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">JWT & OAuth2 Auth</p>
                        <p>Secure user authentication and authorization with scalable session and token management.</p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">REST / GraphQL</p>
                        <p>Standardized API layers that connect your frontend to dynamic data sources cleanly and efficiently.</p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">Microservices & CI/CD</p>
                        <p>Distributed architecture with automated testing, deployment pipelines, and infrastructure scaling.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
