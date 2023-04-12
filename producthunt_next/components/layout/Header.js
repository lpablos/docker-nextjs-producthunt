import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'


import Buscar from './ui/Buscar';
import Navegacion from './Navegacion';
import Botton from './ui/Botton';
import { css } from '@emotion/react';

const DivHeader = styled.header`
    border-bottom: 2px solid var(--gris3);
    padding: 1rem 0;
`;


const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media(min-width: 768px){
        display:flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const SectionLogin = styled.div`
    display: flex;
    align-items: center;
`;

const SectionUser = styled.p`
    margin-right: 2rem;
`;

const SectionNavegacion= styled.div`
    display: flex;
    align-items: center;
    a { 
        text-decoration: none !important;
    }
`;
const Header = () => {

    const usuario = true;

    return ( 
        <DivHeader>
            <ContenedorHeader>
                <SectionNavegacion>
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>                 
                    <Buscar/>                 
                    <Navegacion/>
                </SectionNavegacion>
                <SectionLogin>                    
                 
                    {usuario? (
                        <>
                            <SectionUser>Hola: Luis</SectionUser>

                            <Botton bgColor="true">
                                Cerrar Sessión
                            </Botton>
                        </>
                    ):(
                        <>
                            <Link href="/login">
                                <Botton bgColor="true">
                                    Iniciar Sessión
                                </Botton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Botton>
                                Crear Cuenta
                                </Botton>
                            </Link>
                        </>
                    )}                    
                    
                    
                </SectionLogin>

            </ContenedorHeader>
        </DivHeader>
    );
}
 
export default Header;