import { useHistory, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Trending from "./components/Trending";
import { useEffect, useState } from "react";
import Analysis from "./components/Analysis";
function App() {
  // const history = useHistory();

  // const isUserLoggedIn=()=>{
  //   const token = localStorage.getItem("token");
  //   if(!token){
  //     history.push("/login");
  //   }
  // }
  // useEffect(()=>{
  //    isUserLoggedIn();
  // },[])


  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/Analysis" element={<Analysis/>}/>
      </Routes>
      
    </div>
  );
}

// return (
//   <div className="App">
//   <Routes>
//     <Route
//       path="/"
//       element={<Form setIsAuthenticated={setIsAuthenticated} />}
//     />
//     <Route
//       path="/dashboard"
//       element={
//         isAuthenticated ? (
//           <Dashboard />
//         ) : (
//           <Navigate to="/" replace={true} />
//         )
//       }
//     />
//   </Routes>
// </div>
// );


export default App;

