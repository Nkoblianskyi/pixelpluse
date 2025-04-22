import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#6b6b6b] text-white py-16 px-6 md:px-20">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* About */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold">PixelPulse</h3>
                    <p className="text-sm text-gray-200">
                        We are a team of passionate designers and developers building next-generation digital experiences.
                    </p>
                    <address>Schubertring 5, 1010 Vienna, Austria</address>
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                        <Mail size={16} /> <span>info@pixelpulse.com</span>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="/services">Digital Marketing</Link></li>
                        <li><Link href="/services/frontend">Frontend Development</Link></li>
                        <li><Link href="/services/backend">Backend Development</Link></li>
                        <li><Link href="/services/design">UI/UX Design</Link></li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Helpful Links</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact us</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/cookies">Cookies</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-10 text-center text-gray-400 text-xs border-t border-white/20 pt-6">
                © {new Date().getFullYear()} All rights reserved to PixelPluse
            </div>
        </footer>
    );
}
