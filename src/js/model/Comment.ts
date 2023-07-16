export class Comment {
  private Id: string;
  private PostId: string;
  private Email: string;
  private Username: string;
  private Body: string;

  constructor(id: string, postId: string, email: string, username: string, body:string) {
    this.Id = id;
    this.PostId = postId;
    this.Email = email;
    this.Username = username;
    this.Body = body;
  }

  get id(): string { return this.Id }
  get postId(): string { return this.PostId }
  get email(): string { return this.Email }
  get username(): string { return this.Username }
  get body(): string { return this.Body }
}