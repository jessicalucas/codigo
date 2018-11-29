import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ModalController } from 'ionic-angular';
import { Blog } from '../../domain/blog/blog';
import { Http } from '@angular/http';
import { BlogPage } from '../blog/blog';


@IonicPage()
@Component({
  selector: 'page-modalviewblog',
  templateUrl: 'modalviewblog.html',
})
export class ModalviewblogPage {

  public post: Blog;

  constructor(public navCtrl: NavController,
              private _http:Http,
              private _loadingCtrl: LoadingController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController) {

        this.post = this.navParams.get('postSelecionado');

  }

  goToBlog() {
    this.navCtrl.setRoot(BlogPage);
  }


}
