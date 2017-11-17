webpackJsonp([1],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OzgecmisPageModule", function() { return OzgecmisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ozgecmis__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_date_pipe_module__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OzgecmisPageModule = /** @class */ (function () {
    function OzgecmisPageModule() {
    }
    OzgecmisPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ozgecmis__["a" /* OzgecmisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ozgecmis__["a" /* OzgecmisPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_date_pipe_module__["a" /* DatePipeModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ozgecmis__["a" /* OzgecmisPage */]
            ]
        })
    ], OzgecmisPageModule);
    return OzgecmisPageModule;
}());

//# sourceMappingURL=ozgecmis.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzgecmisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ozgecmis_ser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ozgecmis_detay_ozgecmis_detay__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OzgecmisPage = /** @class */ (function () {
    function OzgecmisPage(navCtrl, navParams, ilanSer, ozgecmisSer, authService, alertCtrl, storage, events, actionSheetCtrl, face, plt, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ilanSer = ilanSer;
        this.ozgecmisSer = ozgecmisSer;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.events = events;
        this.actionSheetCtrl = actionSheetCtrl;
        this.face = face;
        this.plt = plt;
        this.socialSharing = socialSharing;
        // this.ozgecmis = ozgecmisSer.ozgecmis;
        console.log('ionViewDidLoad OzgecmisPage const');
    }
    OzgecmisPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.authService.currentUser) {
            console.log('ozgecmis checkauth');
            this.authService.checkAuthentication().then(function (res) {
                _this.ozgecmisSer.getOzgecmis(_this.authService.currentUser.ozgecmis)
                    .then(function (ozgecmis) { return _this.ozgecmis = ozgecmis; })
                    .catch(function (err) { });
            }, function (err) {
                console.log('ozgecmis checkauth error');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            console.log('ionViewWillEnter OzgecmisPage const');
            // this.storage.get('ozgecmis').then((ozgecmis) => {
            //   console.log("storage"+ JSON.stringify(ozgecmis));
            //   this.ozgecmis = ozgecmis;
            //   });
            // console.log("storage"+ JSON.stringify(this.authService.currentUser.ozgecmis));
            this.ozgecmisSer.getOzgecmis(this.authService.currentUser.ozgecmis)
                .then(function (ozgecmis) { return _this.ozgecmis = ozgecmis; })
                .catch(function (err) { });
        }
        this.events.subscribe('ozgecmis:update', function () {
            _this.ozgecmisSer.getOzgecmis(_this.authService.currentUser.ozgecmis)
                .then(function (ozgecmis) { return _this.ozgecmis = ozgecmis; });
        });
    };
    OzgecmisPage.prototype.itemTapped = function (ev, ozDetay, des, ozDetayList) {
        // console.log(des);
        // console.log(JSON.stringify(ozDetay)+'ozDetay');
        // console.log(JSON.stringify(ozDetayList)+'ozdetlist');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__ozgecmis_detay_ozgecmis_detay__["a" /* OzgecmisDetayPage */], {
            ozDetay: ozDetay,
            basvurulist: this.ozgecmis,
            des: des,
            ozDetayList: ozDetayList
        });
    };
    OzgecmisPage.prototype.checkOzgecmis = function (ev) {
        if (this.ozgecmis.enabled && (Object.keys(this.ozgecmis.tecrube).length < 1 || this.ozgecmis.tecrube[0].firma == "" ||
            Object.keys(this.ozgecmis.egitim).length < 1 || this.ozgecmis.egitim[0].okul == "" ||
            this.ozgecmis.isim === undefined || this.ozgecmis.isim.trim() == '' ||
            this.ozgecmis.adres === undefined || this.ozgecmis.adres.trim() == '')) {
            console.log(JSON.stringify(this.ozgecmis.egitim) + 'egitim');
            console.log(JSON.stringify(this.ozgecmis.tecrube) + 'tecrube');
            this.ozgecmis.enabled = false;
            ev.checked = false;
            this.presentAlert();
            console.log(this.ozgecmis.enabled + 'after');
            console.log(ev.checked + 'after');
        }
        else {
            this.ozgecmisSer.updateOzgecmisAll(this.ozgecmis);
            console.log(JSON.stringify(this.ozgecmis));
        }
    };
    OzgecmisPage.prototype.shareFace = function () {
        //     let options = 	{
        //   method: "share",
        // 	href: window.location.origin+'/#/detay/'+this.ozgecmis._id,
        // 	caption: "Such caption, very feed.",
        // 	description: "Much description"
        // 	// picture: this.ilan.resim
        // }
        console.log("share face");
        FB.ui({
            method: 'share',
            href: 'https://isgucvarisveren.herokuapp.com' + '/#/ilandetay/' + this.ozgecmis._id,
        }, function (response) { });
    };
    //   shareLinked(){
    // var payload = {
    //   "comment": "Yeni bir İşgüçvar ilanı!" + window.location.origin+'/#/detay/'+this.ozgecmis._id,
    //   "visibility": {
    //     "code": "anyone"
    //   }
    // };
    //
    // IN.API.Raw("/people/~/shares?format=json")
    //   .method("POST")
    //   .body(JSON.stringify(payload))
    //   .result((onSuccess) =>{})
    //   .error((onError) =>{});
    //   }
    OzgecmisPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Özgeçmişiniz Eksik!',
            subTitle: 'Aktiflemek için Kişisel Bilgileriniz ve İletişim Bilgileriniz tam olmalı. Ayrıca Tecrübe ve Eğitim için en az 1 giriş olmalı.',
            buttons: ['Kapat']
        });
        alert.present();
    };
    OzgecmisPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'İlan Paylaş',
            buttons: [
                {
                    text: 'Facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                        _this.shareFace();
                    }
                },
                // {
                // text: 'LinkedIn',
                // icon: 'logo-linkedin',
                // handler: () => {
                //   console.log('Archive clicked');
                //   this.shareLinked();
                // }},
                {
                    text: 'İptal',
                    role: 'cancel',
                    icon: 'close',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    OzgecmisPage.prototype.share = function () {
        if (this.plt.is('ios') || this.plt.is('android')) {
            var options = {
                message: "share this\n",
                // subject: 'the subject', // fi. for email
                // files: [this.ilan.resim], // an array of filenames either locally or remotely
                url: 'https://isgucvarisveren.herokuapp.com' + '/#/ilandetay/' + this.ozgecmis._id,
                chooserTitle: 'Uygulama seçin:' // Android only, you can override the default share sheet title
            };
            // this.socialSharing.shareViaFacebookWithPasteMessageHint('Message via Facebook', null, "https://isgucvar.herokuapp.com/", "paste it")
            // this.socialSharing.share('message', 'subject', this.ilan.resim, 'https://www.website.com/foo/#bar?a=b')
            this.socialSharing.shareWithOptions(options)
                .then(function (result) {
                console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            }).catch(function (msg) {
                console.log("Sharing failed with message: " + msg);
            });
        }
        else
            this.presentActionSheet();
    };
    OzgecmisPage.prototype.getAge = function () {
        return ~~(((new Date()).getTime() - (new Date(this.ozgecmis.dogumTarihi)).getTime()) / (31557600000));
    };
    OzgecmisPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
            selector: 'page-ozgecmis',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\ozgecmis\ozgecmis.html"*/'<!--\n\n  Generated template for the Ozgecmis page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n  <button ion-button icon-only (click)="share()">\n\n    <ion-icon name="share"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n    <ion-title>Özgeçmişim</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="ozgecmis">\n\n\n\n  <ion-card class="item">\n\n    <ion-item text-wrap class="item">\n\n    <ion-thumbnail item-left>\n\n      <img class="profile-image1" [src]="ozgecmis.resim">\n\n    </ion-thumbnail>\n\n\n\n    <h1>{{ozgecmis.isim}}</h1>\n\n    <p>{{ozgecmis.unvan}}</p>\n\n    <p>{{getAge()}} yaşında, {{ozgecmis.yilTecrube}} yıl tecrübe</p>\n\n    <!-- <ion-label *ngIf="ozgecmis.enabled" color="primary" >Aktif</ion-label>\n\n    <ion-label *ngIf="!ozgecmis.enabled" color="primary" >Pasif</ion-label> -->\n\n    <!-- <ion-toggle [(ngModel)]="ozgecmis.enabled"></ion-toggle> -->\n\n  </ion-item>\n\n    <ion-item no-margin no-padding>\n\n    <ion-label class="alignme" *ngIf="ozgecmis.enabled" color="primary" >Aktif</ion-label>\n\n    <ion-label class="alignme" *ngIf="!ozgecmis.enabled" color="primary" >Pasif</ion-label>\n\n    <ion-toggle [(ngModel)]="ozgecmis.enabled" checked="ozgecmis.enabled" (ionChange)="checkOzgecmis($event)"></ion-toggle>\n\n  </ion-item>\n\n</ion-card>\n\n\n\n<div [class.ozgecmis]="!ozgecmis.enabled">\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    <ion-row>\n\n      <ion-col>\n\n  <b>Kişisel Bilgiler</b>\n\n</ion-col>\n\n<ion-col>\n\n  <ion-buttons end>\n\n    <button ion-button small  icon-left clear (click)="itemTapped($event, ozgecmis, \'kisisel\', \'\')">\n\n    <ion-icon name="create"></ion-icon>\n\n    Düzenle\n\n  </button>\n\n</ion-buttons>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-card-header>\n\n\n\n  <ion-item text-wrap>\n\n  <ion-grid no-padding>\n\n  <ion-row><ion-col col-5><h4>Doğum Tarihi:</h4></ion-col> <ion-col><h4>{{ozgecmis.dogumTarihi | date:\'dd/MM/yyyy\'}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>TC Vatandaşı: </h4></ion-col> <ion-col><h4>{{ozgecmis.tc}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Askerlik: </h4></ion-col> <ion-col><h4> {{ozgecmis.askerlik}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Medeni Hal:</h4> </ion-col> <ion-col><h4> {{ozgecmis.medeni}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Ehliyet Cinsi: </h4></ion-col> <ion-col><h4> {{ozgecmis.ehliyet}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Eğitim: </h4></ion-col> <ion-col><h4> {{ozgecmis.egitimdurum | datePipe:\'egitimdurum\'}}</h4></ion-col> </ion-row>\n\n  <!-- <ion-row><ion-col col-5><h4>Tecrübe: </h4></ion-col> <ion-col><h4> {{ozgecmis.tecrubedurum}}</h4></ion-col> </ion-row> -->\n\n</ion-grid>\n\n</ion-item>\n\n\n\n  </ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    <ion-row>\n\n      <ion-col>\n\n  <b>İletişim Bilgileri</b>\n\n</ion-col>\n\n<ion-col>\n\n  <ion-buttons end>\n\n    <button ion-button small  icon-left clear (click)="itemTapped($event, ozgecmis, \'iletisim\', \'\')">\n\n    <ion-icon name="create"></ion-icon>\n\n    Düzenle\n\n  </button>\n\n</ion-buttons>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-card-header>\n\n  <ion-item text-wrap>\n\n    <ion-grid no-padding>\n\n  <ion-row><ion-col col-5><h4>Telefon:</h4></ion-col> <ion-col><h4>{{ozgecmis.telefon}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Email:</h4></ion-col> <ion-col><h4>{{ozgecmis.email}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Adres:</h4></ion-col> <ion-col><h4>{{ozgecmis.adres}}</h4></ion-col> </ion-row>\n\n</ion-grid>\n\n</ion-item>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    <ion-row>\n\n      <ion-col>\n\n  <b>Tecrübe</b>\n\n</ion-col>\n\n<ion-col>\n\n  <!-- <span ion-text style="float:right;" color="primary"> -->\n\n  <ion-buttons end>\n\n    <button ion-button small  icon-left clear (click)="itemTapped($event, {}, \'tecrubeEkle\', ozgecmis.tecrube)">\n\n    <ion-icon name="create"></ion-icon>\n\n    Ekle\n\n  </button>\n\n</ion-buttons>\n\n</ion-col>\n\n  </ion-row>\n\n  <!-- </span> -->\n\n</ion-card-header>\n\n<button ion-item *ngFor="let tecrube of (ozgecmis.tecrube | datePipe)" (click)="itemTapped($event, tecrube, \'tecrube\', ozgecmis.tecrube)">\n\n<h4><b>{{tecrube.firma}}</b> <span ion-text style="float:right;">{{tecrube.sehir}}</span></h4>\n\n<h4><b>{{tecrube.pozisyon}}</b></h4>\n\n<h4 style="white-space: pre-wrap;">{{tecrube.isTanimiKisa}}</h4>\n\n<h4><b>{{tecrube.giris | date:\'MM/yyyy\'}} - {{tecrube.cikis | date:\'MM/yyyy\'}}</b></h4>\n\n</button>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    <ion-row>\n\n      <ion-col>\n\n  <b>Eğitim</b>\n\n</ion-col>\n\n<ion-col>\n\n  <ion-buttons end>\n\n    <button ion-button small  icon-left clear (click)="itemTapped($event, {}, \'egitimEkle\', ozgecmis.egitim)">\n\n    <ion-icon name="create"></ion-icon>\n\n    Ekle\n\n  </button>\n\n</ion-buttons>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-card-header>\n\n<button ion-item *ngFor="let egitim of (ozgecmis.egitim | datePipe)" (click)="itemTapped($event, egitim, \'egitim\', ozgecmis.egitim)">\n\n<h4><b>{{egitim.okul}}</b> <span ion-text style="float:right;">{{egitim.sehir}}</span></h4>\n\n<h4>{{egitim.bolum}}</h4>\n\n<h4>{{egitim.cikis | date:\'MM/yyyy\'}} - {{egitim.derece | datePipe:\'egitimdurum\'}}</h4>\n\n</button>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header no-margin>\n\n    <ion-row>\n\n      <ion-col>\n\n  <b>Yabancı Dil</b>\n\n</ion-col>\n\n<ion-col>\n\n  <ion-buttons end>\n\n    <button ion-button small  icon-left clear (click)="itemTapped($event, {}, \'yabanciDilEkle\', ozgecmis.yabanciDil)">\n\n    <ion-icon name="create"></ion-icon>\n\n    Ekle\n\n  </button>\n\n</ion-buttons>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-card-header>\n\n<button no-margin ion-item *ngFor="let yabanciDil of ozgecmis.yabanciDil" (click)="itemTapped($event, yabanciDil, \'yabanciDil\', ozgecmis.yabanciDil)">\n\n  <h4><b>{{yabanciDil.dil}} : </b>{{yabanciDil.seviye | datePipe:\'seviye\'}}</h4>\n\n  <!-- <ion-row><ion-col col-5><h4>{{yabanciDil.dil}} : </h4></ion-col> <ion-col><h4>{{yabanciDil.seviye}}</h4></ion-col> </ion-row> -->\n\n\n\n</button>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header no-margin>\n\n    <ion-row>\n\n      <ion-col>\n\n  <b>Sertifikalar</b>\n\n</ion-col>\n\n<ion-col>\n\n  <ion-buttons end>\n\n    <button ion-button small  icon-left clear (click)="itemTapped($event, {}, \'sertifikaEkle\', ozgecmis.sertifika)">\n\n    <ion-icon name="create"></ion-icon>\n\n    Ekle\n\n  </button>\n\n</ion-buttons>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-card-header>\n\n<button ion-item *ngFor="let sertifika of (ozgecmis.sertifika | datePipe)" (click)="itemTapped($event, sertifika, \'sertifika\', ozgecmis.sertifika)">\n\n  <h4><b>{{sertifika.ad}}</b></h4>\n\n  <h4>{{sertifika.kurum}} - {{sertifika.cikis | date:\'MM/yyyy\'}}</h4>\n\n</button>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header no-margin>\n\n    <ion-row>\n\n      <ion-col>\n\n  <b>Bilgisayar Teknolojileri</b>\n\n</ion-col>\n\n<ion-col>\n\n  <ion-buttons end>\n\n    <button no-margin ion-button small  icon-left clear (click)="itemTapped($event, ozgecmis, \'bilgisayar\', \'\')">\n\n    <ion-icon name="create"></ion-icon>\n\n    Düzenle\n\n  </button>\n\n</ion-buttons>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-card-header>\n\n  <!-- <button ion-button small  icon-left clear (click)="itemTapped($event, ozgecmis, \'bilgisayar\')"> -->\n\n  <ion-item no-margin text-wrap>\n\n  <h4>{{ozgecmis.bilgisayar}}</h4>\n\n</ion-item>\n\n<!-- </button> -->\n\n</ion-card>\n\n\n\n</div>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\ozgecmis\ozgecmis.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSer */], __WEBPACK_IMPORTED_MODULE_3__providers_ozgecmis_ser__["a" /* OzgecmisSer */], __WEBPACK_IMPORTED_MODULE_4__providers_user_auth__["a" /* UserAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], OzgecmisPage);
    return OzgecmisPage;
}());

