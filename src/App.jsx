import { Button } from '@mui/material'
import { useState } from 'react'
import { useAuth } from './auth/AuthProvider'
import { Login } from './components/Login'
import { PostSummaryList } from './components/PostSummaryList'
import { Content } from './layout/Content'
import { Header } from './layout/Header'

export function App() {
    const { userData } = useAuth()
    const [showUserData, setShowUserData] = useState(false)

    return (
        <>
            <Header />
            <Content>
                {!userData && <Login />}
                {userData && (
                    <Button onClick={() => setShowUserData(!showUserData)}>
                        {showUserData ? 'Hidde User Data' : 'Show User Data'}
                    </Button>
                )}
                {userData && showUserData && (
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                )}
                <PostSummaryList />
            </Content>
        </>
    )
}
