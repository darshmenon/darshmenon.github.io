export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Robotics & Automation",
        skills: ["ROS 2", "MoveIt 2", "SLAM", "Navigation", "Motion Planning", "Gazebo Simulation"]
    },
    {
        title: "AI & Computer Vision",
        skills: ["Computer Vision", "Deep Learning", "Object Detection", "Point Cloud Processing", "Perception Systems", "OpenCV"]
    },
    {
        title: "Programming & Development",
        skills: ["C++", "Python", "Linux", "Git", "Docker", "CMake"]
    },
    {
        title: "Specialized Systems",
        skills: ["Autonomous Navigation", "Pick & Place Systems", "Task Planning", "Human-Robot Interaction", "Sensor Fusion"]
    }
];
