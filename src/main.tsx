import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>

        <BrowserRouter>
            <Routes>
                {/*<Route path={`/`} element={<App/>}/>*/}
                <Route path={`/`} element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
