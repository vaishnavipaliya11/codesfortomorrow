import axios from "axios";
import { getPostUrl } from "../../../constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("/post/all", async () => {
  try {
    const data = await axios(getPostUrl);
  
    return data.data;
  } catch (error) {
    console.log(error);
  }
});
