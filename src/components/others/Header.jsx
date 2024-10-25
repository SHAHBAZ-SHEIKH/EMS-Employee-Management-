import React from 'react'

const Header = ({changeUser,data}) => {
   //console.log("data",data)

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser","")
    changeUser("")
  }


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{data.firstName}</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white rounded-sm py-2 px-5 text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
