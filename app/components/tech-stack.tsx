import Image from "next/image";
import { socialLinks } from "../config";

export default function TechStack() {
    return (
        <section>
            <h1 className="mb-8 mt-14 text-3xl font-medium tracking-tight">
                Technologies I Work With
            </h1>

            <div className="flex flex-row flex-wrap gap-3 justify-center w-[95%] mx-auto">
                <span className="logos--typescript-icon"></span>
                <span className="logos--javascript"></span>
                <span className="logos--nodejs-icon-alt"></span>
                <span className="logos--react"></span>
                <span className="logos--react-router"></span>
                <span className="logos--nextjs-icon"></span>
                <span className="logos--nestjs"></span>
                <span className="skill-icons--expressjs-dark"></span>
                <span className="logos--redux"></span>
                <span className="logos--tailwindcss-icon"></span>
                <span className="logos--daisyui-icon"></span>
                <span className="simple-icons--shadcnui"></span>
                <span className="logos--c-sharp"></span>
                <span className="skill-icons--dotnet"></span>
                <span className="logos--postgresql"></span>
                <span className="logos--firebase"></span>
                <span className="logos--supabase-icon"></span>
                <span className="logos--python"></span>
                <span className="logos--mongodb-icon"></span>
                <span className="logos--c-plusplus"></span>
                <span className="logos--nodebots"></span>
                <span className="devicon--nginx"></span>
                <span className="logos--jest"></span>
                <span className="skill-icons--prisma"></span>
                <span className="logos--jwt-icon"></span>
                <span className="logos--pnpm"></span>
                <span className="skill-icons--vercel-dark"></span>
                <span className="logos--npm"></span>
                <span className="logos--linux-tux"></span>
                <span className="logos--pm2-icon"></span>
                <span className="logos--bun"></span>
                <span className="logos--vim"></span>
                <span className="logos--chrome"></span>
                <span className="logos--netlify-icon"></span>
                <span className="skill-icons--git"></span>
                <span className="logos--visual-studio-code"></span>
                <span className="logos--fastify-icon"></span>
                <span className="logos--docker-icon"></span>
            </div>
        </section>
    );
}
