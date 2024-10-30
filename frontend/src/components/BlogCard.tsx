import { BlogCardFooter } from "./BlogCardFooter";
import { BlogCardHeader } from "./BlogCardHeader";
import {Link} from 'react-router-dom'

interface BlogCardProps {
  id: string
  name: string;
  date: string;
  title: string;
  content: string;
}

export const BlogCard = ({ id, name, date, title, content }: BlogCardProps) => {
  return (
    <>
        <Link to={`/blog/${id}`}>
            <div className="flex justify-center w-full cursor-pointer ">
            <div className="flex flex-col w-full max-w-3xl p-3 m-3 border-b shadow-xl">
              <div>
                <BlogCardHeader name={name} date={date} />
              </div>
              <div className="font-extrabold font-serif text-2xl px-6">{title}</div>
              <div className="font-serif px-6 text-lg">
                {content.slice(0, 100) + "..."}
              </div>
              <div>
                <BlogCardFooter content={content} />
              </div>
            </div>
          </div>
        </Link>      
    </>
  );
};
