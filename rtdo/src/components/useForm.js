import {useState} from 'react';


const useForm =  initialValues => {
    const [values,setvalues]=useState(initialValues);
    return [
        values,e=>{
            setvalues(
                {
                    ...values,
                   [ e.target.name] :e.target.value
                }
            );
        }
      ]
}
 
export default useForm;
