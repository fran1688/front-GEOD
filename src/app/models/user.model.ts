
export class User {
  constructor(
    public name: string,
    public email: string,
    public img?: string,
    public role?: string,
    public google?: boolean,
    public id?: string,
  ) {}
}
