import Image from "next/image";
import { socialLinks } from "./config";
import TechStack from "./components/tech-stack";
import Expertise from "./components/expertise";
import Contact from "./components/contact";
export default function Page() {
    return (
        <>
            <section>
                <a href={socialLinks.github} target="_blank">
                    <Image
                        src="/profile.png"
                        alt="Profile photo"
                        className="rounded-3xl bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
                        unoptimized
                        width={170}
                        height={170}
                        priority
                    />
                </a>

                <h1 className="mb-8 text-3xl font-medium tracking-tight text-center md:text-left">
                    Who Am I
                </h1>

                <div className="prose prose-bold prose-lg dark:prose-invert space-y-0">
                    <p
                        className="flex"
                        style={{
                            marginBottom: "0px",
                        }}
                    >
                        <span className="mr-2">👋</span> You can call me Wahab.
                        I'm a Software Engineer, an avid runner, and a
                        passionate reader.
                    </p>
                    <p className="flex">
                        <span className="mr-2">🎓</span> Graduated Cum Laude in
                        Computer Engineering and a Master's in Cyber Security.
                    </p>
                    <p className="flex">
                        <span className="mr-2">💼</span> I have been developing
                        custom solutions for businesses and startups for over 2
                        years.
                    </p>
                    <p className="flex">
                        <span className="mr-2">📚</span> I love reading books on
                        software engineering and literature.
                    </p>
                    <p className="flex">
                        <span className="mr-2">🏙️</span> I live in the capital
                        of Pakistan, Islamabad—a city surrounded by greenery and
                        hills.
                    </p>
                    <p className="flex">
                        <span className="mr-2">🏃‍♂️</span> I love running and have
                        completed 10K races. I am currently planning to run a
                        half marathon.
                    </p>

                    <p>
                        <span role="img" aria-label="rocket">
                            🚀
                        </span>{" "}
                        Explore my{" "}
                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>{" "}
                        to see what I'm currently working on.
                    </p>
                </div>
            </section>
            <TechStack />
            <Expertise />
            <Contact />
        </>
    );
}
