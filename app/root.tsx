import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction, MetaFunction } from "react-router";

import "./tailwind.css";
import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap",
  },
  { rel: "icon", href: "/favicon.png", type: "image/png" },
  { rel: "canonical", href: "https://darshmenon.github.io/" },
];

export const meta: MetaFunction = () => [
  { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
  { name: "googlebot", content: "index, follow" },
  { name: "author", content: "Darsh Menon" },
  { name: "theme-color", content: "#7c3aed" },
  { name: "google-site-verification", content: "googleea716b0e0ba79f4e" },
  { name: "format-detection", content: "telephone=no" },
  { name: "geo.region", content: "IN-KL" },
  { name: "geo.placename", content: "Kochi, Kerala, India" },
  // Default Open Graph Image
  { property: "og:image", content: "https://darshmenon.github.io/favicon.png" },
  { property: "og:image:secure_url", content: "https://darshmenon.github.io/favicon.png" },
  { property: "og:image:type", content: "image/png" },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "1200" },
  { property: "og:image:alt", content: "Darsh Menon - Robotics Software Engineer" },
  // Twitter Default Image
  { name: "twitter:image", content: "https://darshmenon.github.io/favicon.png" },
  { name: "twitter:image:alt", content: "Darsh Menon - Robotics Software Engineer" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Cache buster: v2 */}
        <Meta />
        <Links />
      </head>
      <body className="bg-tech-bg text-white antialiased selection:bg-primary-500/30 selection:text-white">
        {/* Hidden SEO content for crawlers - always rendered server-side */}
        <div className="sr-only" aria-hidden="true">
          <h1>Darsh Menon - Robotics Software Engineer Portfolio</h1>
          <p>
            Welcome to the portfolio of Darsh Menon, a Robotics Software Engineer at Asimov Robotics
            specializing in ROS 2, Computer Vision, Autonomous Navigation, and Reinforcement Learning.
            BITS Pilani graduate with experience in building intelligent autonomous systems.
          </p>
          <p>
            Skills: ROS 2, Python, C++, OpenCV, PyTorch, Gazebo, Docker, Linux, MoveIt 2, Navigation Stack
          </p>
          <p>
            Experience: Robotics Software Engineer at Asimov Robotics, SDE at Growth Jockey,
            Business Development at Shriram Automall
          </p>
          <p>
            Education: B.E. (Hons) Mechanical Engineering from BITS Pilani Goa Campus (2020-2024)
          </p>
          <p>
            Projects: RoboCloud Hub, RL Bipedal Walking Robot, Mobile Pick-and-Place, Autonomous Pick-and-Place
          </p>
          <p>
            Contact: darshmenon02@gmail.com | Kochi, Kerala, India
          </p>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/robocloud-hub">RoboCloud Hub</a>
          </nav>
        </div>

        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <noscript>
          <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', color: '#333', backgroundColor: '#fff' }}>
            <h1>Darsh Menon - Robotics Software Engineer</h1>
            <p>Welcome to the portfolio of Darsh Menon, a Robotics Software Engineer at Asimov Robotics specializing in ROS 2, Computer Vision, Autonomous Navigation, and Reinforcement Learning. BITS Pilani graduate with experience in building intelligent autonomous systems.</p>
            <h2>About</h2>
            <p>I am a passionate robotics engineer with expertise in developing autonomous systems, computer vision applications, and reinforcement learning algorithms. Currently working at Asimov Robotics in Kochi, Kerala, India.</p>
            <h2>Skills</h2>
            <ul>
              <li>ROS 2, MoveIt 2, Navigation Stack</li>
              <li>Python, C++, PyTorch, OpenCV</li>
              <li>Gazebo, Docker, Linux</li>
              <li>Computer Vision, Machine Learning</li>
            </ul>
            <h2>Projects</h2>
            <ul>
              <li><strong>RoboCloud Hub</strong> - A comprehensive robotics ecosystem platform</li>
              <li><strong>RL Bipedal Walking Robot</strong> - Reinforcement learning for bipedal locomotion</li>
              <li><strong>Autonomous Pick-and-Place</strong> - ROS 2 based manipulation system</li>
              <li><strong>Mobile Navigation System</strong> - SLAM and path planning implementation</li>
            </ul>
            <h2>Contact</h2>
            <p>Email: darshmenon02@gmail.com</p>
            <p>Location: Kochi, Kerala, India</p>
            <p><a href="https://github.com/darshmenon">GitHub</a> | <a href="https://linkedin.com/in/darsh-menon">LinkedIn</a></p>
          </div>
        </noscript>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}



export function ErrorBoundary({ error }: { error: Error }) {
  const isHydrationError = error.message.includes("hydration") || error.message.includes("patchRoutesOnNavigation") || error.message.includes("404");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Something went wrong</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-tech-bg text-white antialiased flex items-center justify-center min-h-screen">
        <div className="p-8 max-w-md text-center space-y-6">
          <h1 className="text-3xl font-bold text-red-400">Oops!</h1>
          <p className="text-gray-300">
            {isHydrationError
              ? "A new version of the site is available. Please reload."
              : "Something unexpected happened. We're looking into it."}
          </p>
          {process.env.NODE_ENV === "development" && (
            <pre className="text-xs text-left bg-black/50 p-4 rounded overflow-auto max-h-40 text-red-200">
              {error.message}
            </pre>
          )}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              Reload Page
            </button>
            <a
              href="/"
              className="px-4 py-2 border border-white/20 hover:bg-white/10 rounded-lg transition-colors"
            >
              Go Home
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
