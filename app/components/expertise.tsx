export default function Expertise() {
    return (
        <section>
            <h1 className="mb-8 mt-14 text-3xl font-medium tracking-tight">
                What I do
            </h1>

            <div className="prose prose-bold prose-lg dark:prose-invert space-y-1 text-justify ">
                <p
                    style={{
                        marginBottom: "0px",
                    }}
                >
                    <span className="font-bold text-blue-500 ">
                        🌐 Full-Stack Web Development:
                    </span>
                    I build robust, secure, and scalable web applications using
                    TypeScript, React, Next.js, Node.js, Express, Fastify, and
                    .NET.
                </p>
                <p>
                    <span className="font-bold text-green-500 ">
                        📊 Data Architecture & Management:
                    </span>
                    Customized database design using PostgreSQL, MySQL, MongoDB,
                    Redis, and Supabase
                </p>
                <p>
                    <span className="font-bold text-purple-500 ">
                        🚀 Deployment & Hosting:
                    </span>
                    I manage and deploy applications on VPS environments,
                    handling domain configuration, security, and server
                    management, with deployments on Heroku, Vercel, Netlify, and
                    Railway.
                </p>
                <p>
                    <span className="font-bold text-yellow-500 ">
                        🤖 Custom WhatsApp Bot Development:
                    </span>
                    I create WhatsApp bots for automated replies, text
                    summarization, and integration with third-party APIs to
                    streamline business processes.
                </p>
            </div>
        </section>
    );
}
