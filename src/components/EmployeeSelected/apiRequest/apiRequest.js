import axios from "axios"

export const reqEmployee = async(setEmployee,query,setError,setLoading)=>{
    const baseUrl = "https://telecom.exactian.info/ws2/segfi/employees/Employees"
    try{
        let employee = await axios({
            method:"GET",
            url: `${baseUrl}${query}`,
            headers:{
                Authorization:`Bearer ${localStorage.getItem("user-token")}`
            }
        })
        setEmployee(employee.data.response[0])
    }catch(err){
        setError(err.response.data.response.errors[0])
    }finally{
        setLoading(false)
    }
}