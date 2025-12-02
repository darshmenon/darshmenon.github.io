import type { MetaFunction } from "react-router";
import { Hero } from "~/components/sections/Hero";
import { UIPanel } from "~/components/ui/UIPanel";
import { projects } from "~/data/projects";
import { skillCategories } from "~/data/skills";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Darsh Menon - ROS 2 Robotics Engineer | Autonomous Systems Developer" },
        {
            name: "description",
            content: "Darsh Menon - ROS 2 Robotics Engineer specializing in autonomous navigation, computer vision, and intelligent systems. BITS Pilani graduate building the future of robotics."
        },
    ];
};

export default function Index() {
    return (
        <div className="min-h-screen">
            <Hero />

            <div className="container mx-auto px-6 py-20 space-y-32">
                {/* Technical Expertise Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Technical Expertise
                        </h2>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category) => (
                            <UIPanel key={category.title} title={category.title} className="h-full hover:border-primary-500/50 transition-colors">
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-lg text-primary-300 text-sm font-medium hover:bg-primary-500/20 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </UIPanel>
                        ))}
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Featured Projects
                        </h2>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.slice(0, 4).map((project) => (
                            <UIPanel key={project.id} noPadding className="group h-full flex flex-col">
                                <div className="p-8 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-mono text-primary-300 bg-primary-500/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-8 py-4 bg-white/5 border-t border-white/5 flex justify-end">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-white hover:text-primary-400 transition-colors flex items-center gap-2"
                                    >
                                        View Project <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </UIPanel>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center px-8 py-3 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/5 transition-colors"
                        >
                            View All Projects
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
