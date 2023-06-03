import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10)

  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Failed to load user(</h1>}
        {posts && posts.map(post => 
          <PostItem post={post} key={post.id} />)}
      </div>
    </div>
  )
}

export default PostContainer