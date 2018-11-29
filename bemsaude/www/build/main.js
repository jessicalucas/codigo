webpackJsonp([8],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtigocadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_artigo_artigo__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artigos_artigos__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtigocadastroPage = /** @class */ (function () {
    function ArtigocadastroPage(navCtrl, navParams, _alertCtrl, http, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.data = {};
        this.data.response = '';
        this.http = http;
        if (this.navParams.get('artigoSelecionado')) {
            this.flagUpdate = true;
            this.artigo = this.navParams.get('artigoSelecionado');
        }
        else {
            this.flagUpdate = false;
            this.artigo = new __WEBPACK_IMPORTED_MODULE_2__domain_artigo_artigo__["a" /* Artigo */](null, null, null, null, null, null, null, null);
        }
    }
    ArtigocadastroPage.prototype.submit = function () {
        var _this = this;
        //Validação dos campos
        if (!this.artigo.title || !this.artigo.description) {
            this._alertCtrl
                .create({
                title: 'Alerta',
                buttons: [{ text: 'Estou ciente. Fechar' }],
                subTitle: 'Favor preencher os campos obrigatórios'
            }).present();
            return;
        }
        var link = "http://localhost/pedidos/artigo/cadastrar_artigo/" + sessionStorage.getItem('usuarioId');
        var data = JSON.stringify({
            id: this.artigo.id,
            title: this.artigo.title,
            keywords: this.artigo.keywords,
            summary: this.artigo.summary,
            author: this.artigo.author,
            description: this.artigo.description,
            flag_update: this.flagUpdate
            //photo:
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            var res = _this.data.response.split("|");
            if (res[1] == "sucesso") {
                _this.toastCtrl.create({
                    message: 'Cadastro de artigo realizado com sucesso !!',
                    duration: 2000
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__artigos_artigos__["a" /* ArtigosPage */]);
            }
        }, function (erro) {
            console.log(erro);
        });
    };
    ArtigocadastroPage.prototype.goToArtigo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__artigos_artigos__["a" /* ArtigosPage */]);
    };
    ArtigocadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-artigocadastro',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\artigocadastro\artigocadastro.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n        Artigo\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button right (click)="goToArtigo()">\n\n        <ion-icon name="arrow-back"></ion-icon>Voltar\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form id="cadastro-form2">\n\n    <ion-list id="cadastro-list3">\n\n      <ion-item id="cadastro-input3">\n\n        <ion-label stacked>\n\n          Título\n\n        </ion-label>\n\n        <ion-input type="text" [(ngModel)]="artigo.title" name="title" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastro-input4">\n\n        <ion-label stacked>\n\n          Palavra-chave\n\n        </ion-label>\n\n        <ion-input type="text" [(ngModel)]="artigo.keywords" name="keywords" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastro-input4">\n\n        <ion-label stacked>\n\n          Autor\n\n        </ion-label>\n\n        <ion-input type="text" [(ngModel)]="artigo.author" name="keywords" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastro-input5">\n\n        <ion-label stacked>\n\n          Resumo\n\n        </ion-label>\n\n        <ion-input type="text" [(ngModel)]="artigo.summary" name="summary"  laceholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastro-input5">\n\n        <ion-label stacked>\n\n          Conteúdo\n\n        </ion-label>\n\n        <ion-textarea rows="15" [(ngModel)]="artigo.description" name="content" placeholder=""></ion-textarea>\n\n        <!-- <ion-input type="text" [(ngModel)]="artigo.description" name="content"  laceholder=""></ion-input> -->\n\n      </ion-item>\n\n    </ion-list>\n\n    <button id="cadastro-button3" (click)="submit()" ion-button color="secondary" block>\n\n      Salvar Artigo\n\n    </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\artigocadastro\artigocadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ArtigocadastroPage);
    return ArtigocadastroPage;
}());

//# sourceMappingURL=artigocadastro.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalviewartigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artigos_artigos__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalviewartigoPage = /** @class */ (function () {
    function ModalviewartigoPage(navCtrl, _http, _loadingCtrl, navParams, _alertCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.artigo = this.navParams.get('artigoSelecionado');
    }
    ModalviewartigoPage.prototype.goToArtigo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__artigos_artigos__["a" /* ArtigosPage */]);
    };
    ModalviewartigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalviewartigo',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\modalviewartigo\modalviewartigo.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Visualização\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="goToArtigo()">\n        <ion-icon name="arrow-back"></ion-icon>Voltar\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h6  style="font-weight: 700;color: #b709c1;">{{ artigo.title }}</h6>\n  <hr>\n  <p>{{ artigo.summary }}</p>\n  <br>\n  <strong><span>Descrição </span></strong>\n  <p>{{ artigo.description }}</p>\n  <hr>\n  <p><strong style="color:#64c8e6;"> Autor </strong>: {{ artigo.author }} </p>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\modalviewartigo\modalviewartigo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ModalviewartigoPage);
    return ModalviewartigoPage;
}());

