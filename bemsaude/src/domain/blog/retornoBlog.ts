export class RetornoBlog{
  constructor(
      public blogId: string,
      public erro: string,
      public msg: string,
      public tk: string // questao de segurança
  ){}
}
