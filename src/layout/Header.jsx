import { Button, Typography } from '@mui/material'
import { useAuth } from '../auth/AuthProvider'

export const Header = () => {
    const { userData, logout } = useAuth()

    return (
        <header className="p-4 bg-gray-100">
            <Typography variant="h4">Basic</Typography>
            <h4>
                {!userData
                    ? 'You are not logged in'
                    : 'Welcome, ' + userData.displayName}
            </h4>
            {userData && (
                <Button size="small" onClick={logout}>
                    Logout
                </Button>
            )}
        </header>
    )
}
