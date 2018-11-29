import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { Contato } from '../../domain/contato/contato';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  searchTerm: string = '';
  public url: string;
  public contatos: Contato[];
  public permissao: true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _http: Http,
              private _alertCtrl: AlertController,
              private _loadingCtrl: LoadingController,
              public app: App) {

    this.url = "http://localhost/pedidos/contato/get_contato/"+sessionStorage.getItem('usuarioId');
  }


  logout(){
      // Remove API token
      const root = this.app.getRootNav();
      root.popToRoot();
    }

  setFilteredItems(){
    this.contatos = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){
    if(searchTerm && searchTerm.trim() != '') {
      return this.contatos.filter((contato: any) =>{
          return contato.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      });
    } else {
      this.ngOnInit();
    }
  }

  ngOnInit(){
    let loader = this._loadingCtrl.create({
      content: "Buscando contatos. Aguarde..."
    });
    loader.present();
    this._http
        .get(this.url)
        .map(res=>res.json())
        .toPromise()
        .then( contatos => {
              this.contatos = contatos;
              loader.dismiss();
        })
        .catch(err => {
          console.log(err);
          loader.dismiss();
          this._alertCtrl
              .create({
                title: "Falha na conexão",
                buttons: [{text: 'Sair'}],
                subTitle: "Tente novamente"
              }).present();
        });
  }
  seleciona(contato) {
    console.log(contato);
    this.navCtrl.push(PerfilPage, {usuarioSelecionado: contato});
  }

}
