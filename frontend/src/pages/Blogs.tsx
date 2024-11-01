import { BlogCard,AppBar,BlogSkeleton } from "../components"
import { useBlogs } from "../hooks"


export const Blogs = () => {

    const {loading, blogs} = useBlogs();

    if(loading){
        return<>
            <BlogSkeleton />   
            <BlogSkeleton />   
            <BlogSkeleton />   
            <BlogSkeleton />   
        </>
    }

    return (<>
            <AppBar name="Prateek" />
            {blogs.map(blog =><BlogCard name={blog.author.name}
                                        title={blog.title}
                                        content={blog.content}
                                        id={blog.id} 
                                        date="November" />) }         
    </>)
}