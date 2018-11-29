import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContatosPage } from '../pages/contatos/contatos';
import { ConsultasPage } from '../pages/consultas/consultas';
import { LoginPage } from '../pages/login/login';
import { AgendaPage } from '../pages/agenda/agenda';
import { ArtigosPage } from '../pages/artigos/artigos';
import { BlogPage } from '../pages/blog/blog';
import { InMailPage } from '../pages/in-mail/in-mail';
import { ChatPage } from '../pages/chat/chat';
import { MenuPage } from '../pages/menu/menu';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { PerfilautenticadoPage } from '../pages/perfilautenticado/perfilautenticado';
import { BlogcadastroPage } from '../pages/blogcadastro/blogcadastro';
import { ArtigocadastroPage } from '../pages/artigocadastro/artigocadastro';
import { ModalviewartigoPage } from '../pages/modalviewartigo/modalviewartigo';
import { ModalviewblogPage } from '../pages/modalviewblog/modalviewblog';
import { PerfileditarPage } from '../pages/perfileditar/perfileditar';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PerfilPage,
    ContatosPage,
    ConsultasPage,
    LoginPage,
    AgendaPage,
    ArtigosPage,
    BlogPage,
    InMailPage,
    ChatPage,
    MenuPage,
    PerfilautenticadoPage,
    CadastroPage,
    BlogcadastroPage,
    ArtigocadastroPage,
    ModalviewartigoPage,
    ModalviewblogPage,
    PerfileditarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerfilPage,
    ContatosPage,
    ConsultasPage,
    LoginPage,
    AgendaPage,
    ArtigosPage,
    BlogPage,
    InMailPage,
    ChatPage,
    MenuPage,
    PerfilautenticadoPage,
    CadastroPage,
    BlogcadastroPage,
    ArtigocadastroPage,
    ModalviewartigoPage,
    ModalviewblogPage,
    PerfileditarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
