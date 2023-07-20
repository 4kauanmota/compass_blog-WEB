import { PostComponent } from "./component/PostComponent";
import { Post } from "./model/Post";

const APIPOSTS: string = "../../api/posts.json"

const getPosts = async () => {
  return await fetch(APIPOSTS)
  .then(data => data.json())
  .catch(error => console.log(error))
} 

const cretePosts = async () =>{
  const posts: Array<Post> = await getPosts();

  posts.map((post) =>{
    new PostComponent("posts-container", post);
  })
}

cretePosts();