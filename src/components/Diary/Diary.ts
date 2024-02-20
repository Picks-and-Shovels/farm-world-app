export default class Diary {
  date: Date;
  constructor(
    public id: string,
    public _date: string,
    public tags: string[],
    public content: string,
    public images: string[]
  ) {
    this.date = new Date(_date);
  }
}
