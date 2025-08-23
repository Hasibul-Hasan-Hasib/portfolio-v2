import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage';

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
                    <Suspense fallback={<LoadingPage />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "projects",
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <Projects />
                    </Suspense>
                ),
            },
            {
                path: "contact",
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "loading",
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LoadingPage />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "*",
        element: (
            <Suspense fallback={<LoadingPage />}>
                <NotFound />
            </Suspense>
        ),
    },
]);

