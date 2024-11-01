import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { AppBar, BlogDetail,BlogSkeleton } from "../components";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />

        </>;
    }

    return (
        <>
            <AppBar name="Prateek" />
            {blog ? <BlogDetail blog={blog} /> : <>Blog not found.</>}
        </>
    );
};
