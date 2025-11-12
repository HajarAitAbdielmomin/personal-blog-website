
interface SearchBarProps {
    onSearch: (query: string) => void;
    searchQuery: string;
}

export default function SearchBar({ onSearch, searchQuery }: SearchBarProps) {
    return (
        <div className="flex justify-center w-full px-4 py-5 bg-transparent">
            <div className="relative w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Search by title, date, or description..."
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