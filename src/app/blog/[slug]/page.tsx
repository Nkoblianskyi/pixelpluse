// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';

interface PageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: PageProps) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) return notFound();

    return (
        <article className="max-w-screen-md mx-auto px-6 py-20 text-gray-800">
            <span className="text-sm text-gray-500 uppercase tracking-wide">{post.label}</span>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">{post.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{post.description}</p>
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto mb-8 rounded-lg shadow-md"
            />
            <div className="prose prose-lg max-w-none mb-10">
                <p>{post.content}</p>
            </div>
            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                <p>{post.extraContent}</p>
            </div>
            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                <p>{post.content2}</p>
            </div>
            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                <p>{post.content3}</p>
            </div>
        </article>
    );
}
