export default function Expertise() {
    return (
        <section>
            <h1 className="mb-8 mt-14 text-3xl font-medium tracking-tight text-center md:text-left">
                What I Do
            </h1>

            <div className="space-y-8 text-left md:text-justify ">
                {/* Full-Stack Web Development */}
                <div className="flex items-start">
                    <span className="text-blue-500 text-3xl mr-4">🌐</span>
                    <div>
                        <h2 className="font-bold text-xl text-blue-500">
                            Full-Stack Web Development
                        </h2>
                        <p className="text-lg leading-relaxed">
                            I build robust, secure, and scalable web
                            applications using TypeScript, React, Next.js,
                            Node.js, Express, Fastify, and .NET.
                        </p>
                    </div>
                </div>

                {/* Data Architecture & Management */}
                <div className="flex items-start">
                    <span className="text-green-500 text-3xl mr-4">📊</span>
                    <div>
                        <h2 className="font-bold text-xl text-green-500">
                            Data Architecture & Management
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Customized database design using PostgreSQL, MySQL,
                            MongoDB, Redis, and Supabase.
                        </p>
                    </div>
                </div>

                {/* Deployment & Hosting */}
                <div className="flex items-start">
                    <span className="text-purple-500 text-3xl mr-4">🚀</span>
                    <div>
                        <h2 className="font-bold text-xl text-purple-500">
                            Deployment & Hosting
                        </h2>
                        <p className="text-lg leading-relaxed">
                            I manage and deploy applications on VPS
                            environments, handling domain configuration,
                            security, and server management, with deployments on
                            Heroku, Vercel, Netlify, and Railway.
                        </p>
                    </div>
                </div>

                {/* Custom WhatsApp Bot Development */}
                <div className="flex items-start">
                    <span className="text-yellow-500 text-3xl mr-4">🤖</span>
                    <div>
                        <h2 className="font-bold text-xl text-yellow-500">
                            Custom WhatsApp Bot Development
                        </h2>
                        <p className="text-lg leading-relaxed">
                            I create WhatsApp bots for automated replies, text
                            summarization, and integration with third-party APIs
                            to streamline business processes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
