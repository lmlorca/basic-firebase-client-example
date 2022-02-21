import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'
import { AuthProvider } from './auth/AuthProvider'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
