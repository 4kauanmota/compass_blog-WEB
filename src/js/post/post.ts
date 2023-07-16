import { PostComponentDetails } from "../component/PostDetailsComponent.js";
import { Post } from "../model/Post.js";
import { CommentComponent } from "../component/CommentsComponent.js";
import { Comment } from "../model/Comment.js";

const API: string = "https://64b220dd38e74e386d54b34f.mockapi.io/posts"
const POSTID = new URLSearchParams(window.location.search).get("id");

const getPost = async () => {
  return await fetch(API + `/${POSTID}`)
  .then(data => data.json())
  .catch(error => console.log(error))
} 

const getComments = async () => {
  return await fetch(API + `/${POSTID}/comments`)
  .then(data => data.json())
  .catch(error => console.log(error))
} 

const cretePost = async () =>{
  const post: Post = await getPost();

  new PostComponentDetails("container", post);
}

const creteComments = async () =>{
  const comments: Array<Comment> = await getComments();

  comments.map((comment) =>{
    new CommentComponent("comments-container", comment);
  })
}

cretePost();
creteComments();