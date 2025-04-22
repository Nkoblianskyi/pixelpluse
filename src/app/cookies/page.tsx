export default function CookiesPage() {
    return (
        <div className="max-w-screen-md mx-auto px-6 py-20 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

            <p className="mb-4">
                This Cookie Policy explains how <strong>PixelPulse</strong> (“we”, “us”, or “our”) uses cookies and similar technologies to recognize you when you visit our website at <strong>pixelpulse.com</strong>. It explains what these technologies are, why we use them, and your rights to control their use.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">What are cookies?</h2>
            <p className="mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you browse websites. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Why do we use cookies?</h2>
            <p className="mb-4">
                We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate. Others help us understand how visitors use our site, or allow us to enhance user experience through personalization.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">Specifically, we use cookies to:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Enable core functionality of the website</li>
                <li>Improve website performance and security</li>
                <li>Analyze usage and visitor behavior (analytics)</li>
                <li>Store user preferences and language settings</li>
                <li>Deliver personalized content and advertising (where applicable)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Types of cookies we use</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>Essential cookies:</strong> Required for the website to function. These cannot be disabled.
                </li>
                <li>
                    <strong>Analytics cookies:</strong> Help us understand how users interact with the site.
                </li>
                <li>
                    <strong>Functional cookies:</strong> Enhance user experience by remembering preferences.
                </li>
                <li>
                    <strong>Marketing cookies:</strong> May be set by third parties to build a profile of your interests.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">How can you control cookies?</h2>
            <p className="mb-4">
                You can accept or reject cookies via the banner on your first visit. In addition, you can control or delete cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Third-party cookies</h2>
            <p className="mb-4">
                In some cases, we use third-party cookies (e.g. Google Analytics) to help us understand usage patterns and improve our services. These third parties may also use cookies to track your browsing activity across different websites.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Updates to this policy</h2>
            <p className="mb-4">
                We may update this Cookie Policy from time to time in response to legal, technical, or operational changes. When we make changes, we will revise the “Last updated” date at the bottom of this page.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Contact us</h2>
            <p className="mb-2">
                If you have any questions about our use of cookies, please contact us:
            </p>
            <ul className="text-sm space-y-1">
                <li><strong>Email:</strong> info@pixelpulse.com</li>
                <li><strong>Address:</strong> Schubertring 5, 1010 Vienna, Austria</li>
            </ul>

            <p className="mt-10 text-sm text-gray-500">
                Last updated: February 22, 2025
            </p>
        </div>
    );
}
