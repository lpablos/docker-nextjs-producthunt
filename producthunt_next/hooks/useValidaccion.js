import React, {useState, useEffect} from 'react';



const useValidaccion = (stateStart, validation, fn) => {

    const[valores, setValores] = useState(stateStart);    
    const[errores, setErrores] = useState({});
    const[submit, setSubmit] = useState(false);

    useEffect(()=>{
        if (submit) {
            const noErrores = Object.keys(errores).length === 0;
            
            if(noErrores){
                // Funcion que se ejecua en el componente
                fn();
            }
            setSubmit(false);
        }

    },[]);

    // Cuando el usuario escriba
    const handleChange = e =>{
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validation(valores);
        setErrores(erroresValidacion);
        setSubmit(true);

    }



    return {
        valores,
        errores,
        submit,
        handleChange,
        handleSubmit
    };
}
 
export default useValidaccion;