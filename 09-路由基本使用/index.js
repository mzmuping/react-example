import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import './app.css'
ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<About />}>
                    </Route>
                    <Route path="about" >
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        <Route path='*' element={<About />}></Route>
                    </Route>
                    <Route path="home" element={<Home />}></Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
                <Route path='/s' element={<div>sssss</div>}>

                </Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>, document.getElementById('root'));