import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showHideModal } from "../../features/feedback/feedbackSlice";

export const FeedBackModal = () => {
  const { isModalOpen } = useSelector((store) => store.feedBack);
  const dispatch = useDispatch();
  const { Option } = Select;

  const handleCancel = () => {
    dispatch(showHideModal());
  };
  const userFeedBackHandler = (e) => {
    console.log(e.target);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Modal open={isModalOpen} onCancel={handleCancel}
    okButtonProps={{ style: { display: 'none' } }}
    cancelButtonProps={{ style: { display: 'none' } }}>
      <h4>We appreciate your feedBack</h4>
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="First Name">
            <Input
              type=""
              name="fname"
              onChange={(e) => userFeedBackHandler(e)}
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input type="" />
          </Form.Item>
          <Form.Item label="Address">
            <Input type="" />
          </Form.Item>
          <Form.Item label="Country">
            <Input type="" />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Mobile"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Feedback
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
