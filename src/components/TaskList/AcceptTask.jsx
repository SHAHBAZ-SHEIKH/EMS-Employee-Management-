import React from 'react'

const AcceptTask = ({data}) => {
    //console.log("data",data)
    return (
        <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.taskCategory}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='mt-3 text-sm'>{data.taskDescription}</p>

            <div className='flex justify-between mt-5'>
                <button className='bg-green-400 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-600 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>

        </div>
    )
}

export default AcceptTask
