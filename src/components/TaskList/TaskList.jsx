import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    //console.log("data",data)
  return (
    <div id="taskList" className='h-[55%]  overflow-x-auto mt-10 py-5 flex gap-5 items-center justify-start flex-nowrap '>
        {
            data.tasks.map((item,indx)=>{
                if(item.active){
                    return <AcceptTask key={indx} data={item} />
                }
                if(item.completed){
                    return <CompleteTask key={indx} data={item}/>  
                }
                if(item.failed){
                    return <FailedTask key={indx} data={item}/>
                }
                if(item.newTask){
                    return <NewTask key={indx} data={item} allData={data} />
                }
            })
        }
        
      
    </div>
  )
}

export default TaskList
