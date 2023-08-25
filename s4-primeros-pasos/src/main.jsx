import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // export default, without {}
import './index.css'
import {Component} from "./mi-componente/Component.jsx";
import {ComponentDos} from "./mi-componente/Component-2"; // != export defatult, with {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <Component nameButton="Pulsar" paraH2="propiedad"/>
      <ComponentDos footer="pie de pagina" numero={ 6 + 5} />
  </React.StrictMode>,
)
