export const SearchBar = () => {
    return (
        <div className="flex items-center justify-center w-full pt-2 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35m2.85-7.65A8.5 8.5 0 1 1 3 8.5a8.5 8.5 0 0 1 16 0z"
                        />
                    </svg>
                </span>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out"
                />
            </div>
        </div>
    );
};
