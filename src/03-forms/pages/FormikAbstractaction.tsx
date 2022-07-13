import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MySelect, MyCheckBox } from '../components';

export const FormikAbstractaction = () => {


  return (
    <div>
        <h1>Formik Abstractaction</h1>

        <Formik
            initialValues={ {
                firstName:'',
                lastName: '',
                email:'',
                terms: false,
                jobType:''
            }  }
            onSubmit={ (values) => {
                console.log("🚀 ~ file: FormikComponents.tsx ~ line 44 ~ FormikComponents ~ values", values);
            }}
            validationSchema={
                Yup.object({
                    firstName:Yup.string().max(15,'Debe tener maximo 15 caracteres').required('Requerido'),
                    lastName:Yup.string().max(15,'Debe tener maximo 15 caracteres').required('Requerido'),
                    email:Yup.string().email('Debe ser email valido').required('Requerido'),
                    terms:Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType:Yup.string().notOneOf(['it-junior'],'Esta opcion no es permitida').required('Requerido'),
                })
            }
        >
            { (formik) => (
                    <Form>
                        <MyTextInput label="First name" name="firstName" placeholder="First Name" autoComplete="off" />
                        <MyTextInput label="Last name" name="lastName" placeholder="Last Name" autoComplete="off" />
                        <MyTextInput label="Email" name="email" placeholder="Email" autoComplete="off" />

                        <MySelect label='Job Type' name="jobType" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">it-Senior</option>
                            <option value="it-junior">it-Junior</option>
                        </MySelect>

                        <MyCheckBox label="Terms and conditions" name='terms' />
    
                        <button type='submit'>Submit</button>
                </Form>
                )
            }
        </Formik>

       
    </div>
  )
}
