import type { Route } from "./+types/not-found";
import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "404 - Page Not Found | Darsh Menon" },
        { name: "robots", content: "noindex" },
        { property: "og:title", content: "Page Not Found" },
        { property: "og:image", content: "https://darshmenon.github.io/assets/seo/404_preview.png" },
    ];
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 text-center">
            <h1 className="text-4xl font-bold text-white">404</h1>
            <p className="text-xl text-gray-300">Page not found</p>
            <a
                href="/"
                className="text-primary-400 hover:text-primary-300 underline underline-offset-4"
            >
                Go back home
            </a>
        </div>
    );
}
