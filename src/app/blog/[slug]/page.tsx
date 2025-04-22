'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import Image from 'next/image';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    const post = posts.find((p) => p.slug === slug);

    if (!post) return notFound();

    return (
        <article className="max-w-screen-md mx-auto px-6 py-20 text-gray-800">
            <span className="text-sm text-gray-500 uppercase tracking-wide">{post.label}</span>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">{post.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{post.description}</p>
            <Image
                src={post.image}
                alt={post.title}
                className="w-full h-auto mb-8 rounded-lg shadow-md"
                width={1200}
                height={800}
            />

            <div className="prose prose-lg max-w-none mb-10 text-gray-800">
                {post.content.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>

            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                {post.extraContent.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>

            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                {post.content2.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>

            <div className="prose prose-md max-w-none text-gray-700 border-t pt-6">
                {post.content3.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>
        </article>
    );
}