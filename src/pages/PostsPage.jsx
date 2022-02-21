import { Button } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { PostSummaryList } from '../components/PostSummaryList'

export const PostsPage = () => {
  const { userData } = useAuth()
  const [showUserData, setShowUserData] = useState(false)

  return (
    <>
      {userData && (
        <Button onClick={() => setShowUserData(!showUserData)}>
          {showUserData ? 'Hidde User Data' : 'Show User Data'}
        </Button>
      )}
      {userData && showUserData && (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      )}
      <PostSummaryList />
    </>
  )
}
