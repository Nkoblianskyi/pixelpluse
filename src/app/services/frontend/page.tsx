import Image from "next/image";

export default function FrontendPage() {
    return (
        <div className="max-w-screen-lg mx-auto px-6 sm:px-0 py-20">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Front-end Development</h1>
            <p className="text-lg text-gray-600 mb-10">
                Beautiful and responsive user interfaces that bring your ideas to life.
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                <p>
                    At PixelPluse, our front-end developers craft seamless, performant, and user-friendly applications using cutting-edge technologies like React, Next.js, and Tailwind CSS. We believe design is as important as function.
                </p>
                <p>
                    Our focus is accessibility, responsiveness, and performance. We build pixel-perfect UIs from Figma designs and ensure consistency across all browsers and devices.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <Image src="/images/frontend-1.jpg" alt="UI coding" width={600} height={400} className="rounded-xl" />
                <Image src="/images/frontend-2.jpg" alt="Front-end developer" width={600} height={400} className="rounded-xl" />
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Technologies we use:</h2>
                <ul className="grid gap-6 sm:grid-cols-2">
                    <li>
                        <p className="font-medium text-gray-800">React</p>
                        <p className="text-sm text-gray-600">
                            A powerful JavaScript library for building user interfaces. We use React to create interactive, component-based apps that scale easily.
                        </p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">Next.js</p>
                        <p className="text-sm text-gray-600">
                            A full-stack React framework that enables server-side rendering, static site generation, and lightning-fast performance out of the box.
                        </p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">TypeScript</p>
                        <p className="text-sm text-gray-600">
                            A statically typed superset of JavaScript that helps us write more predictable and bug-free code, improving developer experience and maintainability.
                        </p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">Tailwind CSS</p>
                        <p className="text-sm text-gray-600">
                            A utility-first CSS framework that allows rapid UI development with clean and responsive designs — perfect for scalable design systems.
                        </p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">Vercel</p>
                        <p className="text-sm text-gray-600">
                            The hosting platform behind Next.js, enabling instant deployments, edge functions, and seamless integration with modern dev workflows.
                        </p>
                    </li>
                    <li>
                        <p className="font-medium text-gray-800">Storybook</p>
                        <p className="text-sm text-gray-600">
                            An isolated environment for building and testing UI components. It helps us ensure consistency and catch bugs early in the UI layer.
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    );
}
