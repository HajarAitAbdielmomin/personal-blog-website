import SearchBar from "./SearchBar";
export default function NavigationHeader() {
    return (

        <div
            className="z-50 flex items-center justify-between  bg-opacity-70 w-full min-h-[5rem] shadow px-3 lg:px-28">
            <SearchBar/>
        </div>

    )

}