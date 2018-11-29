export class Usuario{
  constructor(
      public username: string,
      public email: string,
      public password: string,
      public type: string,
      public status: string
  ){}
}
