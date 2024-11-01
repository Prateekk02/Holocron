export const Avatar = ({ name }: { name: string }) => {
    return (
        <>
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer bg-gradient-to-r from-emerald-600 to-blue-800">
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-800 text-white">
                    {name ? name[0] : ''}
                </span>
            </div>
        </>
    );
};
