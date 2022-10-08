import React, {useState} from 'react';
import './App.css';
import home from './pages';
import {BrowserRouter as Router ,Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<home />} />
                </Routes>
            </Router>

        </div>
    );
}

export default App;