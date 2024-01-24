// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './Component/Home/Home';
import Blog from './Component/blog/Blog';
import ListBlog from "./Component/ListBlog/ListBlog";

function App() {
  return (
    <div className="App">
      <Blog />
      {/* <Home /> */}
      <ListBlog />
    </div>
  );
}

export default App;
