import { Upload } from "lucide-react";

function UploadCard() {

    return (

        <section className="mb-16 w-full max-w-3xl">

            <div className="rounded-3xl
border
border-slate-700
bg-slate-900/60
backdrop-blur-xl
shadow-2xl
transition-all
duration-300
hover:-translate-y-2
hover:border-blue-500/60
hover:shadow-blue-500/10 p-10 shadow-2xl">

                <div className="flex flex-col items-center">

                    <div className="mb-5 rounded-full bg-blue-500/20 p-5">

                        <Upload size={40} className="text-blue-400" />

                    </div>

                    <h2 className="mb-2 text-2xl font-bold">

                        Upload your PDF

                    </h2>

                    <p className="mb-8 text-center text-slate-400">

                        Drag & Drop your document here or click below.

                    </p>

                    <button
                        className="
group
rounded-xl
bg-blue-600
px-8
py-3
font-semibold
transition-all
duration-300
hover:scale-105
hover:bg-blue-500
hover:shadow-lg
hover:shadow-blue-500/30
active:scale-95
"
                    >

                        Select PDF

                    </button>

                </div>

            </div>

        </section>

    );

}

export default UploadCard;