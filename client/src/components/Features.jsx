import {
    FileText,
    CalendarDays,
    CircleDollarSign,
    MessageSquare
} from "lucide-react";

const features = [
    {
        icon: FileText,
        title: "AI Summary",
        text: "Instant summaries of any document."
    },
    {
        icon: CalendarDays,
        title: "Extract Dates",
        text: "Automatically detect deadlines."
    },
    {
        icon: CircleDollarSign,
        title: "Amounts",
        text: "Find prices and monetary values."
    },
    {
        icon: MessageSquare,
        title: "Ask Questions",
        text: "Chat naturally with your PDFs."
    }
];

function Features() {

    return (

        <section className="grid w-full max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">

            {features.map((feature) => {

                const Icon = feature.icon;

                return (

                    <div
                        key={feature.title}
                        className="
                        rounded-2xl
                        border
                        border-slate-700
                        bg-slate-900
                        p-6
                        transition
                        hover:-translate-y-1
                        hover:border-blue-500
                        hover:bg-slate-800/80
duration-300
hover:shadow-xl
hover:shadow-blue-500/10
                        "
                    >

                        <Icon
                            className="mb-5 text-blue-400"
                            size={34}
                        />

                        <h3 className="mb-3 text-xl font-semibold">

                            {feature.title}

                        </h3>

                        <p className="text-slate-400">

                            {feature.text}

                        </p>

                    </div>

                );

            })}

        </section>

    );

}

export default Features;