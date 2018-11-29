import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { Perfil } from '../../domain/perfil/perfil';
import { PerfileditarPage } from '../perfileditar/perfileditar';

@IonicPage()
@Component({
  selector: 'page-perfilautenticado',
  templateUrl: 'perfilautenticado.html',
})
export class PerfilautenticadoPage {

  public url: string;
  public perfil: Perfil[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _http: Http,
              private _alertCtrl: AlertController,
              private _loadingCtrl: LoadingController,
              public app: App) {

    this.url = "http://localhost/pedidos/perfil/get_perfil/"+sessionStorage.getItem('usuarioId');
  }

  logout(){
      // Remove API token
      const root = this.app.getRootNav();
      root.popToRoot();
  }


  editar(perfil) {
      this.navCtrl.setRoot(PerfileditarPage, { perfileditado: perfil });
  }

  ngOnInit(){
    let loader = this._loadingCtrl.create({
      content: "Buscando seu perfil. Aguarde..."
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
                subTitle: "Falha ao visualizar seu perfil. Tente novamente .."
              }).present();
        });
  }

}
