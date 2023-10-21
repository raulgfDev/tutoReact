import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import './index.css'
import { CounterApp } from './01-useState/1-CounterApp'
import { CounterWithCustomHook } from './01-useState/2-CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/1-SimpleForm'
import { FormWithCustomHook } from './02-useEffect/3-FormWithCustomHook'
import { FocusScreen } from "./03-useRef/1-FocusScreen.jsx";
import { PreviousValue } from "./03-useRef/2-PreviousValue";
import { MemoMethod } from "./04-useMemo/1-MemoMethod";
import { MemoHook } from "./04-useMemo/2-MemoHook";
import { CallBackHook } from "./04-useMemo/3-CallBackHook";
import { Padre } from "./05-tarea-memo/Padre";

// linked bootstrap at index.html

ReactDOM.createRoot(document.getElementById('root')).render(
    // Se comenta stricMode para evitar la doble salida por consola
    //<React.StrictMode>
        <>
            <HooksApp />
            <CounterApp />
            <CounterWithCustomHook />
            <SimpleForm />
            <FormWithCustomHook />
            <FocusScreen />
            <PreviousValue />
            <MemoMethod />
            <MemoHook />
            <CallBackHook />
            <Padre />
        </>

    //</React.StrictMode>,
)
