import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import { Perfil } from '../../domain/perfil/perfil';
import { Contato } from '../../domain/contato/contato';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  public data;
  public contato: Contato;
  public url: string;
  public perfil: Perfil[];
  public tipo;
  public http;
  public pushNotification;
  public flagUpdate: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _http: Http,
              private _alertCtrl: AlertController,
              private _loadingCtrl: LoadingController,
              public app: App,
              http: Http,
              public toastCtrl: ToastController) {

        this.contato= this.navParams.get('usuarioSelecionado');
        this.url = "http://localhost/pedidos/perfil/get_perfil/"+this.contato.id;
        this.tipo = sessionStorage.getItem('tipo');
        this.http = http;
        this.data = {};
        this.data.response = "";
  }

  pushNotificationChange() {

    var link = "http://localhost/pedidos/contato/salvar/"+this.contato.id_contato;
    var data = JSON.stringify({
      id: this.contato.id_contato,
      permission_message: this.pushNotification,
      flag_update: this.flagUpdate

    });
    this.http.post(link, data)
        .subscribe( data => {
          this.data.response = data._body;
        }, erro => {
            console.log(erro);
        });
  };

  logout(){
      // Remove API token
      const root = this.app.getRootNav();
      root.popToRoot();
    }

  ngOnInit(){
    let loader = this._loadingCtrl.create({
      content: "Buscando perfil. Aguarde..."
    });
    loader.present();
    this._http
        .get(this.url)
        .map(res=>res.json())
        .toPromise()
        .then( perfil => {
              this.perfil = perfil;
              loader.dismiss();
        })
        .catch(err => {
          console.log(err);
          loader.dismiss();
          this._alertCtrl
              .create({
                title: "Falha na conexão",
                buttons: [{text: 'Sair'}],
                subTitle: "Falha ao visualizar perfil. Tente novamente .."
              }).present();
        });
  }


}
