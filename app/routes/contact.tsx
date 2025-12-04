import type { MetaFunction } from "react-router";
import { UIPanel } from "~/components/ui/UIPanel";

export const meta: MetaFunction = () => {
    return [
        { title: "Contact Darsh Menon | Robotics Software Engineer | ROS 2 Consulting" },
        {
            name: "description",
            content: "Contact Darsh Menon for robotics consulting, ROS 2 development, autonomous systems projects, or career opportunities. Robotics Software Engineer at Asimov Robotics, Kochi, Kerala, India. Open for collaborations and freelance robotics work."
        },
        { name: "keywords", content: "Contact Darsh Menon, Hire Robotics Engineer, ROS 2 Developer India, ROS 2 Consulting, Robotics Freelancer, Asimov Robotics Kochi, Autonomous Systems Developer, Computer Vision Consultant, SLAM Developer India, Kerala Robotics Engineer" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { name: "googlebot", content: "index, follow" },
        // Open Graph
        { property: "og:title", content: "Contact Darsh Menon | Robotics Software Engineer" },
        { property: "og:description", content: "Get in touch for robotics consulting, ROS 2 development, autonomous systems projects, or career opportunities." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://darshmenon.github.io/contact" },
        { property: "og:site_name", content: "Darsh Menon Portfolio" },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Contact Darsh Menon | Robotics Engineer" },
        { name: "twitter:description", content: "Get in touch for robotics consulting, ROS 2 development, or project discussions." },
        // Canonical
        { tagName: "link", rel: "canonical", href: "https://darshmenon.github.io/contact" },
    ];
};

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/darshmenon",
        icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        description: "Open source projects & code"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/darsh-menon",
        icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
        description: "Professional network"
    },
    {
        name: "Medium",
        url: "https://medium.com/@darshmenon02",
        icon: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
        description: "Technical articles & blogs"
    },
    {
        name: "YouTube",
        url: "https://youtube.com/@darshmenon0008",
        icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
        description: "Robotics demos & tutorials"
    },
    {
        name: "X (Twitter)",
        url: "https://x.com/darsh_menon",
        icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
        description: "Updates & thoughts"
    },
    {
        name: "Chess.com",
        url: "https://chess.com/member/darshthegreat",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
        description: "Challenge me to a game!"
    }
];

export default function Contact() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-12">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Darsh Menon",
                            "email": "darshmenon02@gmail.com",
                            "jobTitle": "Robotics Software Engineer",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Asimov Robotics"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Kochi",
                                "addressRegion": "Kerala",
                                "addressCountry": "India"
                            }
                        }
                    })
                }}
            />

            <section className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                    GET IN TOUCH
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                    Interested in collaborating on robotics projects, discussing autonomous systems, or exploring career opportunities? I'd love to hear from you!
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <UIPanel>
                    <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Email</div>
                                <a href="mailto:darshmenon02@gmail.com" className="text-lg text-white hover:text-primary-400 transition-colors font-medium">
                                    darshmenon02@gmail.com
                                </a>
                                <p className="text-sm text-gray-500 mt-1">Best way to reach me for professional inquiries</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Location</div>
                                <div className="text-lg text-white font-medium">Kochi, Kerala, India</div>
                                <p className="text-sm text-gray-500 mt-1">Open to remote opportunities worldwide</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Current Role</div>
                                <div className="text-lg text-white font-medium">Robotics Software Engineer</div>
                                <p className="text-sm text-gray-500 mt-1">@ Asimov Robotics, Kochi</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Specialization</div>
                                <div className="text-lg text-white font-medium">ROS 2 & Autonomous Navigation</div>
                                <p className="text-sm text-gray-500 mt-1">Computer Vision, Reinforcement Learning</p>
                            </div>
                        </div>
                    </div>
                </UIPanel>

                {/* Social Profiles */}
                <UIPanel>
                    <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
                    <div className="space-y-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-gray-400 group-hover:text-primary-400 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={link.icon} />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
                                    <p className="text-sm text-gray-500">{link.description}</p>
                                </div>
                                <svg className="w-5 h-5 text-gray-500 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </UIPanel>
            </div>

            {/* Quick Message */}
            <UIPanel className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                    Whether you're looking to collaborate on robotics research, need consultation for autonomous systems,
                    or want to discuss opportunities in the field, I'm always open to connecting with fellow enthusiasts and professionals.
                </p>
                <a
                    href="mailto:darshmenon02@gmail.com?subject=Collaboration%20Inquiry"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-600/25"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send an Email
                </a>
            </UIPanel>
        </div>
    );
}
