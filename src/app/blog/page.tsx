import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/data/posts';


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
                            <p className="text-gray-600 text-sm">{post.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
