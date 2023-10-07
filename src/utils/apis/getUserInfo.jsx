import axios from "axios";
import { headerWithJWT } from "./getHeader";

export const getUserInfo = async (userId)=>{
    const headers = headerWithJWT();

    try{
        const res = await axios.get(
            `https://academics.newtonschool.co/api/v1/linkedin/user/${userId}`,
            headers
        )
        console.log(res);
    }catch(err){

    }
}