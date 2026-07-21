function Hero() {
    return (
        <section className="mb-14 text-center">

            <div className="mb-5 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                AI Powered Document Analysis
            </div>

            <div className="relative mb-6">

                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>

                <h1 className="relative text-6xl font-black tracking-tight">

                    Doc<span className="text-blue-500">Mind</span>

                </h1>

            </div>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">

                Analyze contracts, invoices and reports in seconds.

                Get summaries, extract important information and chat with your documents using AI.

            </p>

        </section>
    );
}

export default Hero;