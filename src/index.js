import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.css';
import {
    RouterProvider,
  } from "react-router-dom";
import router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <div>
            {/* <h1 className=''>Hola soy un titulo</h1>
            <h2 className=''>Hola soy un sub-titulo</h2>
            <h3 className=''>Hola soy un titulo de parrafo</h3>
            <p className=''>Hola soy un parrafo</p>
            <Navigation opciones={['Home','Profile','Log Out']}/> */}
           <RouterProvider router={router} />
        </div>
    </React.StrictMode>
);