import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { Inmail } from '../../domain/inmail/inmail';
import { Contato } from '../../domain/contato/contato';


@Component({
  selector: 'page-in-mail',
  templateUrl: 'in-mail.html'
})
export class InMailPage {

  searchTerm: string = '';
  public url: string;
  public urlenviados: string;
  public inmail: Inmail[];
  public enviados: Inmail[];
  public newInmail:Inmail;
  public http;
  public data;
  public link: string;
  public contatos: Contato[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _http: Http,
              http: Http,
              private _alertCtrl: AlertController,
              private _loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public app: App) {

    this.http = http;
    this.url = "http://localhost/pedidos/inmail/get_inmail/"+sessionStorage.getItem('usuarioId');
    this.urlenviados = "http://localhost/pedidos/inmail/get_inmail_enviados/"+sessionStorage.getItem('usuarioId');

    if(sessionStorage.getItem('tipo') == '1') {
      this.link = "http://localhost/pedidos/contato/get_contato_message_paciente/"+sessionStorage.getItem('usuarioId');
    } else {
      this.link = "http://localhost/pedidos/contato/get_contato_message/"+sessionStorage.getItem('usuarioId');
    }


    this.newInmail = new Inmail(null, null, null, null, null, null, null, null, null, null, null, null);

    this._http
        .get(this.link)
        .map(res=>res.json())
        .toPromise()
        .then( contatos => {
              this.contatos = contatos;
        })

  }

  setFilteredItems(){
    this.inmail = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){
    if(searchTerm && searchTerm.trim() != '') {
      return this.inmail.filter((contato: any) =>{
          return contato.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      });
    } else {
      this.ngOnInit();
    }
  }

  logout(){
      // Remove API token
      const root = this.app.getRootNav();
      root.popToRoot();
    }

  ngOnInit(){
    // let loader = this._loadingCtrl.create({
    //   content: "Buscando contatos do email. Aguarde..."
    // });
    // loader.present();
    this._http
        .get(this.url)
        .map(res=>res.json())
        .toPromise()
        .then( contatos => {
              this.inmail = contatos;

        });
    this._http
        .get(this.urlenviados)
        .map(res=>res.json())
        .toPromise()
        .then( contatosenviados => {
              this.enviados = contatosenviados;

        })
        .catch(err => {

          this._alertCtrl
              .create({
                title: "Falha na conexão",
                buttons: [{text: 'Sair'}],
                subTitle: "Tente novamente"
              }).present();
        });
  }

  submit() {

      var link = "http://localhost/pedidos/inmail/cadastrar_inmail/"+sessionStorage.getItem('usuarioId');
      var data = JSON.stringify({
        message: this.newInmail.message,
        sender_id:this.newInmail.sender_id,
        receiver_id: this.newInmail.receiver_id,
      });

      this.http.post(link, data)
          .subscribe( data => {
            this.data.response = data._body;
            var res = this.data.response.split("|");
            if(res[1] == "sucesso"){
               this.toastCtrl.create({
                message: 'Cadastro de in-mail realizado com sucesso !!',
                duration: 3000
              }).present()
            this.navCtrl.setRoot(InMailPage);
            }
          }, erro => {
              console.log(erro);
          });
  }





}
