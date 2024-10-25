import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'

export  const authProvider = createContext()

const AuthContext = ({ children }) => {
/// localStorage.clear()

    const [userData,setUserData]=useState(null)
    
    
    useEffect(()=>{
        
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
        
    },[])




    return (
        <div>
            <authProvider.Provider value={[userData,setUserData]} >
                {children}
            </authProvider.Provider>

        </div>
    )
}

export default AuthContext
