import { PostComponentDetails } from "../component/PostDetailsComponent";
import { Post } from "../model/Post";
import { CommentComponent } from "../component/CommentsComponent";
import { Comment } from "../model/Comment";

const APIPOSTS: string = "../../../api/posts.json"
const APICOMMENTS: string = "../../../api/comments.json"
const POSTID = new URLSearchParams(window.location.search).get("id");

const getPost = async (): Promise<Post[]> => {
  return await fetch(APIPOSTS)
  .then(data => data.json())
  .then(data => data.filter((post: Post) => post.id == POSTID))
  .catch(error => console.log(error))
} 

const getComments = async (): Promise<Comment[]> => {
  return await fetch(APICOMMENTS)
  .then(data => data.json())
  .then(data => data.filter((comment: Comment) => comment.postId == POSTID))
  .catch(error => console.log(error))
} 

const cretePost = async () => {
  const post = await getPost();


  new PostComponentDetails("container", post[0]);
}

const creteComments = async () =>{
  const comments: Comment[] = await getComments();

  comments.map((comment) =>{
    new CommentComponent("comments-container", comment);
  })
}

cretePost();
creteComments();