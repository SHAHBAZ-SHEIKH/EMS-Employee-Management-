import React from 'react'

const TaskListNumer = ({data}) => {
  // console.log("data",data)
  return (
    <div className='flex mt-10 flex-wrap justify-between gap-5'>
      <div className='w-full md:w-[45%] lg:w-[23%] rounded-xl py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.tasksCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-full md:w-[45%] lg:w-[23%] rounded-xl py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.tasksCount.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>
      <div className='w-full md:w-[45%] lg:w-[23%] rounded-xl py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.tasksCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-full md:w-[45%] lg:w-[23%] rounded-xl py-6 px-9 bg-red-600'>
        <h2 className='text-3xl font-semibold'>{data.tasksCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumer;
