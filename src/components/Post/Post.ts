export default class Post {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public imageUrl: string,
    public creator: string
  ) {}
}
