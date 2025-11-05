export default function Footer() {
    return (
        <footer
            className="relative z-50 flex items-center justify-between w-full min-h-[5rem] bg-white/70 shadow px-6 lg:px-28 backdrop-blur-md border-t border-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left text */}
                <p className="text-gray-700 text-sm text-center font-bold md:text-left">
                    © {new Date().getFullYear()} Hajar’s Writings. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
