import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController, ToastController,App } from 'ionic-angular';
import { Usuario } from '../../domain/usuario/usuario';
import { Http } from '@angular/http';
import { PerfilPage } from '../perfil/perfil';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public data;
  public http;
  public usuario: Usuario;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              http:Http,
              public toastCtrl: ToastController,
              public app: App ) {

      this.data = {};
      this.data.response = "";
      this.http = http;
      this.usuario = new Usuario(null, null, null, null, null);
  }

  logout(){
      // Remove API token
      const root = this.app.getRootNav();
      root.popToRoot();
  }

  submit(){
    var link = "http://localhost/pedidos/page/cadastrar_usuario";
    var data = JSON.stringify({
      username: this.usuario.username,
      email: this.usuario.email,
      password: this.usuario.password
    });
    //iniciando a conexao http para cadstro via json
    this.http.post(link, data).subscribe( data => {
        this.data.response = data._body;
        var res = this.data.response.split("|");
        if(res[1] == "sucesso"){
          this.toastCtrl.create({
           message: 'Cadastro de paciente realizado com sucesso !!',
           duration: 2000
         }).present()
            this.navCtrl.push(MenuPage)
        }
    }, error => {
        console.log('Ocorreu falha ao registrar usuário');
    });
  }

}
