import { Avatar } from "./Avatar"

interface BlogCardHeaderProps{
    name: string,
    date: string
}
export const BlogCardHeader = ({name, date}: BlogCardHeaderProps) =>{
    return <>
        <div className="w-full p-3 m-2 flex justify-start">
            <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <Avatar name={name}/>
            </div>
            <div className="px-2 font-serif">{name}</div>
            <div className="px-1 text-slate-500 font-serif">{date}</div>
        </div>
    </>
} 