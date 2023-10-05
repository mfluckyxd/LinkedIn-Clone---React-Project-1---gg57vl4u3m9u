import axios from "axios";
import { headerWithJWT } from "./getHeader";

export const upVotePostApi = async (postID) => {
  
  const headers = headerWithJWT();

  try {
    const res = await axios.post(
      `https://academics.newtonschool.co/api/v1/linkedin/like/${postID}`,
      headers
    );

    console.log(res);
  } catch (error) {
    console.log(error);
  }
  // unable to make API calls using JWt
};
