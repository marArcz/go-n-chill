import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QueryProvider from './lib/react-query/QueryProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <QueryProvider>
        <App/>
      </QueryProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
