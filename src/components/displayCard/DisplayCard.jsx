import React from "react";
import "../../style.css";
import { Avatar, Button } from "antd";
import { UserOutlined } from '@ant-design/icons';
import "./card.css"
import { removeCard } from "../../features/post/postSlice";
import { useDispatch } from "react-redux";
export const DisplayCard = ({data}) => {
    const {title,body,id}= data
    const dispatch= useDispatch()

    const truncateStr = (str,char)=>{
     return str.slice(0,char)
    }
  return (
    <div className="common-flex a-start card-container gap-sm">
      <div>
        <Avatar icon={<UserOutlined/>}/>
      </div>
      <div className="common-col a-start">
        <h4 className="m-zero text-left">{truncateStr(title,50)}....</h4>
        <p className="m-zero text-left">{truncateStr(body,100)}....</p>
       
      </div>
      <div>
        <Button onClick={()=> dispatch(removeCard(id))}>x</Button>
      </div>
    </div>
  );
};
