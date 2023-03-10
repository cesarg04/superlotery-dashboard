import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context/AuthContext'
import { I18nextProvider } from 'react-i18next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App'
import i18next from 'i18next';
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import global_fr from './translations/fr/global.json'
import './index.css'


i18next.init({
    interpolation: { escapeValue: true },
    lng: "es",
    resources: {
      es: {
        global: global_es
      },
      en: {
        global: global_en
      },
      fr: {
        global: global_fr
      }
    },
})


export const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next} >
    <QueryClientProvider client={client}>
      <AuthProvider>  
        <ReactQueryDevtools />
        <App />
      </AuthProvider>
      {/* <RouterProvider router={router} /> */}
    </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
