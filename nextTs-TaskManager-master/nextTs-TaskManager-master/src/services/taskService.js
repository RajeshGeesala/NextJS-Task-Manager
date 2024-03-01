import { httpAxios } from "@/helpers/httpHelpers"

export const addTask = async (task) => {
    const result = await  httpAxios.post("/api/task" , task).then(( response)=>  response.data) ;
    return result
} 