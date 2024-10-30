import { BlogCard,AppBar } from "../components"
import { useBlog } from "../hooks"


export const Blogs = () => {

    const {loading, blogs} = useBlog();

    if(loading){
        return<>
            loading...   
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