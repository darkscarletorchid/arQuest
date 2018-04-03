export class User {
  id: number = 0;
  username: string = '';
  email: string = '';

  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  } 
}

export class UserDto {
  id: number;
  token: string;
}