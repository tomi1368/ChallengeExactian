import React,{useState} from 'react'
import { Formik, Form, Field } from "formik";
import { errorHandler,Schema,initialValue } from './formSettings/formSettings';
import { Link, useNavigate } from 'react-router-dom';
import { validationForm } from './apiRequest/loginRequest';
import "./Login.scss"






const Login = () => {
    const navigate = useNavigate()
    const [modalError,setModalError] = useState(null)
    
    
    return (
        <>
        {modalError && <div className='login-error'>Error al iniciar sesión</div>}
        <div className='login'>
            <div className="login-logo">
                <Link to={"/"}>
                <img src="data:image/png;base64,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" alt="" />
                </Link>
            </div>
            <div className="login-form">
                <h2>Sign-In</h2>
            <Formik
            initialValues={initialValue}
            validationSchema={Schema}
            onSubmit={(v)=>validationForm(v,navigate,setModalError)}
            >
                {({ errors })=>{
                    return(
                        <Form className='login-form__container'>
                            <Field name="user_name" className='login-form__container__field' placeholder="Enter username..." />
                            {errorHandler(errors).userName()}
                            <Field name="password" className='login-form__container__field' type="password" placeholder="Enter your Password..."/>
                            {errorHandler(errors).password()}
                            <button type='submit'>Sign-In</button>
                        </Form>
                    )
                }}

            </Formik>
            </div>
        </div>
        </>
    )
}

export default Login
