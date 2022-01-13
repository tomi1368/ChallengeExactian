import {Routes,Route, Navigate} from "react-router-dom"
import Login from "./components/Login/Login"
import "./App.scss"
import NavBar from "./components/NavBar/NavBar"
import Employee from "./components/Employee/Employee"
import EmployeeSelected from "./components/EmployeeSelected/EmployeeSelected"
import Home from "./components/Home/Home"
function App() {

  return (
    <div className="App">
     <Routes>
       <Route path="/" element={
         <>
         <NavBar/>
         <Home/>
         </>
       }>

       </Route>
       <Route path="/login" element={
         localStorage.getItem("user-token") ? <Navigate to={"/"} replace></Navigate>  :  <Login/>
       } >

       </Route>
       <Route path="/employee" element={
         <NavBar></NavBar>
       }>
         <Route path="" element={
           <Employee/>
         }/>
         <Route path="find/" element={
           <EmployeeSelected/>
         } />
       </Route>
     </Routes>
    </div>
  )
}

export default App