//# sourceMappingURL=modalviewartigo.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogcadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_blog_blog__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_blog__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogcadastroPage = /** @class */ (function () {
    function BlogcadastroPage(navCtrl, navParams, _alertCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.data.response = '';
        this.http = http;
        if (this.navParams.get('blogSelecionado')) {
            this.flagUpdate = true;
            this.blog = this.navParams.get('blogSelecionado');
        }
        else {
            this.flagUpdate = false;
            this.blog = new __WEBPACK_IMPORTED_MODULE_2__domain_blog_blog__["a" /* Blog */](null, null, null, null, null, null, null, null);
        }
    }
    BlogcadastroPage.prototype.submit = function () {
        var _this = this;
        //Validação dos campos
        if (!this.blog.title || !this.blog.content) {
            this._alertCtrl
                .create({
                title: 'Alerta',
                buttons: [{ text: 'Estou ciente. Fechar' }],
                subTitle: 'Favor preencher os campos obrigatórios'
            }).present();
            return;
        }
        var link = "http://localhost/pedidos/blog/cadastrar_blog/" + sessionStorage.getItem('usuarioId');
        var data = JSON.stringify({
            id: this.blog.id,
            title: this.blog.title,
            keywords: this.blog.keywords,
            summary: this.blog.summary,
            content: this.blog.content,
            flag_update: this.flagUpdate
            //photo:
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            var res = _this.data.response.split("|");
            if (res[1] == "sucesso") {
                _this.toastCtrl.create({
                    message: 'Cadastro de post realizado com sucesso !!',
                    duration: 2000
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__blog_blog__["a" /* BlogPage */]);
            }
        }, function (erro) {
            console.log(erro);
        });
    };
    BlogcadastroPage.prototype.goToBlog = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__blog_blog__["a" /* BlogPage */]);
    };
    BlogcadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blogcadastro',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\blogcadastro\blogcadastro.html"*/'<ion-header style="background: #45504a;">\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Post\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="goToBlog()">\n        <ion-icon name="arrow-back"></ion-icon>Voltar\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form id="cadastro-form2">\n    <ion-list id="cadastro-list3">\n      <ion-item id="cadastro-input3">\n        <ion-label stacked>\n          Título\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="blog.title" name="title" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item id="cadastro-input4">\n        <ion-label stacked>\n          Palavra-chave\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="blog.keywords" name="keywords" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item id="cadastro-input5">\n        <ion-label stacked>\n          Resumo\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="blog.summary" name="summary"  laceholder=""></ion-input>\n      </ion-item>\n\n      <ion-item id="cadastro-input5">\n        <ion-label stacked>\n          Conteúdo\n        </ion-label>\n        <ion-textarea rows="15" [(ngModel)]="blog.content" name="content" placeholder=""></ion-textarea>\n        <!-- <ion-input type="text" [(ngModel)]="blog.content" name="content"  laceholder=""></ion-input> -->\n      </ion-item>\n    </ion-list>\n    <button id="cadastro-button3" (click)="submit()" ion-button color="secondary" block>\n      Salvar Blog\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\blogcadastro\blogcadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], BlogcadastroPage);
    return BlogcadastroPage;
}());

//# sourceMappingURL=blogcadastro.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalviewblogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_blog__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalviewblogPage = /** @class */ (function () {
    function ModalviewblogPage(navCtrl, _http, _loadingCtrl, navParams, _alertCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.post = this.navParams.get('postSelecionado');
    }
    ModalviewblogPage.prototype.goToBlog = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__blog_blog__["a" /* BlogPage */]);
    };
    ModalviewblogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalviewblog',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\modalviewblog\modalviewblog.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        Visualização\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="goToBlog()">\n        <ion-icon name="arrow-back"></ion-icon>Voltar\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h6  style="font-weight: 700;color: #b709c1;">{{ post.title }}</h6>\n  <hr>\n  <p>{{ post.summary }}</p>\n  <br>\n  <strong><span>Descrição </span></strong>\n  <p>{{ post.content }}</p>\n  <hr>\n  <p><strong style="color:#64c8e6;"> Autor </strong>: {{ post.name }} </p>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\modalviewblog\modalviewblog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ModalviewblogPage);
    return ModalviewblogPage;
}());

//# sourceMappingURL=modalviewblog.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfileditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfilautenticado_perfilautenticado__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfileditarPage = /** @class */ (function () {
    function PerfileditarPage(navCtrl, navParams, _alertCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.data.response = '';
        this.http = http;
        if (this.navParams.get('perfileditado')) {
            this.flagUpdate = true;
            this.perfil = this.navParams.get('perfileditado');
        }
        else {
            this.flagUpdate = false;
        }
    }
    PerfileditarPage.prototype.submit = function () {
        var _this = this;
        var link = "http://localhost/pedidos/perfil/cadastrar_perfil/" + sessionStorage.getItem('usuarioId');
        var data = JSON.stringify({
            id: this.perfil.id,
            about: this.perfil.about,
            who_recommended: this.perfil.who_recommended,
            flag_update: this.flagUpdate
            //photo:
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            var res = _this.data.response.split("|");
            if (res[1] == "sucesso") {
                _this.toastCtrl.create({
                    message: 'Perfil alterado com sucesso !!',
                    duration: 2000
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__perfilautenticado_perfilautenticado__["a" /* PerfilautenticadoPage */]);
            }
        }, function (erro) {
            console.log(erro);
        });
    };
    PerfileditarPage.prototype.goToBlog = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__perfilautenticado_perfilautenticado__["a" /* PerfilautenticadoPage */]);
    };
    PerfileditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfileditar',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\perfileditar\perfileditar.html"*/'<ion-header style="background: #45504a;">\n\n  <ion-navbar >\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n        Meu Perfil\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button right (click)="goToBlog()">\n\n        <ion-icon name="arrow-back"></ion-icon>Voltar\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form id="cadastro-form2">\n\n    <ion-list id="cadastro-list3">\n\n      <ion-item id="cadastro-input5">\n\n        <ion-label stacked>\n\n          Sobre\n\n        </ion-label>\n\n        <ion-textarea rows="15" [(ngModel)]="perfil.about" name="about" placeholder="escreva sobre você"></ion-textarea>\n\n      </ion-item>\n\n\n\n      <ion-item id="cadastro-input5">\n\n        <ion-label stacked>\n\n          Recomendações\n\n        </ion-label>\n\n        <ion-textarea rows="15" [(ngModel)]="perfil.who_recommended" name="who_recommended" placeholder=""></ion-textarea>\n\n        <!-- <ion-input type="text" [(ngModel)]="blog.content" name="content"  laceholder=""></ion-input> -->\n\n      </ion-item>\n\n    </ion-list>\n\n    <button id="cadastro-button3" (click)="submit()" ion-button color="secondary" block>\n\n      Salvar Perfil\n\n    </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\perfileditar\perfileditar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PerfileditarPage);
    return PerfileditarPage;
}());

