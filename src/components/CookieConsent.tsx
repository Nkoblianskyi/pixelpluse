'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        window.location.href = '/cookies'; // редирект на сторінку політики
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-50 bg-white border shadow-xl rounded-xl p-4 sm:p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-gray-700">
                We use cookies to enhance your experience. Read our{' '}
                <Link href="/cookies" className="underline text-blue-600 hover:text-blue-800">
                    Cookie Policy
                </Link>.
            </div>
            <div className="flex gap-2">
                <button
                    onClick={handleDecline}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm"
                >
                    Decline
                </button>
                <button
                    onClick={handleAccept}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                >
                    Accept
                </button>
            </div>
        </div>
    );
}
