import SearchBar from "../SearchBar/SearchBar";
export default function NavigationHeader() {
    return (

    <div className="relative z-50 flex items-center justify-between w-full min-h-[5rem] bg-white/70 shadow px-4 lg:px-28 backdrop-blur-md">

        <div className="flex items-center gap-2">
            <img
                src="/personal-brand-logo.png"
                alt="Logo"
                className="h-20 w-auto object-contain"
            />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
            <SearchBar/>
        </div>

        <div>
            <button className="px-8 py-2 text-sm font-medium text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition cursor-pointer shadow-lg">
                Contact
            </button>
        </div>

    </div>
)

}