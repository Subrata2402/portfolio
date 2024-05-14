import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './portfolio/About';
import Projects from './portfolio/Projects';
import Resume from './portfolio/Resume';
import Layout from './Layout';
import Home from './portfolio/Home';
import Contact from './portfolio/Contact';
import Certificates from './pages/Certificates';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/certificates',
                element: <Certificates />
            }
        ]
    },
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;