//# sourceMappingURL=perfileditar.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/artigocadastro/artigocadastro.module": [
		292,
		7
	],
	"../pages/blogcadastro/blogcadastro.module": [
		293,
		6
	],
	"../pages/cadastro/cadastro.module": [
		294,
		5
	],
	"../pages/menu/menu.module": [
		295,
		4
	],
	"../pages/modalviewartigo/modalviewartigo.module": [
		296,
		3
	],
	"../pages/modalviewblog/modalviewblog.module": [
		297,
		2
	],
	"../pages/perfilautenticado/perfilautenticado.module": [
		298,
		1
	],
	"../pages/perfileditar/perfileditar.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(username, email, password, type, status) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.type = type;
        this.status = status;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, _http, _alertCtrl, _loadingCtrl, app, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._alertCtrl = _alertCtrl;
        this._loadingCtrl = _loadingCtrl;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.contato = this.navParams.get('usuarioSelecionado');
        this.url = "http://localhost/pedidos/perfil/get_perfil/" + this.contato.id;
        this.tipo = sessionStorage.getItem('tipo');
        this.http = http;
        this.data = {};
        this.data.response = "";
    }
    PerfilPage.prototype.pushNotificationChange = function () {
        var _this = this;
        var link = "http://localhost/pedidos/contato/salvar/" + this.contato.id_contato;
        var data = JSON.stringify({
            id: this.contato.id_contato,
            permission_message: this.pushNotification,
            flag_update: this.flagUpdate
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
        }, function (erro) {
            console.log(erro);
        });
    };
    ;
    PerfilPage.prototype.logout = function () {
        // Remove API token
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    PerfilPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: "Buscando perfil. Aguarde..."
        });
        loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (perfil) {
            _this.perfil = perfil;
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            loader.dismiss();
            _this._alertCtrl
                .create({
                title: "Falha na conexão",
                buttons: [{ text: 'Sair' }],
                subTitle: "Falha ao visualizar perfil. Tente novamente .."
            }).present();
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\perfil\perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Perfil\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="logout()" style="color:#fff;">\n        <ion-icon ios="ios-undo" md="md-undo"></ion-icon>Sair\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page1">\n  <ion-card *ngFor=\'let user of perfil\'>\n    <ion-card-header>\n        {{ user.nameuser }}\n    </ion-card-header>\n    <hr>\n    <ion-card-content>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          Nascimento: {{ user.birthday | date: "MM/dd/yyyy" }}\n      </ion-item>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          Email: {{ user.email }}\n      </ion-item>\n      <div *ngIf= "tipo == \'1\'">\n        <ion-item color="balanced" id="restaurantes-list-item8">\n            Telefone(s) de atendimento: {{ user.cellphone }}\n        </ion-item>\n      </div>\n      <div *ngIf= "tipo == \'0\'">\n        <ion-item color="balanced" id="restaurantes-list-item8">\n            Telefone: {{ user.cellphone }}\n        </ion-item>\n      </div>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n            Sobre: {{ user.about }}\n      </ion-item>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n              Área que atua: {{ user.name }}\n      </ion-item>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n              Recomedações: {{ user.who_recommended }}\n      </ion-item>\n      <ion-item *ngIf= "tipo == \'0\'">\n        <ion-label>Permitir in-mail</ion-label>\n        <ion-checkbox [(ngModel)]="pushNotification"\n                              (ionChange)="pushNotificationChange()">\n                  Push Notifications\n                </ion-checkbox>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\perfil\perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Chat\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9"></ion-content>'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\chat\chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_usuario_usuario__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.data.response = '';
        this.http = http;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_3__domain_usuario_usuario__["a" /* Usuario */](null, null, null, null, null);
        if (sessionStorage.getItem('flagLogado') != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
        }
    }
    LoginPage.prototype.submit = function () {
        var _this = this;
        var link = 'http://localhost/pedidos/page/login_ionic';
        var data = JSON.stringify({ email: this.usuario.email, password: this.usuario.password });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            var res = _this.data.response.split("|");
            if (res[2] == "sucesso") {
                //autenticação
                sessionStorage.setItem("usuarioId", res[1]);
                sessionStorage.setItem("usuarioLogado", _this.usuario.email);
                sessionStorage.setItem("usuarioTipo", '1');
                sessionStorage.setItem("flagLogado", "sim");
                sessionStorage.setItem("tipo", res[0]);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
            }
            else if (_this.data.response == 'invalido') {
                _this.toastCtrl.create({
                    message: 'Login ou senha inválida !!',
                    duration: 2000
                }).present();
            }
        }, function (error) {
            console.log('erro de conexao');
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n\n  <div style="height:194px;">\n\n      <h1>Bem Saúde</h1>\n      <!-- <img src="assets/imgs/batida.png" class="img-logo"/> -->\n\n</div>\n  <form id="login-form1">\n    <div class="color-field">\n        <ion-label >\n          Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="usuario.email"  name="email" placeholder="Digite seu e-mail"></ion-input>\n\n        <ion-label >\n          Senha\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="usuario.password" name="password" placeholder="Digite a sua senha"></ion-input>\n    </div>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button id="login-button1" ion-button color="secondary" round full (click)="submit()">\n      Entrar\n    </button>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contatos_contatos__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_consultas_consultas__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_agenda_agenda__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_artigos_artigos__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_in_mail_in_mail__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_perfilautenticado_perfilautenticado__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_blogcadastro_blogcadastro__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_artigocadastro_artigocadastro__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modalviewartigo_modalviewartigo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modalviewblog_modalviewblog__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_perfileditar_perfileditar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_toPromise__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contatos_contatos__["a" /* ContatosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_consultas_consultas__["a" /* ConsultasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_artigos_artigos__["a" /* ArtigosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_in_mail_in_mail__["a" /* InMailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perfilautenticado_perfilautenticado__["a" /* PerfilautenticadoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_blogcadastro_blogcadastro__["a" /* BlogcadastroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_artigocadastro_artigocadastro__["a" /* ArtigocadastroPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modalviewartigo_modalviewartigo__["a" /* ModalviewartigoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_modalviewblog_modalviewblog__["a" /* ModalviewblogPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_perfileditar_perfileditar__["a" /* PerfileditarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/artigocadastro/artigocadastro.module#ArtigocadastroPageModule', name: 'ArtigocadastroPage', segment: 'artigocadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blogcadastro/blogcadastro.module#BlogcadastroPageModule', name: 'BlogcadastroPage', segment: 'blogcadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalviewartigo/modalviewartigo.module#ModalviewartigoPageModule', name: 'ModalviewartigoPage', segment: 'modalviewartigo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalviewblog/modalviewblog.module#ModalviewblogPageModule', name: 'ModalviewblogPage', segment: 'modalviewblog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfilautenticado/perfilautenticado.module#PerfilautenticadoPageModule', name: 'PerfilautenticadoPage', segment: 'perfilautenticado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfileditar/perfileditar.module#PerfileditarPageModule', name: 'PerfileditarPage', segment: 'perfileditar', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contatos_contatos__["a" /* ContatosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_consultas_consultas__["a" /* ConsultasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_artigos_artigos__["a" /* ArtigosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_in_mail_in_mail__["a" /* InMailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perfilautenticado_perfilautenticado__["a" /* PerfilautenticadoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_blogcadastro_blogcadastro__["a" /* BlogcadastroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_artigocadastro_artigocadastro__["a" /* ArtigocadastroPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modalviewartigo_modalviewartigo__["a" /* ModalviewartigoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_modalviewblog_modalviewblog__["a" /* ModalviewblogPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_perfileditar_perfileditar__["a" /* PerfileditarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artigo; });
var Artigo = /** @class */ (function () {
    function Artigo(id, title, keywords, summary, description, user_id, author, photo) {
        this.id = id;
        this.title = title;
        this.keywords = keywords;
        this.summary = summary;
        this.description = description;
        this.user_id = user_id;
        this.author = author;
        this.photo = photo;
    }
    return Artigo;
}());

//# sourceMappingURL=artigo.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blog; });
var Blog = /** @class */ (function () {
    function Blog(id, title, keywords, summary, content, user_id, name, photo) {
        this.id = id;
        this.title = title;
        this.keywords = keywords;
        this.summary = summary;
        this.content = content;
        this.user_id = user_id;
        this.name = name;
        this.photo = photo;
    }
    return Blog;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inmail; });
var Inmail = /** @class */ (function () {
    function Inmail(message, status_sender, status_receiver, sender_id, receiver_id, created_at, updated_at, id, name, email, contact_second_id, photo) {
        this.message = message;
        this.status_sender = status_sender;
        this.status_receiver = status_receiver;
        this.sender_id = sender_id;
        this.receiver_id = receiver_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.id = id;
        this.name = name;
        this.email = email;
        this.contact_second_id = contact_second_id;
        this.photo = photo;
    }
    return Inmail;
}());

//# sourceMappingURL=inmail.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contatos_contatos__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_artigos_artigos__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_blog_blog__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_in_mail_in_mail__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_agenda_agenda__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_perfilautenticado_perfilautenticado__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.tipo = sessionStorage.getItem('tipo');
        });
    }
    MyApp.prototype.goToPerfil = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_perfilautenticado_perfilautenticado__["a" /* PerfilautenticadoPage */]);
    };
    MyApp.prototype.goToContatos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_contatos_contatos__["a" /* ContatosPage */]);
    };
    MyApp.prototype.goToConsultas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_agenda_agenda__["a" /* AgendaPage */]);
    };
    MyApp.prototype.goToArtigos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_artigos_artigos__["a" /* ArtigosPage */]);
    };
    MyApp.prototype.goToBlog = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_blog_blog__["a" /* BlogPage */]);
    };
    MyApp.prototype.goToInMail = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_in_mail_in_mail__["a" /* InMailPage */]);
    };
    MyApp.prototype.goToPaciente = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__["a" /* CadastroPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n          <img src="assets/imgs/batida.png" class="img-logo"/>\n          <br>\n          <h2>Bem Saúde</h2>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToPerfil()" id="menu-list-item1" *ngIf= "tipo == \'0\'">\n        Perfil\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToContatos()" id="menu-list-item2">\n        Contatos\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToConsultas()" id="menu-list-item3">\n        Agenda\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToArtigos()" id="menu-list-item4">\n        Artigos\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToBlog()" id="menu-list-item5">\n        Blog\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToInMail()" id="menu-list-item6">\n        In-Mail\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToPaciente()" id="menu-list-item7" *ngIf= "tipo == \'0\'">\n        Cadastrar paciente\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultasPage = /** @class */ (function () {
    function ConsultasPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConsultasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultas',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\consultas\consultas.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Consultas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\consultas\consultas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ConsultasPage);
    return ConsultasPage;
}());

//# sourceMappingURL=consultas.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtigosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artigocadastro_artigocadastro__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalviewartigo_modalviewartigo__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtigosPage = /** @class */ (function () {
    function ArtigosPage(navCtrl, _http, _loadingCtrl, _alertCtrl, toastCtrl, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.tipo = sessionStorage.getItem('tipo');
    }
    ArtigosPage_1 = ArtigosPage;
    ArtigosPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: 'Listando artigos. Aguarde ...'
        });
        loader.present();
        this._http
            .get('http://localhost/pedidos/artigo/get_artigo')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (artigos) {
            _this.artigo = artigos;
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl
                .create({
                title: 'Falha na conexão',
                buttons: [{ text: 'Estou ciente!' }],
                subTitle: 'Não foi possivel obter a listagem de artigos. Tente novamente.'
            }).present();
        });
    };
    ArtigosPage.prototype.goToViewArtigo = function (artigo) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__modalviewartigo_modalviewartigo__["a" /* ModalviewartigoPage */], { artigoSelecionado: artigo });
    };
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
    ArtigosPage.prototype.goToDeletarArtigo = function (artigo) {
        var _this = this;
        this._http.post('http://localhost/pedidos/artigo/delete/' + artigo, artigo)
            .subscribe(function (data) {
            if (true) {
                _this.toastCtrl.create({
                    message: 'Exclusão realizada com sucesso !!',
                    duration: 2000
                }).present();
                _this.navCtrl.setRoot(ArtigosPage_1);
            }
        }, function (erro) {
            console.log(erro);
        });
    };
    ArtigosPage.prototype.goToCadastroArtigoNew = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__artigocadastro_artigocadastro__["a" /* ArtigocadastroPage */]);
    };
    ArtigosPage.prototype.goToCadastroArtigo = function (artigo) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__artigocadastro_artigocadastro__["a" /* ArtigocadastroPage */], { artigoSelecionado: artigo });
    };
    ArtigosPage = ArtigosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-artigos',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\artigos\artigos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Artigo\n    </ion-title>\n\n      <ion-buttons end>\n        <button ion-button right (click)="goToCadastroArtigoNew()" *ngIf= "tipo == \'0\'">\n          <ion-icon name="ios-create-outline" ></ion-icon>Cadastrar\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <ion-card *ngFor=\'let post of artigo\' id="artigos-card21">\n    <ion-list style="padding:12px; ">\n      <h1  style="color: #3bd08b; font-weight: 700;"> Bem Saúde\n          <span (click)="goToViewArtigo(post)" item-right><ion-icon name="ios-eye" item-right style="float:right;"></ion-icon></span>\n      </h1>\n      <br>\n      <h2  style="font-weight: 700;color: #b709c1;">{{ post.title }}</h2>\n      <hr>\n      <p>{{ post.summary }}</p>\n      <br>\n      <p><strong style="color:#64c8e6;"> Autor </strong>: {{ post.author }} </p>\n\n      <div *ngIf= "tipo == \'0\'">\n        <ion-item color="assertive" id="listarCardapios-list-item7">\n  		    <span (click)="goToCadastroArtigo(post)"><ion-icon name="create" item-left></ion-icon>Editar</span>\n  		    <span (click)="goToDeletarArtigo(post.id)" item-right><ion-icon name="close" item-left></ion-icon>Excluir</span>\n        </ion-item>\n      </div>\n\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\artigos\artigos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ArtigosPage);
    return ArtigosPage;
    var ArtigosPage_1;
}());