//# sourceMappingURL=ozgecmis.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_pipe__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { IonicModule } from 'ionic-angular';

var DatePipeModule = /** @class */ (function () {
    function DatePipeModule() {
    }
    DatePipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__date_pipe__["a" /* DatePipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__date_pipe__["a" /* DatePipe */]
            ]
        })
    ], DatePipeModule);
    return DatePipeModule;
}());

//# sourceMappingURL=date-pipe.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipe = /** @class */ (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (items, arg) {
        if (arg != undefined && arg == 'seviye') {
            switch (items) {
                case 1:
                    return 'Başlangıç';
                case 2:
                    return 'Orta';
                case 3:
                    return 'İyi';
                case 4:
                    return 'Çok İyi';
                case 5:
                    return 'Mükemmel';
            }
        }
        else if (arg != undefined && arg == 'egitimdurum') {
            // console.log(arg+"egitim"+items);
            switch (items) {
                case 1:
                    return 'İlköğretim';
                case 2:
                    return 'Lise';
                case 3:
                    return 'Lisans';
                case 4:
                    return 'Yüksek Lisans';
                case 5:
                    return 'Doktora';
            }
        }
        else {
            if (items == undefined)
                return;
            return items.sort(function (a, b) {
                var nameA = (new Date(a.cikis)).getTime();
                var nameB = (new Date(b.cikis)).getTime();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        }
    };
    DatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Pipe */])({ name: 'datePipe',
            pure: false })
    ], DatePipe);
    return DatePipe;
}());

//# sourceMappingURL=date-pipe.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map