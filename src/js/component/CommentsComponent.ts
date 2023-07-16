import { BaseComponent } from "./BaseComponent.js";
import { Comment } from "../model/Comment.js";

export class CommentComponent extends BaseComponent<HTMLElement, HTMLElement> {
  private comment: Comment;

  constructor(hostId: string, comment: Comment) {
    super('comment-template', hostId, false, comment.id);
    this.comment = comment;

    this.RenderContent();
  }

  RenderContent(): void {
    this.Element.querySelector('p.user .username')!.textContent = this.comment.username + ": ";
    this.Element.querySelector('p.user .email')!.textContent = this.comment.email + ": ";
    this.Element.querySelector('p.text')!.textContent = this.comment.body;
  }
}