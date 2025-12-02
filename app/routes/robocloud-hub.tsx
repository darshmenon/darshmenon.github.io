import type { MetaFunction } from "react-router";
import { UIPanel } from "~/components/ui/UIPanel";

export const meta: MetaFunction = () => {
    return [
        { title: "RoboCloud Hub - Darsh Menon" },
        {
            name: "description",
            content: "RoboCloud Hub - The Future of Robotics Collaboration. A unified platform for jobs, news, and marketplace."
        },
    ];
};

export default function RoboCloudHub() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-12">
            <section className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                    ROBOCLOUD HUB
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                    The Future of Robotics Collaboration. A unified platform for jobs, news, and marketplace.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <UIPanel className="h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">Job Board</h3>
                    <p className="text-gray-400 mb-6">
                        Find the latest opportunities in robotics and autonomous systems.
                    </p>
                    <div className="text-primary-400 font-mono text-sm">Coming Soon</div>
                </UIPanel>

                <UIPanel className="h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">News Feed</h3>
                    <p className="text-gray-400 mb-6">
                        Stay updated with the latest breakthroughs and industry news.
                    </p>
                    <div className="text-primary-400 font-mono text-sm">Coming Soon</div>
                </UIPanel>

                <UIPanel className="h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">Marketplace</h3>
                    <p className="text-gray-400 mb-6">
                        Buy and sell robotics parts, sensors, and hardware.
                    </p>
                    <div className="text-primary-400 font-mono text-sm">Coming Soon</div>
                </UIPanel>
            </div>

            <section className="mt-20 text-center">
                <a
                    href="https://robocloud-dashboard.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
                >
                    Visit Live Platform <span className="ml-2">→</span>
                </a>
            </section>
        </div>
    );
}
