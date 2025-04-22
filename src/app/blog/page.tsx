import Link from 'next/link';
import Image from 'next/image';

const posts = [
    {
        slug: 'react',
        title: 'Mastering React: The Modern UI Library',
        excerpt: 'Learn the essentials of building modern interfaces with React.',
        image: '/images/react.jpg'
    },
    {
        slug: 'next',
        title: 'Why Next.js Is the Future of Web Development',
        excerpt: 'Explore the full-stack capabilities of Next.js and how it revolutionizes modern apps.',
        image: '/images/next.jpg'
    },
    {
        slug: 'nest',
        title: 'NestJS: Scalable Backend Framework for Node.js',
        excerpt: 'Learn how to build efficient and maintainable backends with NestJS.',
        image: '/images/nest.jpg'
    },
    {
        slug: 'drizzle',
        title: 'Drizzle ORM: Type-Safe SQL for TypeScript Developers',
        excerpt: 'Type-safe, clean, and modern way to write SQL in your TS projects.',
        image: '/images/drizzle.png'
    },
    {
        slug: 'shadcn',
        title: 'Build Better UIs with shadcn/ui',
        excerpt: 'Use headless components and Tailwind to create powerful UIs.',
        image: '/images/shadcn.png'
    },
    {
        slug: 'docker',
        title: 'Docker: Build, Ship, and Run Applications Anywhere',
        excerpt: 'Understand containerization and how Docker simplifies development and deployment.',
        image: '/images/docker.jpg'
    },
];

export default function BlogPage() {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-10 text-gray-900">Our Blog</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.slug}
                        className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h2>
                            <p className="text-gray-600 text-sm">{post.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}