export default class PostDetail {
	constructor(
	  public id: number,
	  public createdAt : string,
	  public updatedAt : string,
	  public title: string,
	  public content: string,
	  public totalVies: number,
	  public totalLikes: number,
	  public writerId: number
	) {}
}