import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import Carts from "./components/Carts";

function App() {
  return (
    <VStack w={'100vw'} h={'100vh'} >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
