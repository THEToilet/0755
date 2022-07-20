import axios, {AxiosResponse} from "axios";
import {ImagesListResponse} from "../type/API";

const testBaseURL = "http://localhost:8080"
const productionBaseURL = "http://localhost:8080"

const client = axios.create({
    baseURL:testBaseURL,
    responseType:"json",
    headers: {
        "Content-Type":"application/json"
    }
})

export const ImageList = () => {
   client.get("/images/list?offset=0") .then((response:AxiosResponse<ImagesListResponse>)=>{
        console.log(response)
   }).catch(()=>{
       // https://pbs.twimg.com/media/FVmgmgbaAAEaCEE.jpg:w
       

   })
}