import { PostComponent } from "./component/PostComponent.js";
import { Post } from "./model/Post.js";

const API: string = "https://64b220dd38e74e386d54b34f.mockapi.io/posts"

const getPosts = async () => {
  return await fetch(API)
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