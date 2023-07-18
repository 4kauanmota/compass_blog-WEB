import { BaseComponent } from "./BaseComponent";
import { Post } from "../model/Post";

export class PostComponent extends BaseComponent<HTMLElement, HTMLElement> {
  private post: Post;

  constructor(hostId: string, post: Post) {
    super('post-template', hostId, false, post.id);
    this.post = post;

    this.RenderContent();
  }

  private textSize = Math.round(this.Element.querySelector('div > p')!.clientHeight / 16);

  RenderContent(): void {
    this.Element.setAttribute('onclick', 'window.location.href=' + `"/post/?id=${this.post.id}"`, )
    this.Element.querySelector('img')!.setAttribute('src', this.post.imgUrl);
    this.Element.querySelector('img')!.setAttribute('alt', `An image that represents ${this.post.title}`);
    this.Element.querySelector('div > h2')!.textContent = this.post.title;
    this.Element.querySelector('div > p')!.textContent = this.post.body;
    this.Element.querySelector('div > p')!.setAttribute('style', `height: ${this.textSize * 2 - 0.15}ch; -webkit-line-clamp: ${this.textSize};`)
    this.Element.querySelector('footer > a')!.setAttribute('href', `/post/?id=${this.post.id}`)
  }
}