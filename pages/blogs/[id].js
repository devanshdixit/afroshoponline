import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}

export default Post
  
  