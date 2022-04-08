import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import StatusList from "./StatusList";
import { Layout, Row, Col, Typography } from "antd";
import "antd/dist/antd.css";

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
  const [completeTaskList, setCompleteTaskList] = useState({});

  

  useEffect(() => {
    setCompleteTaskList(data);
  }, []);

  return (
    <Content>
      <Row justify="center">
        <Title level={3}>ScrumBoard</Title>
      </Row>

      <Row justify="space-between">
        {Object.keys(completeTaskList).map((listId) => {
          return (
            <Col  span={5} key={listId} style={{ background: "lightgrey" }}>
              <StatusList key={listId} statusObj={completeTaskList[listId]} />
            </Col>
          );
        })}
      </Row>
    </Content>
  );
};

export default ScrumBoard;
