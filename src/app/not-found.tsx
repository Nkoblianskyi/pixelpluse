import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24 bg-white text-center">
            <div className="max-w-md">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <Link href="/">
                    <Button className="inline-flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}