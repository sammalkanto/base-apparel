import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.scss';
import BaseApparel from "./components/BaseApparel.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BaseApparel/>
  </React.StrictMode>,
)
