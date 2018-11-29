import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, App, ToastController } from 'ionic-angular';
import { Agenda } from '../../domain/agenda/agenda';
import { Http } from '@angular/http';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

  public url: string;
  public agenda: Agenda[];
  public tipo;

  constructor(public navCtrl: NavController,
              private _http:Http,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public app: App) {

    this.tipo = sessionStorage.getItem('tipo');     

    if(sessionStorage.getItem('tipo') == '1') {
      this.url = "http://localhost/pedidos/agenda/get_agenda_paciente/"+sessionStorage.getItem('usuarioId');
    }else {
      this.url = "http://localhost/pedidos/agenda/get_agenda/"+sessionStorage.getItem('usuarioId');
    }

   }

   logout(){
       // Remove API token
       const root = this.app.getRootNav();
       root.popToRoot();
     }

     goToDeletarConsulta(agenda) {
         this._http.post('http://localhost/pedidos/agenda/delete/'+agenda, agenda)
           .subscribe( data => {
             if(true) {
                this.toastCtrl.create({
                 message: 'Exclusão realizada com sucesso !!',
                 duration: 2000
               }).present()
               this.navCtrl.setRoot(AgendaPage);
             }
           }, erro => {
               console.log(erro);
         });
     }


    ngOnInit(){
      let loader = this._loadingCtrl.create({
        content: 'Listando consultas. Aguarde ...'
      });
      loader.present();
      this._http
        .get(this.url)
        .map(res => res.json())
        .toPromise()
        .then(agenda => {
           this.agenda = agenda;
           loader.dismiss();
        })
        .catch(err => {
          console.log(err);
          this._alertCtrl
          .create({
            title: 'Falha na conexão',
            buttons: [{text: 'Estou ciente!'}],
            subTitle: 'Não foi possivel obter as consultas. Tente novamente.'
          }).present();
        });
    }

}
