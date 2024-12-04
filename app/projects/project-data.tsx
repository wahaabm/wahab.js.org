export interface Project {
    title: string;
    year: number;
    description: string;
    url: string;
}

export const projects: Project[] = [
    {
        title: "Trivvya",
        year: 2023,
        description:
            "Quiz game application using ReactJs, Tailwind CSS, DaisyUI and Redux toolkit. ",
        url: "https://trivvya-app.vercel.app",
    },
    {
        title: "Project Two",
        year: 2022,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
        url: "https://example.com/",
    },
    {
        title: "Project Three",
        year: 2021,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
        url: "https://example.com/",
    },
];
