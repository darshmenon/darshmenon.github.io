// import { Link } from 'react-router';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 backdrop-blur-sm">
                        <span className="text-primary-400 font-mono text-sm font-medium">
                            Robotics Software Engineer @ Asimov Robotics
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                        Darsh Menon
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
                        Building Intelligent <span className="text-primary-500 font-medium">Autonomous Systems</span>
                    </p>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Specializing in ROS 2, Computer Vision, and Reinforcement Learning.
                        BITS Pilani graduate turning complex algorithms into real-world robotic solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        <a
                            href="/projects"
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-600/25"
                        >
                            View My Work
                        </a>
                        <a
                            href="/about"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm"
                        >
                            About Me
                        </a>
                        <a
                            href="https://linkedin.com/in/darsh-menon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* Tech Stack Ticker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 pt-10 border-t border-white/5"
                >
                    <p className="text-sm text-gray-500 font-mono mb-6 uppercase tracking-widest">Core Technologies</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {[
                            'ROS 2',
                            'Python',
                            'C++',
                            'OpenCV',
                            'PyTorch',
                            'Gazebo',
                            'Docker',
                            'Linux'
                        ].map((tech) => (
                            <span key={tech} className="text-lg font-medium text-gray-300 hover:text-primary-400 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
