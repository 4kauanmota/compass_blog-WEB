export class Post {
  private Id: string;
  private ImgUrl: string;
  private Title: string;
  private Body: string;

  constructor(id: string, imgUrl: string, title: string, body:string) {
    this.Id = id;
    this.ImgUrl = imgUrl;
    this.Title = title;
    this.Body = body;
  }

  get id(): string { return this.Id }
  get imgUrl(): string { return this.ImgUrl }
  get title(): string { return this.Title }
  get body(): string { return this.Body }
}