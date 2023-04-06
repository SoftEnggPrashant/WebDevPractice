import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPage] = useState(0);
    const navigate = useNavigate()

    const baseUrl = "https://codehelp-apis.vercel.app/api/";

    const getPosts = async (page=1,tag,category) => {
        console.log('insite the context',category,tag);
        let url = `${baseUrl}get-blogs?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
            console.log('call tag page')
        }
        else if(category){
            url += `&category=${category}`;
            console.log('call category page')
        }
        console.log(url);
        setLoading(true);
        try {
            const  {data}  = await axios.get(url);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
            setPage(data.page);
        } catch (error) {
            setLoading(false);
            console.log(error);
         }
        setLoading(false);
    };

    const pageHandler = (page) => {
        navigate({search : `page=${page}`});
        setPage(page);
    };

    const value = {
        loading,
        posts,
        page,
        totalPages,
        setPosts,
        setLoading,
        setPage,
        setTotalPage,
        pageHandler,
        getPosts,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
