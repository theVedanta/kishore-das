import AdminNav from "./AdminNav";
import IndexCMS from "./IndexCMS";
import AdminBlog from "./AdminBlog";
import AdminBlogAdd from "./AdminBlogAdd";

const AuthedAdmin = ({ page }) => {
    return (
        <>
            <AdminNav />
            {page === "CMS" ? (
                <IndexCMS />
            ) : page === "blog" ? (
                <AdminBlog />
            ) : (
                <AdminBlogAdd />
            )}
        </>
    );
};

export default AuthedAdmin;
