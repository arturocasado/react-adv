import '../styles/styles.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// };

export const FormikComponents = () => {


  return (
    <div>
        <h1>Formik Components</h1>

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
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" placeholder="First Name" autoComplete="off" type="text" />
                        <ErrorMessage name='firstName' component="span"/>
    
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" placeholder="Last Name" autoComplete="off" type="text"/>
                        <ErrorMessage name='lastName' component="span"/>
    
                        <label htmlFor="email">Email</label>
                        <Field name="email" placeholder="Email" autoComplete="off" type="text"/>
                        <ErrorMessage name='email' component="span"/>

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">it-Senior</option>
                            <option value="it-junior">it-Junior</option>
                        </Field>
                        <ErrorMessage name='jobType' component="span"/>


                        <label >
                            <Field name="terms" type="checkbox"/>
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component="span"/>
    
                        <button type='submit'>Submit</button>
                </Form>
                )
            }
        </Formik>

       
    </div>
  )
}
