import { Formik,Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components';
import * as Yup from 'yup';

const initialValues: { [key:string]:any } = {};
const requiredFields: { [key:string]:any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;
    
    if(!input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Este campo es requerido');
        }
        if(rule.type === 'minLength'){
            const minValue = (rule as any).value || 2;
            schema = schema.min(minValue, `Minimo de ${minValue} caracteres`)
        }
        if(rule.type === 'email'){
            schema = schema.email('Debe de ser un email válido')
        }
    }

    requiredFields[input.name] = schema;

}

const validationSchema = Yup.object({
    ...requiredFields
})

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dinamyc Form</h1>  

      <Formik
      
      initialValues={ initialValues }
      onSubmit = {(values) => { 
          console.log("🚀 ~ file: DynamicForm.tsx ~ line 22 ~ DynamicForm ~ values", values);
        
      }}
      validationSchema = { validationSchema }
      
      >
        {
            (formik) => (
                <Form>
                    {formJson.map( ({ type,name,placeholder, label, options }) => {
                        if(type === 'text' || type ===  'email' || type ===  'password'){
                            return <MyTextInput 
                                        key={ name }
                                        type={type as any} 
                                        name={ name } 
                                        placeholder={ placeholder } 
                                        label={ label } />
                        }
                        else if(type === 'select'){
                        
                                return (<MySelect label={ label } name={ name } as={ type }>
                                            <option value="">Select an option</option>
                                            {
                                                options?.map( ({id, label}) => (
                                                    <option value={id} key={id}>{ label }</option>
                                                ))
                                            }
                                        </MySelect>)
                        }
                    }) }
                    <button type='submit'>Submit</button>
                </Form>
            )
        }
      </Formik>
    </div>
  )
}
