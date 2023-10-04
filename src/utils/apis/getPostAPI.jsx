import axios from "axios"
import { headerWithProjectIdOnly } from "./getHeader"

export const getPosts = async(pageNumber)=>{
    const headers = headerWithProjectIdOnly()

    try {
        const res = await axios.get(
            `https://academics.newtonschool.co/api/v1/linkedin/post?limit=20&page=${pageNumber}`,
            headers
        );

        return {
            success: true,
            data: res.data.data
        }

    } catch (error) {
        return{
            success: false,
            msg: error.message
        }
    }
}