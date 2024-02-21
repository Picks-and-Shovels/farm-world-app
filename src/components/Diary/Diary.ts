export default class Diary {
  date: Date;
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public _date: string
  ) {
    this.date = new Date(_date);
  }
}
