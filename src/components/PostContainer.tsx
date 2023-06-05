import { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100)
  const [createPost, { }] = postAPI.useCreatePostMutation()
  const [updatePost, { }] = postAPI.useUpdatePostMutation()
  const [deletePost, { }] = postAPI.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({ title, body: title } as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Failed to load user(</h1>}
        {posts && posts.map(post =>
          <PostItem
            post={post}
            remove={handleRemove}
            update={handleUpdate}
            key={post.id} />)}
      </div>
    </div>
  )
}

export default PostContainer