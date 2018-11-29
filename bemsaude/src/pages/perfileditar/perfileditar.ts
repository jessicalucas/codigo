import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Perfil } from '../../domain/perfil/perfil';
import { PerfilautenticadoPage } from '../perfilautenticado/perfilautenticado';

@IonicPage()
@Component({
  selector: 'page-perfileditar',
  templateUrl: 'perfileditar.html',
})
export class PerfileditarPage {

  public data;
  public http;
  public perfil: Perfil;
  public flagUpdate: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              http: Http,
              public toastCtrl: ToastController) {


        this.data = {};
        this.data.response = '';
        this.http = http;

        if(this.navParams.get('perfileditado')) {
          this.flagUpdate = true;
          this.perfil = this.navParams.get('perfileditado');
        } else {
          this.flagUpdate = false;
        }

  }

  submit() {

      var link = "http://localhost/pedidos/perfil/cadastrar_perfil/"+sessionStorage.getItem('usuarioId');
      var data = JSON.stringify({
        id: this.perfil.id,
        about: this.perfil.about,
        who_recommended: this.perfil.who_recommended,
        flag_update: this.flagUpdate
        //photo:
      });

      this.http.post(link, data)
          .subscribe( data => {
            this.data.response = data._body;
            var res = this.data.response.split("|");
            if(res[1] == "sucesso"){
               this.toastCtrl.create({
                message: 'Perfil alterado com sucesso !!',
                duration: 2000
              }).present()
              this.navCtrl.setRoot(PerfilautenticadoPage);
            }
          }, erro => {
              console.log(erro);
          });
  }

  goToBlog() {
     this.navCtrl.setRoot(PerfilautenticadoPage);
  }




}
