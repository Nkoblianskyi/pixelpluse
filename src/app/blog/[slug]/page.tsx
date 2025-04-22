// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { reactArticle, nextArticle, nestArticle } from '@/data/blog_articles';
import { dockerArticle } from '@/data/docker';
import { drizzleArticle } from '@/data/drizzle';
import { shadcnArticle } from '@/data/shadcn';
import ReactMarkdown from 'react-markdown';

type Article = {
    slug: string;
    title: string;
    content: string;
};

const articles: Record<string, Article> = {
    react: reactArticle,
    next: nextArticle,
    nest: nestArticle,
    drizzle: drizzleArticle,
    shadcn: shadcnArticle,
    docker: dockerArticle,
};

// Обов'язкова функція для генерації статичних параметрів
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogPostPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await props.params;
    const article = articles[slug];

    if (!article) return notFound();

    return (
        <article className="max-w-screen-md mx-auto px-6 py-20 text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">{article.title}</h1>
            <div className="prose prose-lg prose-blue">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
        </article>
    );
}
