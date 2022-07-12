import '../styles/styles.css';
import { FormikErrors, useFormik } from 'formik'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
};

export const FormikBasicPage = () => {

    const validate = ({ firstName,lastName,email }:FormValues) => {
        const errors:FormikErrors<FormValues> = {};

        if(!firstName){
            errors.firstName = 'required';
        }else if (firstName.length >= 15){
            errors.firstName = 'Must be 15 characters or less';
        }

        if(!lastName){
            errors.lastName = 'required';
        }else if (lastName.length >= 10 ){
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }
        return errors;
    }

    const { handleChange, values, handleSubmit, handleReset, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName:'',
            lastName: '',
            email:''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    });

  return (
    <div>
        <h1>Formik basic tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input autoComplete='off' type="text" name="firstName" onBlur={ handleBlur } id="firstName" placeholder='First Name' onChange={ handleChange } value={ values.firstName } />
            { touched.firstName && errors.firstName && <span> {errors.firstName} </span>}

            <label htmlFor="lastName">Last Name</label>
            <input autoComplete='off' type="text" name="lastName" id="lastName" onBlur={ handleBlur } placeholder='Last Name' onChange={ handleChange } value={ values.lastName } />            
            { touched.lastName && errors.lastName && <span> {errors.lastName} </span> }

            <label htmlFor="email">Email</label>
            <input autoComplete='off' type="email" name="email" id="email" onBlur={ handleBlur } placeholder='Email' onChange={ handleChange } value={ values.email } />
            { touched.email && errors.email && <span> {errors.email} </span> }

            <button type='submit'>Submit</button>
            <button type='button' onClick={ handleReset }>Reset</button>
            
        </form>
    </div>
  )
}
