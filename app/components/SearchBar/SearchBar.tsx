
export default function SearchBar() {
    return (
        <div className="flex justify-center w-full px-4 py-5 bg-transparent">
            <div className="relative w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <input
                    type="text"
                    placeholder="Search blog . . ."
                    className="block w-full pl-12 pr-4 py-3 text-gray-800 placeholder-gray-400
                 bg-white/70 border border-gray-300 rounded-full shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                 transition-all duration-300 ease-in-out
                 hover:shadow-md hover:bg-white/90"
                />
            </div>
        </div>

    )
}