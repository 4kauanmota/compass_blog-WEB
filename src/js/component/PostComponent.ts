import { BaseComponent } from "./BaseComponent.js";
import { Post } from "../model/Post.js";

export class PostComponent extends BaseComponent<HTMLElement, HTMLElement> {
  private post: Post;

  constructor(hostId: string, post: Post) {
    super('post-template', hostId, false, post.id);
    this.post = post;

    this.RenderContent();
  }

  get Post(): Post { return this.post }

  RenderContent(): void {
    this.Element.setAttribute('onclick', 'window.location.href=' + `"/post.html?id=${this.post.id}"`, )
    this.Element.querySelector('img')!.setAttribute('src', this.post.imgUrl);
    this.Element.querySelector('div > h2')!.textContent = this.post.title;
    this.Element.querySelector('div > p')!.textContent = this.post.body;
    this.Element.querySelector('footer > a')!.setAttribute('href', `/post.html?id=${this.post.id}`)
  }
}
