import React, { useContext, useEffect } from 'react'
import { authProvider } from '../../context/AuthContext'

const NewTask = ({ data, allData }) => {
  
  const [userData, setUserData] = useContext(authProvider); // Using context

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employees"));
    if (storedData) {
      setUserData(storedData); // Set context data on mount
    }
  }, [setUserData]);
  

  const acceptHandler = (allData) => {
    const newData = userData.find((item)=>item.id === allData)
    const newTasks = newData.tasks.map((item)=>{
      if(item.newTask){
        return {
          ...item,
          active: true,
          newTask: false
        }
      }
      return item
    })

    newData.tasks = newTasks
    newData.tasksCount = {
      ...newData.tasksCount,
      active: newData.tasksCount.active + 1
    }

    setUserData((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.id === newData.id) {
          return newData;
        }
        return item;
      });
      return updatedData;
    });

    localStorage.setItem("employees", JSON.stringify(newData));

    setUserData(newData);
    localStorage.setItem("employees", JSON.stringify(newData));

    console.log("newData", newData.tasks)
  }
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.taskCategory}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='mt-3 text-sm'>{data.taskDescription}</p>
      <div className='mt-4'>
        <button onClick={() => acceptHandler(allData.id)} className='bg-blue-600 py-1 px-2 text-sm'>Accept Task</button>
      </div>

    </div>
  )
}

export default NewTask
