export class Artigo{
  constructor(
      public id: string,
      public title: string,
      public keywords: string,
      public summary: string,
      public description: string,
      public user_id: string,
      public author: string,
      public photo: string
  ){}
}
