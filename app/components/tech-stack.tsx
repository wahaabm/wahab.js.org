import Image from "next/image";
import { socialLinks } from "../config";

export default function TechStack() {
    return (
        <section>
            <h1 className="mb-8 mt-10 text-3xl font-medium tracking-tight">
                Technologies I Work With
            </h1>

            <div className="flex flex-row flex-wrap gap-2 justify-center"></div>
        </section>
    );
}
