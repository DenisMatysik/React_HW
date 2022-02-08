import React, { useEffect, useState } from 'react';
import Contacts from './hw_lesson6/pages/Contacts';
import Home from './hw_lesson6/pages/Home';
import Reviews from './hw_lesson6/pages/Reviews';
import Review from './hw_lesson6/pages/Review';
import {BrowserRouter, Route, Routes, Outlet, Link, useNavigate, useLocation} from 'react-router-dom'

// const Profile =({isAuth})=>{
//     const navigate = useNavigate();
//     useEffect(()=>{
//         if (!isAuth){
//             navigate("/")
//         }
//     },[])
//     return isAuth && <div>
//         User info
//     </div>
// }

//   function App6(){
//     //   const [userRole, setUserRole] = useState("guest")
//       const [isAuth, setIsAuth] = useState(false)
//     return (
//          <BrowserRouter>
//          <Link to="/profile">Go to profile</Link>
//          <button onClick={()=>{setIsAuth(!isAuth)}}>{isAuth ? "auth": "no auth"}</button>
//          <Routes>
//              <Route path="/" element={<div>Home page</div>}></Route>
//              <Route path="/profile" element={<Profile isAuth></Profile>}></Route>
//          </Routes>
//          </BrowserRouter>
//              )
//              }
// export default App6;

const SideMenu=()=>{
    let navigate = useNavigate();
  return (
    <div>
    <button onClick={()=>{
       navigate("/home") 
    }}>Home
    </button>
    <button onClick={()=>{
       navigate("/contacts") 
    }}>Contacts
    </button>
    <button onClick={()=>{
       navigate("/reviews") 
    }}>Reviews
    </button>
    </div>
  )
}

function App6(){
    return (
         <BrowserRouter>
         <Routes>
             <Route index element={<div>Choose page
                 <SideMenu></SideMenu>
                </div>}></Route>
             <Route path="/home" element={<div>
                 <SideMenu></SideMenu>
                 <Home></Home>
                </div>}></Route>
                <Route path="/contacts" element={<div>
                    <SideMenu></SideMenu>
                    <Contacts></Contacts>
                </div>}></Route>
                <Route path="/reviews" element={<div>
                    <SideMenu></SideMenu>
                    <Reviews></Reviews>
                </div>}></Route>
                <Route path="/reviews/:userId" element={<Review></Review>}></Route>
                <Route path="*" element={<div>Eror 404: page not found</div>}></Route>
         </Routes>
         </BrowserRouter>
    )
  }

export default App6;