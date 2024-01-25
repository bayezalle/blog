// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Blog from './Component/blog/Blog';
import ListBlog from "./Component/ListBlog/ListBlog";

function App() {
  return (
    <div className="App">
      <Blog />
      <ListBlog />
    </div>
  );
}

export default App;
