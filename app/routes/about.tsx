import type { MetaFunction } from "react-router";
import { UIPanel } from "~/components/ui/UIPanel";

export const meta: MetaFunction = () => {
    return [
        { title: "About - Darsh Menon | Robotics Engineer" },
        {
            name: "description",
            content: "Passionate robotics engineer specializing in multi-robot detection and navigation systems using ROS 2 and OpenCV."
        },
    ];
};

export default function About() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-20">
            {/* Header Section */}
            <section className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                    ABOUT ME
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                    Passionate robotics engineer specializing in multi-robot detection and navigation systems using ROS 2 and OpenCV.
                </p>
            </section>

            {/* Experience Section */}
            <section>
                <h2 className="text-3xl font-bold text-primary-400 mb-12">Experience</h2>
                <div className="relative border-l-2 border-primary-500/30 ml-4 md:ml-6 space-y-12">
                    {/* Experience Item 1 */}
                    <div className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                        <div className="space-y-2">
                            <div className="text-primary-400 font-mono font-bold">May 2024 - July 2024</div>
                            <h3 className="text-2xl font-bold text-white">Robotics Research Intern</h3>
                            <div className="text-xl text-primary-300 font-semibold">TechnoYantra</div>
                            <p className="text-gray-300 leading-relaxed">
                                Spearheaded the development of a multi-robot detection and tracking system using ROS 2 and OpenCV.
                                Implemented a centralized server for real-time data processing and visualization.
                                Optimized communication protocols for low-latency data transfer between robots and the server.
                            </p>
                        </div>
                    </div>

                    {/* Experience Item 2 */}
                    <div className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                        <div className="space-y-2">
                            <div className="text-primary-400 font-mono font-bold">Aug 2022 - Present</div>
                            <h3 className="text-2xl font-bold text-white">Robotics Engineer</h3>
                            <div className="text-xl text-primary-300 font-semibold">Personal Projects</div>
                            <p className="text-gray-300 leading-relaxed">
                                Developed various robotics projects including autonomous navigation, robotic arm manipulation, and swarm robotics.
                                Utilized ROS 2, Gazebo, and MoveIt 2 for simulation and control.
                                Integrated computer vision algorithms for object detection and recognition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section>
                <h2 className="text-3xl font-bold text-primary-400 mb-12">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <UIPanel className="h-full">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-primary-400">B.E. Electronics and Instrumentation</h3>
                            <div className="text-xl font-semibold text-white">BITS Pilani, Goa Campus</div>
                            <div className="text-primary-300 font-mono">2021 - 2025</div>
                            <p className="text-gray-400">
                                Relevant Coursework: Control Systems, Microprocessors, Digital Signal Processing, Robotics and Automation.
                            </p>
                        </div>
                    </UIPanel>

                    <UIPanel className="h-full">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-primary-400">High School</h3>
                            <div className="text-xl font-semibold text-white">Delhi Public School</div>
                            <div className="text-primary-300 font-mono">2019 - 2021</div>
                            <p className="text-gray-400">
                                Focus on Physics, Chemistry, and Mathematics.
                            </p>
                        </div>
                    </UIPanel>
                </div>
            </section>
        </div>
    );
}
