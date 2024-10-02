import React from "react";
import ReactDOM from "react-dom/client"; // Import từ 'react-dom/client' thay vì 'react-dom'

import App from "./App";
import './index.css';
// Tạo root sử dụng createRoot thay vì ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
