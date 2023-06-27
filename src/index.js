import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './styles.css';
import { HeroesApp } from './HeroesApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
    <BrowserRouter>
       <HeroesApp/>
    </BrowserRouter>

);

