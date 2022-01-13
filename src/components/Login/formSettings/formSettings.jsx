import * as Yup from "yup";


const initialValue = {user_name:"",password:""}

const Schema = Yup.object().shape({
    user_name: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });


const errorHandler = (errors)=>{
    return{
        userName(){
            return (
                errors.user_name && <div>{errors.user_name}</div>
            )
        },
        password(){
            return (
                errors.password && <div>{errors.password}</div>
            )
        }
    }
}

export {errorHandler,Schema,initialValue}