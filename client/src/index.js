import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { BrowserRouter } from "react-router-dom"
import { UserProvider} from './Context/User';
import { BookProvider } from './Context/Books';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
    <BookProvider>
    <BrowserRouter>
         <App />
    </BrowserRouter>
    </BookProvider>
    </UserProvider>
    
);

