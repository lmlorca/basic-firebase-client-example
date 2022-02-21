import { useQuery } from 'react-query'
import { fetchPostAll } from '../api/get-all-post'
import { PostSummary } from './PostSummay'

export const PostSummaryList = () => {
  const { data, status, error } = useQuery('posts-all', fetchPostAll)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>{error.message}</div>
  }

  if (status === 'success') {
    return (
      <>
        {data.map((post) => {
          return (
            <PostSummary
              key={post.id}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
            />
          )
        })}
      </>
    )
  }
}
