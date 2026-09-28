export interface Course {
  title: string;
  description: string;
  duration: string;
  level: string;
  learn: string[];
}

const courses: Record<string, Course> = {
  "web-development": {
    title: "Web Development",
    description: "Master HTML, CSS, Javascript",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    learn: ["HTML", "CSS", "JS"],
  },
  "data-science": {
    title: "Data Science",
    description: "Learning Data Analysis",
    duration: "10 weeks",
    level: "Intermediate",
    learn: ["Python", "Pandas"],
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Protect Systems",
    duration: "8 weeks",
    level: "Beginner",
    learn: ["Security", "Ethical Hacking"],
  },
};

export default courses;