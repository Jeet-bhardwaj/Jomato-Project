import Home from "./Screen/Home";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Routes,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./Screen/Login";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/login" element = {<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
