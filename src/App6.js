import React, { useEffect, useState } from 'react';
import Home from './hw_lesson6/pages/Home';
import Articles from './hw_lesson6/pages/Articles';
import About from './hw_lesson6/pages/About';
import {BrowserRouter, Route, Routes, Outlet, Link, useNavigate, useLocation} from 'react-router-dom'

// const Layout = () =>{
//     let navigate = useNavigate();
//     return <div>
//         Header
//         <button onClick={()=>{
//             navigate("/")
//         }}>Back</button>
//         {/* <Link to="/">Home</Link> */}
//         <Outlet></Outlet>
//     </div>
// }

// const Layuot = () =>{
//     let navigate = useNavigate();
//     return <div>
//     <button onClick={()=>{
//        navigate("/home") 
//     }}>Home
//     </button>
//     <button onClick={()=>{
//        navigate("/about") 
//     }}>About
//     </button>
//     <button onClick={()=>{
//        navigate("/articles") 
//     }}>Articles
//     </button>
//     <button onClick={()=>{
//         navigate("*")
//     }}>All</button>
// </div>;
// }

const Profile =({isAuth})=>{
    const navigate = useNavigate();
    useEffect(()=>{
        if (!isAuth){
            navigate("/")
        }
    },[])

    return isAuth && <div>
        User info
    </div>
}

const Profile =()=>{
     <div>
        User info
    </div>
}

// function App6(){
//     return (
//          <BrowserRouter>
//          <Routes>
//              <Route path="/nav" element={<div>
//                 <Layuot></Layuot>
//              </div>}></Route>
//              <Route path="/home" element={<div>
//                 <Layuot></Layuot>
//                 <Home></Home>
//              </div>}></Route>
//              <Route path="/about" element={<div>
//                 <Layuot></Layuot>
//                 <About></About>
//              </div>}></Route>
//              <Route path="/articles" element={<div>
//                 <Layuot></Layuot>
//                 <Articles></Articles>
//                  </div>}></Route>
//              <Route path="*" element={<div>
//                 <Layuot></Layuot>
//                  <Home></Home>
//                  <About></About>
//                  <Articles></Articles>
//              </div>}></Route>
//          </Routes>
//          </BrowserRouter>
//     )
//   }

  function App6(){
    //   const [userRole, setUserRole] = useState("guest")
      const [isAuth, setIsAuth] = useState(false)
    return (
         <BrowserRouter>
         <Link to="/profile">Go to profile</Link>
         <button onClick={()=>{setIsAuth(!isAuth)}}>{isAuth ? "auth": "no auth"}</button>
         <Routes>
             <Route path="/" element={<div>Home page</div>}></Route>
             <Route path="/profile" element={<Profile isAuth></Profile>}></Route>
         </Routes>
         </BrowserRouter>
             )
             }

export default App6;

// function App6(){
//     return (
//          <BrowserRouter>
//          <Routes>
//              <Route path="/" element={<div>Home page</div>}></Route>
//              <Route path="/about" element={<Layout></Layout>}>
//                  <Route path="next" element={<div>Next page</div>}></Route>
//              </Route>
//              <Route path="*" element={<div>404 Page not found</div>}></Route>
//          </Routes>
//          </BrowserRouter>
//     )
//   }

// export default App6;