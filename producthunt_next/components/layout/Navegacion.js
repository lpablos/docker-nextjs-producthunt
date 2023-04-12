import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

const SectionNav = styled.nav`
    padding-left: 2rem;
    a{
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type{
            margin-right: 0;
        }
    }
`;

const Navegacion = () => {
    return (
        <SectionNav>
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            <Link href="/nuevo-producto">Nuevo Producto</Link>
        </SectionNav>
    );
}
 
export default Navegacion;