import { Avatar, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showHideModal } from "../../features/feedback/feedbackSlice";
import { FeedBackModal } from "../modal/FeedBackModal";
import "../../style.css";
import { toggleCard } from "../../features/post/postSlice";
import { UserOutlined } from '@ant-design/icons';

export const SideBar = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store) => store.feedBack);
  return (
    <div className="common-col  gap-sm">
      <div className="common-flex a-start card-shadow pd-sm">
        <Avatar icon={<UserOutlined/>}/>
        <div className="text-center">
          <h3 className="m-zero text-left">Hi Reader</h3>
          <p className="m-zero text-left">Here's your news</p>
        </div>
      </div>
      <div className="card-shadow pd-sm text-center">
        <h3>View Toggle</h3>
        <Button onClick={() => dispatch(toggleCard())}>View Toggle</Button>
      </div>
      <div className="card-shadow pd-sm text-center">
        <h3>Have a FeedBack?</h3>
        <Button onClick={() => dispatch(showHideModal())}>
          We are Listening
        </Button>
      </div>
      {isModalOpen ? <FeedBackModal /> : ""}
    </div>
  );
};
