import React from 'react'
import Header from '../others/Header'
import TaskListNumer from '../others/TaskListNumer'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data,changeUser}) => {
  // console.log("loggedInUserData",data)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={changeUser} data={data} />
      <TaskListNumer data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
