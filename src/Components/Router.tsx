import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { MainPage } from '../Sites/MainPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <MainPage title="Main" /> },
            { path: 'other', element: <MainPage title="Other" /> },
        ],
    },
]);
