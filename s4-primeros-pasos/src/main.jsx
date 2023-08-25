import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // export default, without {}
import './index.css'
import {Component1} from "./mi-componente/Component-1.jsx";
import {ComponentDos} from "./mi-componente/Component-2";
import {ComponentTres} from "./mi-componente/Component-3"; // != export defatult, with {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <Component1 nameButton="Pulsar" paraH2="propiedad"/>
      <ComponentDos footer="pie de pagina" numero = { 6 + 5 } />
      <ComponentTres title='rgfDev'  />
  </React.StrictMode>,
)
