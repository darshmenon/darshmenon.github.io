import type { Route } from "./+types/not-found";
import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 text-center">
            <h1 className="text-4xl font-bold text-white">404</h1>
            <p className="text-xl text-gray-300">Page not found</p>
            <Link
                to="/"
                className="text-primary-400 hover:text-primary-300 underline underline-offset-4"
            >
                Go back home
            </Link>
        </div>
    );
}
