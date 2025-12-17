export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "robocloud-hub",
        title: "RoboCloud Hub",
        image: "/assets/seo/project_robocloud.png",
        description: "A unified platform for the robotics ecosystem. Features comprehensive learning paths, community chat channels, job board, and a marketplace for parts. Built with React, Node.js, and Prisma.",
        tags: ["React", "Node.js", "Prisma", "PostgreSQL", "WebSockets"],
        link: "https://robocloud-dashboard.vercel.app/"
    },
    {
        id: "rl-bipedal-walking",
        title: "RL Bipedal Walking Robot",
        image: "/assets/seo/project_bipedal.png",
        description: "Complete reinforcement learning framework for training a bipedal robot to walk using ROS 2, Gazebo, and PyTorch PPO. Features custom 6-DOF robot simulation and advanced reward engineering.",
        tags: ["ROS 2", "Reinforcement Learning", "PyTorch", "Gazebo", "Python"],
        link: "https://github.com/darshmenon/rl-bipedal-walking",
        github: "https://github.com/darshmenon/rl-bipedal-walking"
    },
    {
        id: "rl-mobile-pick-place",
        title: "RL Mobile Pick-and-Place",
        image: "/assets/seo/project_mobile_pick.png",
        description: "Autonomous mobile manipulator combining differential drive base with robotic arm, trained using RL for pick-and-place operations. Integrates RGB-D perception and continuous action space control.",
        tags: ["ROS 2", "Computer Vision", "Reinforcement Learning", "Robotics"],
        link: "https://github.com/darshmenon/pickplace-rl-mobile",
        github: "https://github.com/darshmenon/pickplace-rl-mobile"
    },
    {
        id: "autonomous-pick-place",
        title: "Autonomous Pick-and-Place",
        image: "/assets/seo/project_autonomous_pick.png",
        description: "Advanced robotic manipulation system using UR5 robotic arm with Robotiq gripper. Features computer vision-based object detection, inverse kinematics, and collision-aware motion planning.",
        tags: ["ROS 2", "MoveIt 2", "Computer Vision", "Industrial Automation"],
        link: "https://github.com/darshmenon/UR3_ROS2_PICK_AND_PLACE",
        github: "https://github.com/darshmenon/UR3_ROS2_PICK_AND_PLACE"
    },
    {
        id: "intelligent-navigation",
        title: "Intelligent Navigation System",
        image: "/assets/seo/project_navigation.png",
        description: "Complete autonomous navigation pipeline featuring SLAM mapping, dynamic obstacle avoidance, and path planning. Built with Nav2 stack, SLAM Toolbox, and advanced algorithms for real-time LiDAR processing and localization in complex environments.",
        tags: ["ROS 2", "SLAM", "Navigation", "Nav2", "LiDAR"],
        link: "https://github.com/darshmenon/rosnav",
        github: "https://github.com/darshmenon/rosnav"
    },
    {
        id: "handbot-ros2",
        title: "HandBot ROS2 Ecosystem",
        image: "/assets/seo/project_handbot.png",
        description: "Comprehensive ROS2-based manipulation framework with advanced gripper control, perception pipeline integration, and task orchestration capabilities. Designed for complex multi-step robotics operations with modular architecture for easy extensibility.",
        tags: ["ROS 2", "Manipulation", "Gripper Control", "Task Planning", "Modular Architecture"],
        link: "https://github.com/darshmenon/handbot_ros2",
        github: "https://github.com/darshmenon/handbot_ros2"
    }
];
