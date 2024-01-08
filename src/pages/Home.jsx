import React, { useEffect } from "react";
import { DisplayCard } from "../components/displayCard/DisplayCard";
import { SideBar } from "../components/sidebar/SideBar";
import "../style.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../features/post/helpers/getPost";
import { Flex, Pagination, Spin } from "antd";
import { changePage } from "../features/post/postSlice";
import { VerticalCards } from "../components/displayCard/VerticalCards";

export const Home = () => {
  const dispatch = useDispatch();
  const { allPost, postLoading, currentPage, pageSize, isCardHorizontal } =
    useSelector((store) => store.post);

  const onShowSizeChange = (current, pageSize) => {
    dispatch(changePage());
  };

  const start = (currentPage - 1) * 6;
  const end = currentPage * 6;
  const renderPost = allPost?.slice(start, end);
  console.log(renderPost, "renderPost");
  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <div className="home-layout">
      {postLoading ? (
        <Flex align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      ) : (
        <>
          <SideBar />

          <div className={isCardHorizontal ? "horizontal-card-layout" : "vertical-card-layout"}>
            {renderPost?.map((data) => {
              return (
                <>
                  {isCardHorizontal ? (
                    <DisplayCard data={data} />
                  ) : (
                    <VerticalCards data={data} />
                  )}{" "}
                </>
              );
            })}
            <Pagination
              defaultCurrent={1}
              total={allPost?.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onChange={onShowSizeChange}
            />
          </div>
        </>
      )}
    </div>
  );
};
