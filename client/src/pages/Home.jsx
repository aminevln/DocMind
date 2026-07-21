import Hero from "../components/Hero";
import UploadCard from "../components/UploadCard";
import Features from "../components/Features";

function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

            {/* Background Blur */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className="absolute -top-32 left-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[170px]" />

                <div className="absolute top-1/2 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/5 blur-[220px]" />

                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-[160px]" />

            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-20">

                <Hero />

                <UploadCard />

                <Features />

            </div>

        </main>
    );
}

export default Home;