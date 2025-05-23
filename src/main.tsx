import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap_custom.scss';
import './index.css'
import { App } from './Components/App'
import { MsalProvider } from '@azure/msal-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Minute } from './Utils/Time'
import { PublicClientApplication } from '@azure/msal-browser'
import { MSAL_CLIENT_ID, MSAL_AUTHORITY } from './Utils/Env'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 10 * Minute
    }
  }
})

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: MSAL_CLIENT_ID,
    authority: MSAL_AUTHORITY,
    redirectUri: '/'
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </QueryClientProvider>
  </StrictMode>,
)
