import React from "react";
import {Card} from 'antd';
import { Draggable } from "react-beautiful-dnd";

const TaskCard = (props) => {
  const { id, content } = props?.taskObj;
  const index = props?.index

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => {
        return (
          <div 
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            style={provided.draggableProps.style}
            className="taskCardContainer"
          >
            <Card>
            {content}
            </Card>
            
            
          </div>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;
