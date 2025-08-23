import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
   <div className="d-flex flex-column min-vh-100">
      <Navbar setCategory={setCategory} />
      <div className="flex-grow-1">
        <NewsBoard category={category} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
