import Layout from '@/components/layout/Layout';
import React from 'react';
import css from 'styled-jsx/css';
import {Formulario, Campo, InputSubmit} from "../components/layout/ui/Formulario"
import styled from '@emotion/styled';

const ElementoH1 = styled.h1`
    text-align: center;
`;

const CrearCuenta = () => {
    return ( 

        <Layout>
            <>
            <ElementoH1>
                Crear Cuenta
            </ElementoH1>
            
            <Formulario>
                <Campo>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Tu nombre" name="nombre"/>
                </Campo>
                <Campo>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Tu Email" name="email"/>
                </Campo>
                <Campo>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Tu Password" name="password"/>
                </Campo>
                
                <InputSubmit type="submit" value="Crear Cuenta"/>
            </Formulario>
            </>
        </Layout>
     );
}
 
export default CrearCuenta;