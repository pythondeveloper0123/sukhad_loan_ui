import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
// import RoutesComp from './MyComponents/application/RoutesComp';
import { BrowserRouter } from "react-router-dom"
import './css/style.css'
import RoutesComp from './MyComponents/RoutesComp';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <RoutesComp/>
  </BrowserRouter>

  </>

);
