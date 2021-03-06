import React from "react";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

const StatusList = (props) => {
  const { title, tasks } = props?.statusObj;
  const taskListId = props?.taskListId;
  


  

  return (
    <>
      <div key={taskListId} style={{ height: "450px" }}>
        {tasks.map((item, index) => {
          return <TaskCard key={item?.id} taskObj={item} index={index} />;
        })}
      </div>
      
    </>
  );
};

export default StatusList;
