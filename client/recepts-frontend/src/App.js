import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import CategoryDetail from './components/CategoryDetail';
import RecipeDetail from './components/RecipeDetail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    useEffect(() => {
        if (darkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [darkTheme]);

    return (
        <Router>
            <div className={darkTheme ? 'app dark-theme' : 'app'}>
                <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<CategoryList />} />
                    <Route path="/category/:id" element={<CategoryDetail />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
