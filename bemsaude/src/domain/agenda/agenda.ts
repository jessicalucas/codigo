export class Agenda{
  constructor(
      public id: string,
      public title: string,
      public description: string,
      public pacient_id: string,
      public doctor_id: string,
      public created_at: string,
      public nameUser: string
  ){}
}
