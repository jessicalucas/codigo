import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ContatosPage } from '../contatos/contatos';
import { ConsultasPage } from '../consultas/consultas';
import { ArtigosPage } from '../artigos/artigos';
import { BlogPage } from '../blog/blog';
import { InMailPage } from '../in-mail/in-mail';
import { ChatPage } from '../chat/chat';
import { PerfilPage } from '../perfil/perfil';
import { AgendaPage } from '../agenda/agenda';
import { PerfilautenticadoPage } from '../perfilautenticado/perfilautenticado';
import { CadastroPage } from '../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  public tipo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
        this.tipo = sessionStorage.getItem('tipo');
  }

  goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilautenticadoPage);
  }goToContatos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContatosPage);
  }goToConsultas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AgendaPage);
  }goToArtigos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ArtigosPage);
  }goToBlog(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BlogPage);
  }goToInMail(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InMailPage);
  }goToChat(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ChatPage);
  }goToPaciente(params){
    if (!params) params = {};
      this.navCtrl.setRoot(CadastroPage);
  }

  logout(){
          // Remove API token
          const root = this.app.getRootNav();
          root.popToRoot();
    }


}