//# sourceMappingURL=artigos.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blogcadastro_blogcadastro__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalviewblog_modalviewblog__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogPage = /** @class */ (function () {
    function BlogPage(navCtrl, _http, _loadingCtrl, _alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.toastCtrl = toastCtrl;
        this.tipo = sessionStorage.getItem('tipo');
    }
    BlogPage_1 = BlogPage;
    BlogPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: 'Listando posts. Aguarde ...'
        });
        loader.present();
        this._http
            .get('http://localhost/pedidos/blog/get_blog')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (blogs) {
            _this.blog = blogs;
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl
                .create({
                title: 'Falha na conexão',
                buttons: [{ text: 'Estou ciente!' }],
                subTitle: 'Não foi possivel obter a listagem de posts. Tente novamente.'
            }).present();
        });
    };
    BlogPage.prototype.goToViewBlog = function (post) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__modalviewblog_modalviewblog__["a" /* ModalviewblogPage */], { postSelecionado: post });
    };
    BlogPage.prototype.goToDeletarBlog = function (blog) {
        var _this = this;
        this._http.post('http://localhost/pedidos/blog/delete/' + blog, blog)
            .subscribe(function (data) {
            if (true) {
                _this.toastCtrl.create({
                    message: 'Exclusão realizada com sucesso !!',
                    duration: 2000
                }).present();
                _this.navCtrl.setRoot(BlogPage_1);
            }
        }, function (erro) {
            console.log(erro);
        });
    };
    BlogPage.prototype.goToCadastroBlog = function (blog) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__blogcadastro_blogcadastro__["a" /* BlogcadastroPage */], { blogSelecionado: blog });
    };
    BlogPage.prototype.goToCadastroBlogNew = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__blogcadastro_blogcadastro__["a" /* BlogcadastroPage */]);
    };
    BlogPage = BlogPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\blog\blog.html"*/'<ion-header>\n  <ion-navbar style="backgound:linear-gradient(-90deg, red, yellow);">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Blog\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="goToCadastroBlogNew()" *ngIf= "tipo == \'0\'">\n        <ion-icon name="ios-create-outline" ></ion-icon>Cadastrar\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n\n  <ion-card *ngFor=\'let post of blog\' id="blog-card22">\n\n    <!-- <img src="{{ post.card }}"/> -->\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center; background-image: url(\'assets/imgs/blog.jpg\'); background-size: cover;">\n         <h1  style="color: #8bfd84;font-weight: 700;padding-top:90px;"> Bem Saúde</h1>\n         <h2  style="color: #fff;font-weight: 700;">{{ post.title }}</h2>\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n\n      <ion-item color="assertive" id="blog-list-item13">\n        <ion-icon name="clipboard" item-left></ion-icon>\n        Autor: {{ post.name }} - <span (click)="goToViewBlog(post)" item-right><ion-icon name="ios-eye" item-right style="float:right;font-size: 2pc;"></ion-icon></span>\n      </ion-item>\n\n      <div *ngIf= "tipo == \'0\'">\n        <ion-item color="assertive" id="listarCardapios-list-item7">\n  		    <span (click)="goToCadastroBlog(post)"><ion-icon name="create" item-left></ion-icon>Editar</span>\n  		    <span (click)="goToDeletarBlog(post.id)" item-right><ion-icon name="close" item-left></ion-icon>Excluir</span>\n        </ion-item>\n      </div>\n\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\blog\blog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], BlogPage);
    return BlogPage;
    var BlogPage_1;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilautenticadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfileditar_perfileditar__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilautenticadoPage = /** @class */ (function () {
    function PerfilautenticadoPage(navCtrl, navParams, _http, _alertCtrl, _loadingCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._alertCtrl = _alertCtrl;
        this._loadingCtrl = _loadingCtrl;
        this.app = app;
        this.url = "http://localhost/pedidos/perfil/get_perfil/" + sessionStorage.getItem('usuarioId');
    }
    PerfilautenticadoPage.prototype.logout = function () {
        // Remove API token
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    PerfilautenticadoPage.prototype.editar = function (perfil) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__perfileditar_perfileditar__["a" /* PerfileditarPage */], { perfileditado: perfil });
    };
    PerfilautenticadoPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: "Buscando seu perfil. Aguarde..."
        });
        loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (perfil) {
            _this.perfil = perfil;
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            loader.dismiss();
            _this._alertCtrl
                .create({
                title: "Falha na conexão",
                buttons: [{ text: 'Sair' }],
                subTitle: "Falha ao visualizar seu perfil. Tente novamente .."
            }).present();
        });
    };
    PerfilautenticadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfilautenticado',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\perfilautenticado\perfilautenticado.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Perfil\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="logout()" style="color:#3bd08b;">\n        <ion-icon ios="ios-undo" md="md-undo"></ion-icon>Sair\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor=\'let user of perfil\'>\n    <ion-card-content>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          Nome: {{ user.nameuser }}\n      </ion-item>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          Email: {{ user.email }}\n      </ion-item>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          Sobre: {{ user.about }}\n      </ion-item>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          Profissão: {{ user.type }}\n      </ion-item>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          Área que atua: {{ user.name }}\n      </ion-item>\n\n      <button id="login-button1" ion-button round full color="secondary" (click)="editar(user)">\n          EDITAR PERFIL\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\perfilautenticado\perfilautenticado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], PerfilautenticadoPage);
    return PerfilautenticadoPage;
}());

