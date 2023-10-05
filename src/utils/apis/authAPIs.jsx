import axios from "axios";
import { authHeader } from "./getHeader";

export const signUpApi = async (userInfo) => {
  const headers = authHeader();

  try {
    const res = await axios.post(
      "https://academics.newtonschool.co/api/v1/user/signup",
      userInfo,
      headers
    );

    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    return {
      success: false,
      msg: err.message,
    };
  }
};

export const signInApi = async (userInfo)=>{
    const headers = authHeader();
    try {
        const res = await axios.post(
            "https://academics.newtonschool.co/api/v1/user/login",
            userInfo,
            headers
          );
          
          
          sessionStorage.setItem("authToken", JSON.stringify(res.data.token));
          sessionStorage.setItem("userName", res.data.data.name);
          sessionStorage.setItem("loginStatus", JSON.stringify(true));
          
          return{
            status:true
          }
    } catch (error) {
        return {
            status:false,
            error:error.message
        }
    }
}


