import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext'

export const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthProvider>  
        <ReactQueryDevtools />
        <App />
      </AuthProvider>
      {/* <RouterProvider router={router} /> */}
    </QueryClientProvider>
  </React.StrictMode>,
)
