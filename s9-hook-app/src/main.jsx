import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import './index.css'
import { CounterApp } from './01-useState/1-CounterApp'
import { CounterWithCustomHook } from './01-useState/2-CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/1-SimpleForm'
import { FormWithCustomHook } from './02-useEffect/3-FormWithCustomHook'

// linked bootstrap at index.html


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <CounterWithCustomHook />
    <SimpleForm />
    <FormWithCustomHook />
  </React.StrictMode>,
)
