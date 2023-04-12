import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/react'
import Head from 'next/head';
import { Html } from 'next/document';
import 'normalize.css/normalize.css';


const Layout = props => {
    return ( 
        <>
            <Global
                styles={css`
                    :root {
                        --gris: #3d3d3d;
                        --gris2: #6f6f6f6;
                        --gris3: #1e1e1e;
                        --naranja: #DA552F;
                    }
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }

                    *,*:before, *:after{
                        box-sizing: inherit;
                    }

                    body{
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }

                    h1,h2, h3{
                        margin: 0 0 2rem 0;
                    }

                    h1, h2{
                        font-family:'Roboto Slab', serif;
                        font-weight: 700;
                    }

                    h3{
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                    p{
                        text-decoration:none;
                    }
                `}
            />

            <Head>
                {/* informacion meta */}
                <html lang="es"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto+Slab:wght@100&display=swap" rel="stylesheet"/>
                <link href="/static/css/app.css" rel="stylesheet"/>
                
                <title>Product Hunt  Firebase & Netxjs</title>
            </Head>
            <Header/>
            <main>
                { props.children }
            </main>
        </>
        );
}
 
export default Layout;
