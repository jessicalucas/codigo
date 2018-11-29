import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { Artigo } from '../../domain/artigo/artigo';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { ArtigosPage } from '../artigos/artigos';


@IonicPage()
@Component({
  selector: 'page-artigocadastro',
  templateUrl: 'artigocadastro.html',
})
export class ArtigocadastroPage {

  public data;
  public http;
  public artigo: Artigo;
  public flagUpdate: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              http: Http,
              public toastCtrl: ToastController,
              public app: App) {

      this.data = {};
      this.data.response = '';
      this.http = http;

      if(this.navParams.get('artigoSelecionado')){
        this.flagUpdate = true;
        this.artigo = this.navParams.get('artigoSelecionado');
      }else{
        this.flagUpdate = false;
        this.artigo = new Artigo(null, null, null, null, null, null, null, null);
      }
}

  submit() {

      //Validação dos campos
      if(!this.artigo.title || !this.artigo.description) {
          this._alertCtrl
            .create({
               title: 'Alerta',
               buttons: [{text: 'Estou ciente. Fechar'}],
               subTitle: 'Favor preencher os campos obrigatórios'
            }).present()
            return;
      }

      var link = "http://localhost/pedidos/artigo/cadastrar_artigo/"+sessionStorage.getItem('usuarioId');
      var data = JSON.stringify({
        id: this.artigo.id,
        title: this.artigo.title,
        keywords:this.artigo.keywords,
        summary: this.artigo.summary,
        author: this.artigo.author,
        description: this.artigo.description,
        flag_update: this.flagUpdate
        //photo:
      });

      this.http.post(link, data)
          .subscribe( data => {
            this.data.response = data._body;
            var res = this.data.response.split("|");
            if(res[1] == "sucesso"){
               this.toastCtrl.create({
                message: 'Cadastro de artigo realizado com sucesso !!',
                duration: 2000
              }).present()
              this.navCtrl.setRoot(ArtigosPage);
            }
          }, erro => {
              console.log(erro);
          });
  }

  goToArtigo() {
     this.navCtrl.setRoot(ArtigosPage);
  }

}
