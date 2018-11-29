export class Inmail{
  constructor(
      public message: string,
      public status_sender: string,
      public status_receiver: string,
      public sender_id: string,
      public receiver_id: string,
      public created_at: string,
      public updated_at: string,
      public id: string,
      public name: string,
      public email: string,
      public contact_second_id: string,
      public photo: string,
  ){}
}
