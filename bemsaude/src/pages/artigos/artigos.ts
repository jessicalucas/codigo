import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ModalController, ViewController} from 'ionic-angular';
import { Artigo } from '../../domain/artigo/artigo';
import { Http } from '@angular/http';
import { ArtigocadastroPage } from '../artigocadastro/artigocadastro';
import { ModalviewartigoPage } from '../modalviewartigo/modalviewartigo';

@Component({
  selector: 'page-artigos',
  templateUrl: 'artigos.html'
})
export class ArtigosPage {

  public artigo: Artigo[];
  public tipo;

  constructor(public navCtrl: NavController,
              private _http:Http,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {

                this.tipo = sessionStorage.getItem('tipo');
              }


  ngOnInit(){
      let loader = this._loadingCtrl.create({
        content: 'Listando artigos. Aguarde ...'
      });
      loader.present();
      this._http
        .get('http://localhost/pedidos/artigo/get_artigo')
        .map(res => res.json())
        .toPromise()
        .then(artigos => {
           this.artigo = artigos;
           loader.dismiss();
        })
        .catch(err => {
          console.log(err);
          this._alertCtrl
          .create({
            title: 'Falha na conexão',
            buttons: [{text: 'Estou ciente!'}],
            subTitle: 'Não foi possivel obter a listagem de artigos. Tente novamente.'
          }).present();
        });
    }

    goToViewArtigo(artigo) {
      this.navCtrl.setRoot(ModalviewartigoPage, { artigoSelecionado: artigo });
    }

    // atualizaArquivo(event){
    //   this.artigo = event.srcElement.files[0];
    // }

   // enviarArquivo(dir, arquivo){
   //    let caminho = this.referencia.child('dir/'+this.artigo.name);
   //    let tarefa = caminho.put(this.arquivo);
   //    tarefa.on('state_changed', (snapshot)=>{
   //       // Acompanha os estados do upload (progresso, pausado,...)
   //    }, error => {
   //       // Tratar possíveis erros
   //    }, () => {
   //       // Função de retorno quando o upload estiver completo
   //       console.log(tarefa.snapshot.downloadURL);
   //    });
   // }

  // seleciona(artigo) {
  //   this.navCtrl.push(CardapioPage, {restauranteselecionado: artigo});
  // }

    goToDeletarArtigo(artigo) {
        this._http.post('http://localhost/pedidos/artigo/delete/'+artigo, artigo)
          .subscribe( data => {
            if(true) {
               this.toastCtrl.create({
                message: 'Exclusão realizada com sucesso !!',
                duration: 2000
              }).present()
              this.navCtrl.setRoot(ArtigosPage);
            }
          }, erro => {
              console.log(erro);
        });
    }


  goToCadastroArtigoNew() {
     this.navCtrl.setRoot(ArtigocadastroPage);
  }

  goToCadastroArtigo(artigo) {
      this.navCtrl.setRoot(ArtigocadastroPage, { artigoSelecionado: artigo });
  }

}
