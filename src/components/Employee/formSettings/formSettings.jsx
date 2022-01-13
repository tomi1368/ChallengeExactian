import * as Yup from "yup";

const initialValue = {dni:""}

const schema = Yup.object().shape({
    dni: Yup.string().required("DNI is required")
})

const errorHandler = (error)=>{
    return{
        dni(){
            return ( error.dni && <div>{error.dni}</div>)
        }
    }
}

export {errorHandler,schema,initialValue}