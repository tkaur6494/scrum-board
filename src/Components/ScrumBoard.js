import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import StatusList from "./StatusList";
import { Layout, Row, Typography,Button } from "antd";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "antd/dist/antd.css";
import AddTaskModal from "./AddTaskModal";

const { Content } = Layout;

const { Title } = Typography;

const data = {
  [uuidv4()]: {
    title: "Story",
    tasks: [
      {
        id: uuidv4(),
        content: "To-Do1",
      },
      {
        id: uuidv4(),
        content: "To-Do2",
      },
      {
        id: uuidv4(),
        content: "To-Do3",
      },
    ],
  },
  [uuidv4()]: {
    title: "Not Started",
    tasks: [],
  },
  [uuidv4()]: {
    title: "In Progress",
    tasks: [],
  },
  [uuidv4()]: {
    title: "Done",
    tasks: [],
  },
};

const ScrumBoard = () => {
  const [completeTaskList, setCompleteTaskList] = useState(data);
  const [showAddTaskModal,setShowAddTaskModal] = useState(false)

  const onDragEnd = (result, completeTaskList, setCompleteTaskList) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = completeTaskList[source.droppableId];
      const destColumn = completeTaskList[destination.droppableId];

      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
     
      setCompleteTaskList({
        ...completeTaskList,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destItems,
        },
      });
    } else {
      const column = completeTaskList[source.droppableId];
      const copiedItems = [...column.tasks];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setCompleteTaskList((prevList) => ({
        ...prevList,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems,
        },
      }));
    }
  };

  const onClickShowModal = () => {
        setShowAddTaskModal(prevState=>!prevState)
    }

    const onSubmit= (newTask) => {
        
        let taskListSelected = completeTaskList[newTask?.id]
        taskListSelected?.tasks.push({"id":uuidv4(),"content":newTask?.content})
        setCompleteTaskList({
            ...completeTaskList,
            [newTask?.id]:taskListSelected
        })
        setShowAddTaskModal(false)
    }

  return (
    <Content>
      <Row justify="center">
        <Title level={3}>ScrumBoard</Title>
      </Row>

      <Row justify="space-around">
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, completeTaskList, setCompleteTaskList)
          }
        >
          {Object.keys(completeTaskList).map((listId) => {
            return (
              <div key={listId} className="taskListContainer">
                <Title level={4}>{completeTaskList[listId].title}</Title>
                <Droppable key={listId} droppableId={listId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        
                        key={listId} 
                      >
                        <StatusList
                          key={listId}
                          statusObj={completeTaskList[listId]}
                          taskListId={listId}
                          
                        />
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
                
              </div>
            );
          })}
        </DragDropContext>
      </Row>
      <Row justify="center">
          <Button type="primary" onClick={()=>onClickShowModal()}>Add New Task</Button>
      </Row>
      <AddTaskModal onClickShowModal={onClickShowModal} showAddTaskModal={showAddTaskModal} completeTaskList={completeTaskList} onSubmit={(newTask)=>{onSubmit(newTask)}}/>
      
    </Content>
  );
};

export default ScrumBoard;
