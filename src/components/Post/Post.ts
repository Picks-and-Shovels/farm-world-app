export default class Post {
  constructor(
    public id: number,
    public title: string,
    public totalViews: number,
    public totalLikes: number
  ) {}
}
