// import React from 'react';
// import App from './App.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
// );
// ⛔️ Warning: You are importing createRoot from "react-dom"
// which is not supported. You should instead
// import it from "react-dom/client"
import { StrictMode } from 'react';

import { createRoot } from 'react-dom'; // 👈️ wrong import path
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
