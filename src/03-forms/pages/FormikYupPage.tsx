import '../styles/styles.css';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// };

export const FormikYupPage = () => {

    
    const { handleSubmit, handleReset, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName:'',
            lastName: '',
            email:''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName:Yup.string().max(15,'Debe tener maximo 15 caracteres').required('Requerido'),
            lastName:Yup.string().max(15,'Debe tener maximo 15 caracteres').required('Requerido'),
            email:Yup.string().email('Debe ser email valido').required('Requerido')
        })
    });

  return (
    <div>
        <h1>Formik yup</h1>

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input autoComplete='off' placeholder='First Name' type="text" {...getFieldProps('firstName')}  />
            { touched.firstName && errors.firstName && <span> {errors.firstName} </span>}

            <label htmlFor="lastName">Last Name</label>
            <input autoComplete='off' placeholder='Last Name' type="text" {...getFieldProps('lastName')}  />
            { touched.lastName && errors.lastName && <span> {errors.lastName} </span> }

            <label htmlFor="email">Email</label>
            <input autoComplete='off' type="email" placeholder="Email" {...getFieldProps('email')} />
            { touched.email && errors.email && <span> {errors.email} </span> }

            <button type='submit'>Submit</button>
            <button type='button' onClick={ handleReset }>Reset</button>
            
        </form>
    </div>
  )
}
