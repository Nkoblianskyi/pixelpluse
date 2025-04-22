import { Boxes, Globe, MessageSquare, MonitorSmartphone, Smartphone, Cloud } from "lucide-react";

const logos = [
    { icon: <Boxes className="w-10 h-10 text-gray-400" />, name: "Microsoft" },
    { icon: <Globe className="w-10 h-10 text-gray-400" />, name: "Google" },
    { icon: <MessageSquare className="w-10 h-10 text-gray-400" />, name: "Slack" },
    { icon: <MonitorSmartphone className="w-10 h-10 text-gray-400" />, name: "LG" },
    { icon: <Smartphone className="w-10 h-10 text-gray-400" />, name: "Samsung" },
    { icon: <Cloud className="w-10 h-10 text-gray-400" />, name: "AWS" },
];

export default function TrustedSection() {
    return (
        <section className="bg-[#f7f8ff] py-16 rounded-3xl mx-4 sm:mx-10 my-10 shadow-inner">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                {/* Top mark */}
                <div className="w-10 h-10 mx-auto mb-4 bg-gradient-to-tr from-green-400 to-yellow-300 rounded-md" />

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                    Trusted by Leading Organizations
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto mb-8">
                    Our 4,000+ team has expertise in almost every programming language.
                </p>

                {/* Icon row */}
                <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
                    {logos.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 text-center">
                            {item.icon}
                            <span className="text-xs text-gray-500">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
