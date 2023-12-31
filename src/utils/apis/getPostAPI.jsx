import axios from "axios";
import { headerWithProjectIdOnly } from "./getHeader";

export const getPosts = async (pageNumber,filter) => {
  const headers = headerWithProjectIdOnly();
  let apiURL;
    if (filter?.length>0) {
        apiURL = `https://academics.newtonschool.co/api/v1/linkedin/post?limit=20&page=${pageNumber}&search={"content":"${filter}"}`
    }else{
        apiURL = `https://academics.newtonschool.co/api/v1/linkedin/post?limit=20&page=${pageNumber}`
        console.log('trigger');
        
    }
  try {
    
    const res = await axios.get(
      apiURL,
      headers
    );

    return {
      success: true,
      data: res.data.data,
    };
  } catch (error) {
    return {
      success: false,
      msg: error.message,
    };
  }
};
export const getPostsBySearch = async (pageNumber,searchValue) => {
  const headers = headerWithProjectIdOnly();

  try {
    const res = await axios.get(
      `https://academics.newtonschool.co/api/v1/linkedin/post?limit=20&page=${pageNumber}`,
      headers
    );

    return {
      success: true,
      data: res.data.data,
    };
  } catch (error) {
    return {
      success: false,
      msg: error.message,
    };
  }
};
