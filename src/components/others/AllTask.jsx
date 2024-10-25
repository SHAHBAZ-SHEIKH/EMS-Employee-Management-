import React, { useContext } from 'react'
import { authProvider } from '../../context/AuthContext'

const AllTask = () => {

    const [userData,setUserData] = useContext(authProvider)
    

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded  '>
            <div className='bg-red-400 py-2 mb-2 px-4 flex justify-between rounded'>
                <h2 className='text-xl font-medium text-center w-1/5 '>Employee Name</h2>
                <h3 className='text-xl font-medium text-center w-1/5' >New Task</h3>
                <h5 className='text-xl font-medium text-center w-1/5 '>Active Task</h5>
                <h5 className='text-xl font-medium text-center w-1/5'>Completed Task</h5>
                <h5 className='text-xl font-medium text-center w-1/5 '>Failed Task</h5>
            </div>

            <div className=''>
                {
                    userData.map((elem) => {
                        return (
                            <div key={elem.id} className='border-emerald-500 border-2 py-2 mb-2 px-4 flex justify-between rounded'>
                                <h2 className='text-xl font-medium text-center w-1/5 '>{elem.firstName}</h2>
                                <h3 className='text-xl font-medium text-center w-1/5 text-blue-600' >{elem.tasksCount.newTask}</h3>
                                <h5 className='text-xl font-medium text-center w-1/5 text-yellow-600'>{elem.tasksCount.active}</h5>
                                <h5 className='text-xl font-medium text-center w-1/5 text-white'>{elem.tasksCount.completed}</h5>
                                <h5 className='text-xl font-medium text-center w-1/5 text-red-600'>{elem.tasksCount.failed}</h5>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AllTask
