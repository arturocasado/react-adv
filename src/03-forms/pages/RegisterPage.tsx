import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { name, email, password1, password2, onChange, resetForm, isValidEmail } = useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
    });

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        console.log("🚀 ~ file: RegisterPage.tsx ~ line 16 ~ onSubmit ~ event", event);
        
    }


  return (
    <div>
        <h1>Register page</h1>
        <form onSubmit={ onSubmit }>
            <input autoComplete='off' name="name" type="text" placeholder="Name" value={ name } onChange={ onChange } className={ `${name.trim().length <= 0 && 'has-error'} ` }></input>
            { name.trim().length <= 0 && <span>Este campo es necesario</span>}
            <input autoComplete='off' name="email" type="email" placeholder="Email" value={ email }  onChange={ onChange } className={ `${!isValidEmail(email) && 'has-error'} ` }></input>
            { !isValidEmail(email) && <span>El email no es válido</span>}
            <input autoComplete='off' name="password1" type="password" placeholder="Password" value={ password1 }  onChange={ onChange } className={ `${password1.trim().length <= 0 && 'has-error'} ` }></input>
            { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
            { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span> }
            <input autoComplete='off' name="password2" type="password" placeholder="Repeat Password" value={ password2 }  onChange={ onChange } className={ `${password2.trim().length <= 0 && 'has-error'} ` }></input>
            { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password2.trim().length > 0 && password1  !== password2 && <span>Las contraseñas deben ser iguales</span>}

            <button type="submit">Create</button>
            <button type="button" onClick={ resetForm }>Reset form</button>
        </form>
    </div>
  )
}
