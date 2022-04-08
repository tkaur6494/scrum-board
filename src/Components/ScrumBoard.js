import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import StatusList from './StatusList'


const data = {
    [uuidv4()]:{
        title:"To-Do",
        tasks:[{
            id:uuidv4(),
            content:"To-Do1"
        },{
            id:uuidv4(),
            content:"To-Do2"
        },{
            id:uuidv4(),
            content:"To-Do3"
        }]
    },
    [uuidv4()]:{
        title:"In Progress",
        tasks:[]
    },
    [uuidv4()]:{
        title:"Done",
        tasks:[]
    }
}



const ScrumBoard = () =>  {
    const [completeTaskList,setCompleteTaskList] = useState({})
    
    useEffect(()=>{
        setCompleteTaskList(data)
    },[])
  
    return (
        <div>
            ScrumBoard
            {
                Object.keys(completeTaskList).map((listId)=>{
                    return <StatusList key={listId} statusObj={completeTaskList[listId]}/>
                })
            }

        </div>
    )
}

export default ScrumBoard
