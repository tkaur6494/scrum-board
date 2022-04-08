import ScrumBoard from "../Components/ScrumBoard";

import { shallow, } from "enzyme";
import React from "react";
import { Button } from "antd";
import AddTaskModal from "../Components/AddTaskModal";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
  })),
});

jest.mock('react-beautiful-dnd', () => ({
    Droppable: ({ children }) => children({
      draggableProps: {
        style: {},
      },
      innerRef: jest.fn(),
    }, {}),
    Draggable: ({ children }) => children({
      draggableProps: {
        style: {},
      },
      innerRef: jest.fn(),
    }, {}),
    DragDropContext: ({ children }) => children,
  }));

  
describe("ScrumBoard testing Suite - UI Elements Rendered Properly", () => {
  const wrapper = shallow(<ScrumBoard></ScrumBoard>);
   
  test("Scrum board render", () => {
    expect(wrapper.find("#scrumBoardTitle").length).toBe(1);
  });
  test("Number of List Cards drawn", () => {
    //static data in the component so can be tested directly
    expect(wrapper.find(".taskListContainer").length).toBe(4);
  });
  test("Add new Task Button Exists", () => {
    expect(wrapper.find("#addTaskBtn").length).toBe(1);
    
  });
  
});

describe("ScrumBoard testing suite Click functionality ",()=>{
    test("Modal Opening on Add Task", () => {
        const wrapper = shallow(<ScrumBoard></ScrumBoard>)
    wrapper.find(Button).simulate("click");
    wrapper.update();
    expect(wrapper.find(AddTaskModal).length).toBe(1)
    
    })

   

})

