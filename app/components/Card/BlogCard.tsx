
export default function BlogCard(
    {
        image,
        title,
        desc,
    }: {
        image: string,
        title: string,
        desc: string,
    }
) {
    return (
        <div
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden font-sans h-auto sm:h-[26rem] w-full max-w-sm mx-auto flex flex-col">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 sm:h-40 "
                />

            </div>

            <div className="p-5 text-left flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4">{desc}</p>
            </div>

            <div className="px-5 pb-5 mt-auto text-left">
                <a href="#" className="text-blue-600 font-medium hover:underline">
                    Read more →
                </a>
            </div>
        </div>
    );
}