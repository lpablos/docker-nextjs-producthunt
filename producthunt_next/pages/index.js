import React from 'react';
import Layout from '../components/layout/Layout';

const Home = () => {
  return ( 
    <div>
      <Layout>
        <h1>Iinicio</h1>
        <style jsx>
          {`
            h1{
              color:red;
            }          
          `}
        </style>
      </Layout>
    </div>
   );
}
 
export default Home;
