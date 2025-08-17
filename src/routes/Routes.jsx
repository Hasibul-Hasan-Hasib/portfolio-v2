import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Lazy load only the pages you have
const Layout = lazy(() => import('../layout/Layout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<div>Loading home page...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<div>Loading home page...</div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "projects",
                element: (
                    <Suspense fallback={<div>Loading home page...</div>}>
                        <Projects />
                    </Suspense>
                ),
            },
            {
                path: "contact",
                element: (
                    <Suspense fallback={<div>Loading home page...</div>}>
                        <Contact />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "*",
        element: (
            <Suspense fallback={<div>Loading not found page...</div>}>
                <NotFound />
            </Suspense>
        ),
    },
]);
