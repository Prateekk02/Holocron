import { BlogProps } from "../hooks/useBlog"
import { Avatar } from "./Avatar" 

export const BlogDetail = ({blog}:{blog:BlogProps}) =>{
    return <>
        <div className="m-12 grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-8">
            <div className="px-3">
                <div className="my-3 font-serif text-4xl font-bold">{blog.title}</div>
                <div className="my-2 text-slate-600">Posted on August 24, 2023</div>
                <div className="text-justify text-base">{blog.content}</div>
            </div>
        </div>
        <div className="invisible sm:col-span-4 sm:visible">
            <div className="flex flex-col">
            <div className="text-center font-serif text-lg">Author</div>
            <div className="flex border-t">
                <div className="py-8">
                <div className="">
                    <Avatar name={blog.author.name} />
                </div>
                </div>
                <div className="p-3">
                <div className="mb-1 font-serif text-2xl font-bold">{blog.author.name}</div>
                <div className="font-serif text-base text-slate-500">Master of mirth, purveyor of puns, and the funniest person in the kingdom</div>
                </div>
            </div>
            </div>
        </div>
        </div>
 
    </>
}