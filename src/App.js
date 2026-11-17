import "./App.css";
import Navbar from "./Mycomponents/Navbar";
import Home from "./Mycomponents/Home/Home";
import Blog from "./Mycomponents/Blog/Blog";

function App() {
  const isBlogPage = window.location.pathname.replace(/\/$/, "") === "/blog";

  return (
    <div className="site-shell">
      <Navbar isBlogPage={isBlogPage} />
      {isBlogPage ? <Blog /> : <Home />}
    </div>
  );
}

export default App;
