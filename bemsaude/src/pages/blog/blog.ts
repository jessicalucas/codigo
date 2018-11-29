import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Blog } from '../../domain/blog/blog';
import { Http } from '@angular/http';
import { BlogcadastroPage } from '../blogcadastro/blogcadastro';
import { ModalviewblogPage } from '../modalviewblog/modalviewblog';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html'
})
export class BlogPage {

  public blog: Blog[];
  public tipo;

  constructor(public navCtrl: NavController,
              private _http:Http,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              public toastCtrl: ToastController) {

                this.tipo = sessionStorage.getItem('tipo');
              }

      ngOnInit(){
          let loader = this._loadingCtrl.create({
            content: 'Listando posts. Aguarde ...'
          });
          loader.present();
          this._http
            .get('http://localhost/pedidos/blog/get_blog')
            .map(res => res.json())
            .toPromise()
            .then(blogs => {
               this.blog = blogs;
               loader.dismiss();
            })
            .catch(err => {
              console.log(err);
              this._alertCtrl
              .create({
                title: 'Falha na conexão',
                buttons: [{text: 'Estou ciente!'}],
                subTitle: 'Não foi possivel obter a listagem de posts. Tente novamente.'
              }).present();
            });
        }

        goToViewBlog(post) {
          this.navCtrl.setRoot(ModalviewblogPage, { postSelecionado: post });
        }


        goToDeletarBlog(blog) {
            this._http.post('http://localhost/pedidos/blog/delete/'+blog, blog)
              .subscribe( data => {
                if(true) {
                   this.toastCtrl.create({
                    message: 'Exclusão realizada com sucesso !!',
                    duration: 2000
                  }).present()
                  this.navCtrl.setRoot(BlogPage);
                }
              }, erro => {
                  console.log(erro);
            });
        }

        goToCadastroBlog(blog) {
            this.navCtrl.setRoot(BlogcadastroPage, { blogSelecionado: blog });
        }

        goToCadastroBlogNew() {
           this.navCtrl.setRoot(BlogcadastroPage);
        }

}
