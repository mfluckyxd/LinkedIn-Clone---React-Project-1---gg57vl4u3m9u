import axios from "axios";
import { headerWithJWT } from "./getHeader";

export const upVotePostApi = async (postID) => {
  
  const headers = headerWithJWT();

  try {
    const res = await axios.post(
      `https://academics.newtonschool.co/api/v1/linkedin/like/${postID}`,
      {},
      headers
    );

    console.log(res);
    return (res.data)
  } catch (error) {
    console.log(error);
    return (error.message)
  }
  // unable to make API calls using JWt
};
