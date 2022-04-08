import React from "react";
import { Modal, Form, Input, Button, Select } from "antd";

const { Option } = Select;

const AddTaskModal = (props) => {
  const {onClickShowModal,showAddTaskModal,completeTaskList,onSubmit} = props;
  

  return (
    <Modal visible={showAddTaskModal} closable={false} footer={null}>
      <Form
        onFinish={(values) => {
          onSubmit(values);
        }}
      >
        <Form.Item label="Task Type" rules={[{ required: true }]} name="id">
          <Select placeholder="Select a task type">
            {Object.entries(completeTaskList)?.map((item) => {
              return (
                <Option key={item?.[0]} value={item?.[0]}>
                  {item?.[1]?.title}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label="Decsription" rules={[{ required: true }]} name="content">
          <Input placeholder="Add Task Description" />
        </Form.Item>
        <Form.Item  wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={onClickShowModal} >
            Cancel
          </Button>
        </Form.Item>
        
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
