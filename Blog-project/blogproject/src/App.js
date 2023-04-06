import { VStack } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AppContext from "./DataContext/BlogContext";
import BlogDetail from "./pages/BlogDetail";
import Category from "./pages/Category";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";

function App() {
  const { getPosts } = useContext(AppContext);

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <VStack>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/tag/:tag" element={<TagPage />} />
        <Route path="/detail/:id" element={<BlogDetail />} />
      </Routes>
    </VStack>
  );
}

export default App;
