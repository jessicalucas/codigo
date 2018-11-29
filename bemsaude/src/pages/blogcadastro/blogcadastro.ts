import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Blog } from '../../domain/blog/blog';
import { RetornoBlog } from '../../domain/blog/retornoBlog';
import { Http } from '@angular/http';
import { BlogPage } from '../blog/blog';


@IonicPage()
@Component({
  selector: 'page-blogcadastro',
  templateUrl: 'blogcadastro.html',
})
export class BlogcadastroPage {

  public data;
  public http;
  public blog: Blog;
  public flagUpdate: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              http: Http,
              public toastCtrl: ToastController) {

        this.data = {};
        this.data.response = '';
        this.http = http;

        if(this.navParams.get('blogSelecionado')){
          this.flagUpdate = true;
          this.blog = this.navParams.get('blogSelecionado');
        }else{
          this.flagUpdate = false;
          this.blog = new Blog(null, null, null, null, null, null, null, null);
        }
  }

  submit() {

      //Validação dos campos
      if(!this.blog.title || !this.blog.content) {
          this._alertCtrl
            .create({
               title: 'Alerta',
               buttons: [{text: 'Estou ciente. Fechar'}],
               subTitle: 'Favor preencher os campos obrigatórios'
            }).present()
            return;
      }

      var link = "http://localhost/pedidos/blog/cadastrar_blog/"+sessionStorage.getItem('usuarioId');
      var data = JSON.stringify({
        id: this.blog.id,
        title: this.blog.title,
        keywords:this.blog.keywords,
        summary: this.blog.summary,
        content: this.blog.content,
        flag_update: this.flagUpdate
        //photo:
      });

      this.http.post(link, data)
          .subscribe( data => {
            this.data.response = data._body;
            var res = this.data.response.split("|");
            if(res[1] == "sucesso"){
               this.toastCtrl.create({
                message: 'Cadastro de post realizado com sucesso !!',
                duration: 2000
              }).present()
              this.navCtrl.setRoot(BlogPage);
            }
          }, erro => {
              console.log(erro);
          });
  }

  goToBlog() {
     this.navCtrl.setRoot(BlogPage);
  }

}
