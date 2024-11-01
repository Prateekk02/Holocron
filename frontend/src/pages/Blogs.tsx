import { BlogCard,AppBar,Skeleton } from "../components"
import { useBlogs } from "../hooks"


export const Blogs = () => {

    const {loading, blogs} = useBlogs();

    if(loading){
        return<>
            <Skeleton />   
            <Skeleton />   
            <Skeleton />   
            <Skeleton />   
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