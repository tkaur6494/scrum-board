import React from 'react'
import {Col } from "antd";
import TaskCard from './TaskCard';


const StatusList = (props) => {
    const {title,tasks} = props?.statusObj
    const taskListId = props?.taskListId

    return (
    <>
    <div  key={taskListId} style={{height:"450px"}}>
       
       
       {tasks.map((item,index)=>{
           return <TaskCard key={item?.id} taskObj={item} index={index}/>
       })}
       
       
       
   </div>
   <button>Add new task</button>
    </>
    
  )
}

export default StatusList 