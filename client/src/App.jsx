import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return ( 
  <Router>  
           {/* <Routes>
                 <Route exact path='/' element={user ? <Home /> : <Link to="/register" />}></Route>
                 <Route exact path='/' element={!user ? <Register /> : <Link to="/" />}></Route>
                 <Route exact path='/' element={!user ? <Login /> : <Link to="/" />}></Route>
                 {user && (
                    <>
                      <Route path="/movies"  element=<Home type = "movie" /> />
                      <Route path ="/series" element=<Home type="series" /> />
                      <Route path="/watch" element=<Watch /> />
                    </>
                 )}
            </Routes>
  </Router>
);
}; */}

   <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/" element={<Home />} ></Route>
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        
        {/* {user && (
          <> */}

        <Route path="/movies" element={<Home type = "movies" />} />
        <Route path ="/series" element={<Home type = "series" />} />
        <Route path="/watch" element= {<Watch />} />
   </Routes>

</Router>
);
};

// //   //return <Register />;
// //   //return <Login />;
// //   //return <Watch />; */}
  
  


export default App;