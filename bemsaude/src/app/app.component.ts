import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContatosPage } from '../pages/contatos/contatos';
import { ConsultasPage } from '../pages/consultas/consultas';
import { ArtigosPage } from '../pages/artigos/artigos';
import { BlogPage } from '../pages/blog/blog';
import { InMailPage } from '../pages/in-mail/in-mail';
import { ChatPage } from '../pages/chat/chat';
import { AgendaPage } from '../pages/agenda/agenda';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { PerfilautenticadoPage } from '../pages/perfilautenticado/perfilautenticado';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public tipo;

  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

        this.tipo = sessionStorage.getItem('tipo');
    });
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
  }goToPaciente(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastroPage);
  }
}
