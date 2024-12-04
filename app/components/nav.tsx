import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
    // "/blog": { name: "Blog" },
    // "/projects": { name: "Projects" },
    "/resume": { name: "Resume" },
};

export function Navbar() {
    return (
        <nav className="lg:mb-16 mb-12 py-5 border-b-2 border-gray-300 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="text-3xl font-semibold tracking-tighter"
                    >
                        {metaData.title}
                    </Link>
                </div>
                <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
                    {Object.entries(navItems).map(([path, { name }]) => {
                        if (path === "/resume") {
                            // For the resume link, use an anchor tag with download attribute
                            return (
                                <a
                                    key={path}
                                    href="/wahab-resume.pdf" // Path to your PDF file in the public folder
                                    download
                                    className="text-2xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
                                >
                                    {name}
                                </a>
                            );
                        }
                        return (
                            <Link
                                key={path}
                                href={path}
                                className="text-2xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
                            >
                                {name}
                            </Link>
                        );
                    })}
                    <ThemeSwitch />
                </div>
            </div>
        </nav>
    );
}
