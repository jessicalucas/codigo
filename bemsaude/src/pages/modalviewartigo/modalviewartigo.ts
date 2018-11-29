import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ModalController } from 'ionic-angular';
import { Artigo } from '../../domain/artigo/artigo';
import { Http } from '@angular/http';
import { ArtigosPage } from '../artigos/artigos';


@IonicPage()
@Component({
  selector: 'page-modalviewartigo',
  templateUrl: 'modalviewartigo.html',
})
export class ModalviewartigoPage {

  public artigo: Artigo;

  constructor(public navCtrl: NavController,
              private _http:Http,
              private _loadingCtrl: LoadingController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController) {

        this.artigo = this.navParams.get('artigoSelecionado');

  }

  goToArtigo() {
    this.navCtrl.setRoot(ArtigosPage);
  }

}
