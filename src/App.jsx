import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import {authProvider} from "./context/AuthContext"

function App() {

  const [user,setUser] = useState(null)
  const [loggedInUserData,setUserLoggedInUserData]=useState(null)
  const [userData,setUserData] = useContext(authProvider)
 
  

  

  useEffect(() => {
    
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setUserLoggedInUserData(loggedInUser.data);
    }
  }, []);



  const handleLogin = (email,password)=>{
    if(email === "admin@example.com" && password === "123"){
      
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
      
      // console.log("this is admin")

    }
    else if(userData){
      const employee = userData.find(employee=>employee.email === email && employee.password === password)
      if(employee){
        setUser("employee")
        
        setUserLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
        // console.log("this is employee")
      }
      
     
    }
    else{
      alert("please enter correct email and password")
    }
  }

  // console.log("loggedInUserData",loggedInUserData)

  

  return (
    <>

      {!user ?<Login handleLogin={handleLogin}/>:
      user === "admin" ? <AdminDashboard changeUser={setUser} data={{firstName:"Admin"}}  /> : (user=="employee" ?<EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> :null) }
      {/* {
        user === "admin" ? <AdminDashboard/> : <EmployeeDashboard/>
      } */}
      
      
    </>

  )
}

export default App
