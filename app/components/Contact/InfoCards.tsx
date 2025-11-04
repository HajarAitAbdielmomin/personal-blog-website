import { Mail, Github, Linkedin, ExternalLink  } from "lucide-react";

const infos = [
    {
        icon: <Mail className="text-white w-6 h-6" />,
        title: "Email Us",
        text: "I usually reply within a day",
        detail: "hajar.aitabdielmomin@gmail.com",
    },
    {
        icon: <Github className="text-white w-6 h-6" />,
        title: "GitHub",
        text: "Explore my projects and see what I’ve been building",
        detail: "github.com/Hajar",
    },
    {
        icon: <Linkedin className="text-white w-6 h-6" />,
        title: "Visit Us",
        text: "Let’s connect professionally and grow our network",
        detail: "linkedin.com/in/hajar",
    },
];

export default function InfoCards() {
    return (
        <div className="flex flex-col gap-5 w-full">
            {infos.map((info, idx) => (
                <div
                    key={idx}
                    className="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all duration-300"
                >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">{info.icon}</div>
                    <div className="text-left">
                        <h4 className="font-semibold text-gray-800">{info.title}</h4>
                        <p className="text-sm text-gray-500">{info.text}</p>
                        {idx === 0 ? (
                            <a 
                                href={`mailto:${info.detail}`}
                                className="text-blue-600 mt-1 text-sm font-medium hover:underline cursor-pointer"
                            >
                                {info.detail}
                            </a>
                        ) : (
                            idx === 2 ? (
                                <a
                                    href="https://www.linkedin.com/in/hajar-ait-abdielmomin-98638421b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 mt-1 text-sm font-medium hover:underline cursor-pointer"
                                >
                                    <span className="flex items-center gap-1">
                                        {info.detail}
                                        <ExternalLink className="w-3 h-3" />
                                    </span>
                                </a>
                            ) : (
                                <a
                                    href="https://github.com/HajarAitAbdielmomin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 mt-1 text-sm font-medium hover:underline cursor-pointer"
                                >
                                    <span className="flex items-center gap-1">
                                        {info.detail}
                                        <ExternalLink className="w-3 h-3"/>
                                    </span>
                                </a>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
