import axios from 'axios';
import { clearModal } from '../functions/modalfunctions';


const url = "https://telecom.exactian.info/ws2/segfi/users/Login"

export const validationForm = async (v,navigate,setModalError)=>{
    try {
        let userLogged  = await axios.post(url,v)     
        localStorage.setItem("user-token",userLogged.data.response.token)
        localStorage.setItem("user-name",userLogged.data.response.user_name)
        navigate("/")
    } catch (error) {
        setModalError(error)
        clearModal(setModalError)
    }
}