import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Usuario } from '../../domain/usuario/usuario';
import { ContatosPage } from '../contatos/contatos';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public data;
  public http;
  public usuario: Usuario;
  public usuarioLogado: Usuario;

  constructor(public navCtrl: NavController, http:Http, public toastCtrl: ToastController) {
      this.data={};
      this.data.response= '';
      this.http = http;
      this.usuario = new Usuario(null, null, null, null, null);

      if(sessionStorage.getItem('flagLogado') != null) {
        this.navCtrl.push(MenuPage);
      }
  }

  submit() {
    var link = 'http://localhost/pedidos/page/login_ionic';
    var data = JSON.stringify({email: this.usuario.email, password: this.usuario.password})

    this.http.post(link, data)
    .subscribe(data=>{
        this.data.response = data._body;
        var res = this.data.response.split("|");
        if(res[2] == "sucesso") {
            //autenticação
            sessionStorage.setItem("usuarioId", res[1]);
            sessionStorage.setItem("usuarioLogado", this.usuario.email);
            sessionStorage.setItem("usuarioTipo", '1');
            sessionStorage.setItem("flagLogado", "sim");
            sessionStorage.setItem("tipo",  res[0]);

            this.navCtrl.push(MenuPage);

        } else if(this.data.response == 'invalido') {
            this.toastCtrl.create({
             message: 'Login ou senha inválida !!',
             duration: 2000
           }).present()
        }
    }, error=>{
      console.log('erro de conexao');
    });
  }
}
