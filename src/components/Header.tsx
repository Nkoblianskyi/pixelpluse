'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
    const [open, setOpen] = useState(false);

    const nav = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <header className="w-full border-b bg-white shadow z-50 relative">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    PixelPulse
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm relative">
                    {nav.map((link) =>
                        link.name === 'Services' ? (
                            <div key="services" className="relative group">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                                    Services
                                    <ChevronDown className="w-4 h-4" />
                                </div>

                                {/* Dropdown */}
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <Link
                                        href="/services/frontend"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        Front-end
                                    </Link>
                                    <Link
                                        href="/services/backend"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        Back-end
                                    </Link>
                                    <Link
                                        href="/services/design"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        UI/UX Design
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <Link key={link.name} href={link.href} className="hover:text-blue-600">
                                {link.name}
                            </Link>
                        )
                    )}
                </nav>

                {/* CTA + Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700"
                    >
                        Contact Us
                    </Link>
                    <button className="md:hidden" onClick={() => setOpen(!open)}>
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col gap-3 mt-3">
                        {nav.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm hover:text-blue-600">
                                {link.name}
                            </Link>
                        ))}
                        {/* Dropdown items */}
                        <div className="pl-4 space-y-2 mt-2">
                            <Link href="/services/frontend" className="text-sm text-gray-600">
                                - Front-end
                            </Link>
                            <Link href="/services/backend" className="text-sm text-gray-600">
                                - Back-end
                            </Link>
                            <Link href="/services/design" className="text-sm text-gray-600">
                                - UI/UX Design
                            </Link>
                        </div>
                        <Link
                            href="/contact"
                            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full text-center text-sm hover:bg-blue-700"
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
