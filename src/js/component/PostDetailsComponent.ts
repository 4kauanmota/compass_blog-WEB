import { BaseComponent } from "./BaseComponent";
import { Post } from "../model/Post";

export class PostComponentDetails extends BaseComponent<HTMLElement, HTMLElement> {
  private post: Post;

  constructor(hostId: string, post: Post) {
    super('post-template', hostId, true, post.id);
    this.post = post;

    this.RenderContent();
  }

  RenderContent(): void {
    this.Element.querySelector('img')!.setAttribute('src', this.post.imgUrl);
    this.Element.querySelector('img')!.setAttribute('alt', `An image that represents ${this.post.title}`);
    this.Element.querySelector('div > h2')!.textContent = this.post.title;
    this.Element.querySelector('div > p')!.textContent = this.post.body;
  }
}