import { PostComponentDetails } from "./component/PostDetailsComponent.js";
import { Post } from "./model/Post.js";

const API: string = "https://64b220dd38e74e386d54b34f.mockapi.io/posts"
const POSTID = new URLSearchParams(window.location.search).get("id");

const getPost = () => {
  return fetch(API + `/${POSTID}`)
  .then(data => data.json())
  .catch(error => console.log(error))
} 

const cretePost = async () =>{
  const post: Post = await getPost();

  new PostComponentDetails("container", post);
}

cretePost();