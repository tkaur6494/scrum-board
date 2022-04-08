import React from 'react'

const StatusList = (props) => {
    const {title,tasks} = props?.statusObj

    return (
    <>
        <h1>
            {title}
        </h1>
        {tasks.map(item=>{
            return <div key={item?.id}>{item?.content}</div>
        })}
        <button>Add new task</button>
    </>
  )
}

export default StatusList 