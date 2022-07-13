import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register formikk page</h1>

        <Formik
            initialValues={ {
                name:'',
                email:'',
                password1: '',
                password2:''
            }  }
            onSubmit={ (values) => {
                console.log("🚀 ~ file: FormikComponents.tsx ~ line 44 ~ FormikComponents ~ values", values);
            }}
            validationSchema={
                Yup.object({
                    name:Yup.string()
                            .min(2, 'Debe de tener minimo 2 caracteres')
                            .max(15,'Debe tener maximo 15 caracteres')
                            .required('Requerido'),
                    email:Yup.string()
                             .email('Debe ser email valido')
                             .required('Requerido'),
                    password1:Yup.string()
                                 .min(6, 'Debe de tener minimo 6 caracteres')
                                 .max(15,'Debe tener maximo 15 caracteres')
                                 .required('Requerido'),
                    password2:Yup.string()
                                 .min(6, 'Debe de tener minimo 6 caracteres').max(15,'Debe tener maximo 15 caracteres')
                                 .oneOf([Yup.ref('password1')],'Las contraseñas deben ser iguales')
                                 .required('Requerido')                    
                })
            }
        >
            { ({ handleReset }) => (
                    <Form>
                        <MyTextInput name="name" placeholder="Name" autoComplete="off" />
                        <MyTextInput name="email" placeholder="Email" autoComplete="off" />
                        <MyTextInput name="password1" type='password' placeholder="Password" autoComplete="off" />
                        <MyTextInput name="password2" type='password' placeholder="Repeat password" autoComplete="off" />                
    
                        <button type='submit'>Create</button>
                        <button type='button' onClick={ handleReset }>Reset form</button>
                </Form>
                )
            }
        </Formik>

    </div>
  )
}
