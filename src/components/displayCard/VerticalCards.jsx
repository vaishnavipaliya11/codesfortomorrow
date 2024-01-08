import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

export const VerticalCards = ({ data }) => {
  const { title, body } = data;
  const truncateStr = (str,char)=>{
    return str.slice(0,char)
   }
  return (
    <div>
      {" "}
      <Card hoverable style={{ width: 240 }}>
        <Meta title={truncateStr(title,50)} description={truncateStr(body,100)} />
      </Card>
    </div>
  );
};