//# sourceMappingURL=perfilautenticado.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_usuario_usuario__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, http, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.data = {};
        this.data.response = "";
        this.http = http;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__domain_usuario_usuario__["a" /* Usuario */](null, null, null, null, null);
    }
    CadastroPage.prototype.logout = function () {
        // Remove API token
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    CadastroPage.prototype.submit = function () {
        var _this = this;
        var link = "http://localhost/pedidos/page/cadastrar_usuario";
        var data = JSON.stringify({
            username: this.usuario.username,
            email: this.usuario.email,
            password: this.usuario.password
        });
        //iniciando a conexao http para cadstro via json
        this.http.post(link, data).subscribe(function (data) {
            _this.data.response = data._body;
            var res = _this.data.response.split("|");
            if (res[1] == "sucesso") {
                _this.toastCtrl.create({
                    message: 'Cadastro de paciente realizado com sucesso !!',
                    duration: 2000
                }).present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
            }
        }, function (error) {
            console.log('Ocorreu falha ao registrar usuário');
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\cadastro\cadastro.html"*/'<ion-header>\n  <ion-navbar style="backgound:linear-gradient(-90deg, red, yellow);">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cadastrar Paciente\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="logout()" style="color:#fff;">\n        <ion-icon ios="ios-undo" md="md-undo"></ion-icon>Sair\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form id="cadastro-form2">\n    <ion-list id="cadastro-list3">\n      <ion-item id="cadastro-input3">\n        <ion-label>\n          Nome\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.name" name="name" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="cadastro-input3">\n        <ion-label>\n          Sobrenome\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.username" name="username" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="cadastro-input4">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="usuario.email" name="email"  placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="cadastro-input5">\n        <ion-label>\n          Senha\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="usuario.password" name="password"  placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="cadastro-button3" (click)="submit()" ion-button color="secondary" block>\n      Salvar\n    </button>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contatos_contatos__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artigos_artigos__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_blog__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_mail_in_mail__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agenda_agenda__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__perfilautenticado_perfilautenticado__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cadastro_cadastro__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.tipo = sessionStorage.getItem('tipo');
    }
    MenuPage.prototype.goToPerfil = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__perfilautenticado_perfilautenticado__["a" /* PerfilautenticadoPage */]);
    };
    MenuPage.prototype.goToContatos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__contatos_contatos__["a" /* ContatosPage */]);
    };
    MenuPage.prototype.goToConsultas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__agenda_agenda__["a" /* AgendaPage */]);
    };
    MenuPage.prototype.goToArtigos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__artigos_artigos__["a" /* ArtigosPage */]);
    };
    MenuPage.prototype.goToBlog = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__blog_blog__["a" /* BlogPage */]);
    };
    MenuPage.prototype.goToInMail = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__in_mail_in_mail__["a" /* InMailPage */]);
    };
    MenuPage.prototype.goToChat = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */]);
    };
    MenuPage.prototype.goToPaciente = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    MenuPage.prototype.logout = function () {
        // Remove API token
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\menu\menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Bem Saúde\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="logout()" style="color:#3bd08b;">\n        <ion-icon ios="ios-undo" md="md-undo"></ion-icon>Sair\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="side-menu21">\n\n  <!-- <ion-card> -->\n    <ion-list id="menu-list1">\n      <div *ngIf= "tipo == \'0\'">\n        <ion-item color="none" menuClose="" on-click="goToPerfil()" id="menu-list-item1">\n          Meu Perfil\n        </ion-item>\n      </div>\n      <ion-item color="none" menuClose="" on-click="goToContatos()" id="menu-list-item2">\n        Contatos\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToConsultas()" id="menu-list-item3">\n        Agenda\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToArtigos()" id="menu-list-item4">\n        Artigos\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToBlog()" id="menu-list-item5">\n        Blog\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToInMail()" id="menu-list-item6">\n        In-Mail\n      </ion-item>\n      <div *ngIf= "tipo == \'0\'">\n        <ion-item color="none" menuClose="" on-click="goToPaciente()" id="menu-list-item7">\n          Cadastrar Paciente\n        </ion-item>\n      </div>\n    </ion-list>\n  <!-- </ion-card> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContatosPage = /** @class */ (function () {
    function ContatosPage(navCtrl, navParams, _http, _alertCtrl, _loadingCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._alertCtrl = _alertCtrl;
        this._loadingCtrl = _loadingCtrl;
        this.app = app;
        this.searchTerm = '';
        this.url = "http://localhost/pedidos/contato/get_contato/" + sessionStorage.getItem('usuarioId');
    }
    ContatosPage.prototype.logout = function () {
        // Remove API token
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    ContatosPage.prototype.setFilteredItems = function () {
        this.contatos = this.filterItems(this.searchTerm);
    };
    ContatosPage.prototype.filterItems = function (searchTerm) {
        if (searchTerm && searchTerm.trim() != '') {
            return this.contatos.filter(function (contato) {
                return contato.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        }
        else {
            this.ngOnInit();
        }
    };
    ContatosPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: "Buscando contatos. Aguarde..."
        });
        loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (contatos) {
            _this.contatos = contatos;
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            loader.dismiss();
            _this._alertCtrl
                .create({
                title: "Falha na conexão",
                buttons: [{ text: 'Sair' }],
                subTitle: "Tente novamente"
            }).present();
        });
    };
    ContatosPage.prototype.seleciona = function (contato) {
        console.log(contato);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */], { usuarioSelecionado: contato });
    };
    ContatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contatos',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\contatos\contatos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Contatos\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="logout()" style="color:#fff;">\n        <ion-icon ios="ios-undo" md="md-undo"></ion-icon>Sair\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()" placeholder="pesquisar.."></ion-searchbar>\n\n  <ion-card *ngFor=\'let contato of contatos\' (click)="seleciona(contato)" id="restaurantes-card21">\n    <ion-list>\n      <ion-item id="restaurantes-list-item-container2">\n        <div id="restaurantes-markdown2" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            <ion-icon name="contact" item-left></ion-icon>\n            <strong>\n              {{ contato.name }}\n            </strong>\n          </p>\n        </div>\n      </ion-item>\n\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          E-mail - {{ contato.email }}\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\contatos\contatos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ContatosPage);
    return ContatosPage;
}());

