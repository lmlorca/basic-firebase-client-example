import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Header } from './layout/Header'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PostsPage } from './pages/PostsPage'
import { RegisterPage } from './pages/RegisterPage'

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Container sx={{ pt: 10 }}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<PostsPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Routes>
      </Container>
    </div>
  )
}
