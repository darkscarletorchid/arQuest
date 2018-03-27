export class User {
  id: number = 0;
  username: string = '';
  email: string = '';
  password: string = '';

  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  } 
}