//# sourceMappingURL=contatos.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_inmail_inmail__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InMailPage = /** @class */ (function () {
    function InMailPage(navCtrl, navParams, _http, http, _alertCtrl, _loadingCtrl, toastCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._alertCtrl = _alertCtrl;
        this._loadingCtrl = _loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.searchTerm = '';
        this.http = http;
        this.url = "http://localhost/pedidos/inmail/get_inmail/" + sessionStorage.getItem('usuarioId');
        this.urlenviados = "http://localhost/pedidos/inmail/get_inmail_enviados/" + sessionStorage.getItem('usuarioId');
        if (sessionStorage.getItem('tipo') == '1') {
            this.link = "http://localhost/pedidos/contato/get_contato_message_paciente/" + sessionStorage.getItem('usuarioId');
        }
        else {
            this.link = "http://localhost/pedidos/contato/get_contato_message/" + sessionStorage.getItem('usuarioId');
        }
        this.newInmail = new __WEBPACK_IMPORTED_MODULE_3__domain_inmail_inmail__["a" /* Inmail */](null, null, null, null, null, null, null, null, null, null, null, null);
        this._http
            .get(this.link)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (contatos) {
            _this.contatos = contatos;
        });
    }
    InMailPage_1 = InMailPage;
    InMailPage.prototype.setFilteredItems = function () {
        this.inmail = this.filterItems(this.searchTerm);
    };
    InMailPage.prototype.filterItems = function (searchTerm) {
        if (searchTerm && searchTerm.trim() != '') {
            return this.inmail.filter(function (contato) {
                return contato.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        }
        else {
            this.ngOnInit();
        }
    };
    InMailPage.prototype.logout = function () {
        // Remove API token
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    InMailPage.prototype.ngOnInit = function () {
        var _this = this;
        // let loader = this._loadingCtrl.create({
        //   content: "Buscando contatos do email. Aguarde..."
        // });
        // loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (contatos) {
            _this.inmail = contatos;
        });
        this._http
            .get(this.urlenviados)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (contatosenviados) {
            _this.enviados = contatosenviados;
        })
            .catch(function (err) {
            _this._alertCtrl
                .create({
                title: "Falha na conexão",
                buttons: [{ text: 'Sair' }],
                subTitle: "Tente novamente"
            }).present();
        });
    };
    InMailPage.prototype.submit = function () {
        var _this = this;
        var link = "http://localhost/pedidos/inmail/cadastrar_inmail/" + sessionStorage.getItem('usuarioId');
        var data = JSON.stringify({
            message: this.newInmail.message,
            sender_id: this.newInmail.sender_id,
            receiver_id: this.newInmail.receiver_id,
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            var res = _this.data.response.split("|");
            if (res[1] == "sucesso") {
                _this.toastCtrl.create({
                    message: 'Cadastro de in-mail realizado com sucesso !!',
                    duration: 3000
                }).present();
                _this.navCtrl.setRoot(InMailPage_1);
            }
        }, function (erro) {
            console.log(erro);
        });
    };
    InMailPage = InMailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-in-mail',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\in-mail\in-mail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      In-Mail\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="logout()" style="color:#fff;">\n        <ion-icon ios="ios-undo" md="md-undo"></ion-icon>Sair\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()" placeholder="pesquisar.."></ion-searchbar>\n\n  <div padding>\n    <ion-segment [(ngModel)]="message">\n      <ion-segment-button value="entrada">\n        Entrada\n      </ion-segment-button>\n      <ion-segment-button value="saida">\n        Saída\n      </ion-segment-button>\n      <ion-segment-button value="novo">\n        Novo\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n    <div [ngSwitch]="message">\n      <div *ngFor="let contato of inmail">\n        <ng-container *ngSwitchCase="\'entrada\'">\n            <ion-label>{{ contato.name }}</ion-label>\n            <ion-icon ios="ios-mail" md="ios-mail-outline"></ion-icon> {{ contato.message }}\n            <hr>\n        </ng-container>\n      </div>\n\n      <div  *ngFor="let enviado of enviados">\n        <ng-container *ngSwitchCase="\'saida\'">\n          <ion-label>{{ enviado.message }}</ion-label>\n          in-mail enviado: {{ enviado.email }}\n          <hr>\n        </ng-container>\n      </div>\n\n      <div>\n        <ng-container *ngSwitchCase="\'novo\'">\n          <form id="cadastro-form2">\n            <ion-list id="cadastro-list3">\n              <ion-item id="cadastro-input5">\n                <ion-label stacked>\n                  Contatos\n                </ion-label>\n                <ion-select [(ngModel)]="newInmail.sender_id" name="sender_id">\n                  <ion-option *ngFor="let contato of contatos" [value] = "contato.id">{{ contato.name }}</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item id="cadastro-input5">\n                <ion-label stacked>\n                  Mensagem\n                </ion-label>\n                <ion-textarea rows="9" [(ngModel)]="newInmail.message" name="message" placeholder=""></ion-textarea>\n              </ion-item>\n            </ion-list>\n            <button id="cadastro-button3" (click)="submit()" ion-button color="secondary" block>\n              Enviar\n            </button>\n          </form>\n        </ng-container>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\in-mail\in-mail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], InMailPage);
    return InMailPage;
    var InMailPage_1;
}());

