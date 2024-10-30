
interface BlogCardHeaderProps{
    name: string,
    date: string
}
export const BlogCardHeader = ({name, date}: BlogCardHeaderProps) =>{
    return <>
        <div className="w-full p-3 m-2 flex justify-start">
            <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{name ? name[0] : 'A'}</span>
            </div>
            <div className="px-2 font-serif">{name}</div>
            <div className="px-1 text-slate-500 font-serif">{date}</div>
        </div>
    </>
} 