//# sourceMappingURL=in-mail.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, _http, _loadingCtrl, _alertCtrl, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.tipo = sessionStorage.getItem('tipo');
        if (sessionStorage.getItem('tipo') == '1') {
            this.url = "http://localhost/pedidos/agenda/get_agenda_paciente/" + sessionStorage.getItem('usuarioId');
        }
        else {
            this.url = "http://localhost/pedidos/agenda/get_agenda/" + sessionStorage.getItem('usuarioId');
        }
    }
    AgendaPage_1 = AgendaPage;
    AgendaPage.prototype.logout = function () {
        // Remove API token
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    AgendaPage.prototype.goToDeletarConsulta = function (agenda) {
        var _this = this;
        this._http.post('http://localhost/pedidos/agenda/delete/' + agenda, agenda)
            .subscribe(function (data) {
            if (true) {
                _this.toastCtrl.create({
                    message: 'Exclusão realizada com sucesso !!',
                    duration: 2000
                }).present();
                _this.navCtrl.setRoot(AgendaPage_1);
            }
        }, function (erro) {
            console.log(erro);
        });
    };
    AgendaPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: 'Listando consultas. Aguarde ...'
        });
        loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (agenda) {
            _this.agenda = agenda;
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl
                .create({
                title: 'Falha na conexão',
                buttons: [{ text: 'Estou ciente!' }],
                subTitle: 'Não foi possivel obter as consultas. Tente novamente.'
            }).present();
        });
    };
    AgendaPage = AgendaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"C:\wamp64\www\bemsaude\src\pages\agenda\agenda.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Agenda\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button right (click)="logout()" style="color:#fff;">\n        <ion-icon ios="ios-undo" md="md-undo"></ion-icon>Sair\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n\n  <ion-card *ngFor=\'let consulta of agenda\' id="restaurantes-card21">\n    <ion-list>\n      <ion-item id="restaurantes-list-item-container2">\n        <div id="restaurantes-markdown2" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;">\n            <strong>\n              <ion-icon name="contact" item-left></ion-icon>\n              Paciente: {{ consulta.nameUser }} - {{ consulta.title  }}\n            </strong>\n          </p>\n          <hr>\n          <p>\n              Descrição: {{ consulta.description }}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item> Atendimento marcado para: </ion-item>\n      <ion-item color="balanced" id="restaurantes-list-item8">\n          {{ consulta.created_at | date: "MM/dd/yyyy - HH:mm"}}\n      </ion-item>\n\n        <ion-item color="assertive" id="listarCardapios-list-item7" *ngIf= "tipo == \'1\'">\n  		    <span (click)="goToDeletarConsulta(consulta.id)" item-right><ion-icon name="close" item-left></ion-icon> Remover consulta</span>\n        </ion-item>\n\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\bemsaude\src\pages\agenda\agenda.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AgendaPage);
    return AgendaPage;
    var AgendaPage_1;
}());

//# sourceMappingURL=agenda.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map