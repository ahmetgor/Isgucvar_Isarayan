webpackJsonp([2],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetayPageModule", function() { return DetayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detay__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetayPageModule = /** @class */ (function () {
    function DetayPageModule() {
    }
    DetayPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detay__["a" /* DetayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detay__["a" /* DetayPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__detay__["a" /* DetayPage */]
            ]
        })
    ], DetayPageModule);
    return DetayPageModule;
}());

//# sourceMappingURL=detay.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_basvuru_ser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ilan_ser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { FacebookService, InitParams,  UIParams, UIResponse } from 'ngx-facebook';
// import { Facebook } from '@ionic-native/facebook';


var DetayPage = /** @class */ (function () {
    function DetayPage(navCtrl, navParams, ilanSer, basvuruSer, events, socialSharing, authService, 
        // private fb: FacebookService,private face: Facebook,
        plt, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ilanSer = ilanSer;
        this.basvuruSer = basvuruSer;
        this.events = events;
        this.socialSharing = socialSharing;
        this.authService = authService;
        this.plt = plt;
        this.actionSheetCtrl = actionSheetCtrl;
        //  this.ilan = this.navParams.get('ilan');
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            });
        }
        // this.basvuruList = this.navParams.get('basvurulist');
        // this.kaydedilenList = this.navParams.get('kaydedilenlist');
        this.basvuruList = this.basvuruSer.basvuruList;
        this.kaydedilenList = this.basvuruSer.kaydedilenList;
        this.ilanId = this.navParams.get('ilanId');
        // console.log(this.ilanId+"ilanId");
        //  this.basvuruList.push({id: 'hebe'});
        // console.log(JSON.stringify(this.kaydedilenList)+'detay basvuru');
        // if(this.ilanId) {
        ilanSer.getIlan(this.ilanId)
            .then(function (ilan) {
            _this.ilan = ilan;
            // console.log(JSON.stringify(this.ilan)+"link ilan");
        });
        // let initParams: InitParams = {
        //   appId: '112498582687614',
        //   xfbml: true,
        //   version: 'v2.9'
        // };
        //
        // fb.init(initParams);
        //  face.browserInit(112498582687614, 'v2.9');
    }
    DetayPage.prototype.shareFace = function () {
        var options = {
            method: "share",
            href: window.location.origin + '/#/detay/' + this.ilan._id,
            caption: "Such caption, very feed.",
            description: "Much description"
            // picture: this.ilan.resim
        };
        // let params: UIParams = {
        //   href: window.location.origin+'/#/detay/'+this.ilan._id,
        //   method: 'share'
        // };
        // console.log("share face");
        // this.face.showDialog( options)
        // .then((res) => // console.log(res)+"res")
        // .catch((e: any) => console.error(e)+"error");
        FB.ui({
            method: 'share',
            href: window.location.origin + '/#/detay/' + this.ilan._id,
        }, function (response) { });
        //     this.fb.ui(params)
        //     .then((res: UIResponse) => // console.log(res))
        //     .catch((e: any) => console.error(e));
    };
    DetayPage.prototype.shareLinked = function () {
        var payload = {
            "comment": "Yeni bir İşgüçvar ilanı!" + window.location.origin + '/#/detay/' + this.ilan._id,
            "visibility": {
                "code": "anyone"
            }
        };
        IN.API.Raw("/people/~/shares?format=json")
            .method("POST")
            .body(JSON.stringify(payload))
            .result(function (onSuccess) { })
            .error(function (onError) { });
    };
    DetayPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // console.log('ionViewDidLoad DetayPage');
        //Deeplink
        if (!this.ilan) {
            this.ilanSer.getIlan(this.ilanId)
                .then(function (ilan) { return _this.ilan = ilan; });
        }
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            });
        }
    };
    DetayPage.prototype.getDays = function (d1) {
        // // console.log(Date.parse(d1)+' date');
        var diff = Math.floor(((new Date()).getTime() - Date.parse(d1)) / 86400000);
        return diff;
    };
    DetayPage.prototype.basvur = function (ilan) {
        // console.log(ilan._id+'detay');
        this.basvuruSer.addBasvuru(ilan._id);
        // console.log(JSON.stringify(this.basvuruSer.basvuruList)+'create');
        this.events.publish('basvur:update');
        //   // console.log( JSON.stringify(this.basvuruList.find((item) => {
        //       return (item.basvuru == ilanId ); })) + 'console')
        //
        // let i = this.basvuruList.findIndex((item) => {
        //   return (item.basvuru == ilanId); })
        //
        //   if(i>-1)
        //   this.basvuruList[i].basvuruldu = this.basvuruList[i].basvuruldu == 'N' ? 'Y' : 'N';
        //   else this.basvuruList.push({basvuru: ilanId, basvuruldu: 'Y', kaydedildi: 'N'});
    };
    DetayPage.prototype.deleteBasvur = function (ilan) {
        // console.log(ilan._id+'detay');
        this.basvuruSer.deleteBasvuru(ilan._id);
        // console.log(JSON.stringify(this.basvuruSer.basvuruList)+'detay');
        this.events.publish('basvur:update');
    };
    DetayPage.prototype.kaydet = function (ilan) {
        this.basvuruSer.addKaydedilen(ilan._id);
        // console.log(JSON.stringify(this.basvuruSer.kaydedilenList)+'create');
        this.events.publish('kaydet:update');
    };
    DetayPage.prototype.deleteKaydet = function (ilan) {
        this.basvuruSer.deleteKaydedilen(ilan._id);
        // console.log(JSON.stringify(this.basvuruSer.kaydedilenList)+'detay');
        this.events.publish('kaydet:update');
    };
    DetayPage.prototype.checkBasvuru = function (ilanId) {
        // // console.log(JSON.stringify(this.basvuruList)+'detaylist');
        return this.basvuruSer.checkBasvuru(ilanId);
    };
    DetayPage.prototype.checkKaydedilen = function (ilanId) {
        return this.basvuruSer.checkKaydedilen(ilanId);
    };
    DetayPage.prototype.presentActionSheet = function () {
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
                //   // // console.log('Archive clicked');
                //   this.shareLinked();
                // }},
                {
                    text: 'İptal',
                    role: 'cancel',
                    icon: 'close',
                    handler: function () {
                        // // console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DetayPage.prototype.share = function () {
        if (this.plt.is('ios') || this.plt.is('android')) {
            var options = {
                message: "İşgüçvar ilanına bir göz atın:\n",
                // subject: 'the subject', // fi. for email
                // files: [this.ilan.resim], // an array of filenames either locally or remotely
                url: window.location.origin + "/#/ilan/" + this.ilan._id,
                chooserTitle: 'Uygulama seçin:' // Android only, you can override the default share sheet title
            };
            // this.socialSharing.shareViaFacebookWithPasteMessageHint('Message via Facebook', null, "https://isgucvar.herokuapp.com/", "paste it")
            // this.socialSharing.share('message', 'subject', this.ilan.resim, 'https://www.website.com/foo/#bar?a=b')
            this.socialSharing.shareWithOptions(options)
                .then(function (result) {
                // console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                // console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            }).catch(function (msg) {
                // console.log("Sharing failed with message: " + msg);
            });
        }
        else
            this.presentActionSheet();
    };
    DetayPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
            segment: 'detay/:ilanId'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
            selector: 'page-detay',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\detay\detay.html"*/'<meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />\n\n<meta property="og:type"               content="article" />\n\n<meta property="og:title"              content="When Great Minds Don’t Think Alike" />\n\n<meta property="og:description"        content="How much does culture influence creative thinking?" />\n\n<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />\n\n\n\n<ion-header>\n\n  <ion-navbar >\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n  <button ion-button icon-only (click)="share()">\n\n    <ion-icon name="share"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n    <ion-title>İlan Detayı</ion-title>\n\n  </ion-navbar>\n\n\n\n  <div *ngIf="ilan">\n\n\n\n\n\n\n\n<!-- <ion-toolbar> -->\n\n<!-- </ion-toolbar> -->\n\n</div>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <script type="in/Login"></script>\n\n\n\n  <div *ngIf="ilan">\n\n\n\n<div >\n\n  <ion-item text-wrap no-lines class="item">\n\n    <ion-thumbnail item-left>\n\n      <img class="img-circle" [src]="ilan.firma.resim">\n\n    </ion-thumbnail>\n\n\n\n    <ion-row>\n\n    <ion-col>\n\n    <h2>{{ilan.baslik}}</h2>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n    <div class="firma"><h4>{{ilan.firma.firma}}</h4></div>\n\n    </ion-col>\n\n    <ion-col>\n\n      <h4 align="right" [class.my-class]="getDays(ilan.olusurmaTarih) < 10">\n\n        <ion-icon name="calendar"></ion-icon>\n\n        {{getDays(ilan.olusurmaTarih)}} gün\n\n      </h4>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-auto>\n\n        <p><ion-icon name="pin"></ion-icon>\n\n          {{ilan.il}}\n\n        </p>\n\n    </ion-col>\n\n    <ion-col>\n\n      <p align="right">\n\n        <span style="float:left;">\n\n        <i *ngIf="checkBasvuru(ilan)">\n\n          <ion-icon name="checkmark-circle"></ion-icon>\n\n        </i>\n\n        <i *ngIf="checkKaydedilen(ilan)">\n\n          <ion-icon name="bookmark"></ion-icon>\n\n        </i>\n\n      </span>\n\n        <ion-icon name="briefcase"></ion-icon>\n\n        {{ilan.tip}}\n\n      </p>\n\n    </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n</div>\n\n    <ion-row>\n\n      <ion-col>\n\n    <div *ngIf="!checkBasvuru(ilan)">\n\n    <button ion-button block icon-left color="secondary" (click)="basvur(ilan)">\n\n      <ion-icon name="checkmark-circle"></ion-icon>\n\n      Başvur</button>\n\n    </div>\n\n    <div *ngIf="checkBasvuru(ilan)">\n\n    <button ion-button block icon-left color="secondary" (click)="deleteBasvur(ilan)">\n\n      <ion-icon name="ios-arrow-dropleft"></ion-icon>\n\n      Başvuru İptal</button>\n\n    </div>\n\n    </ion-col>\n\n    <ion-col>\n\n    <div *ngIf="!checkKaydedilen(ilan)">\n\n    <button ion-button block icon-left color="primary" (click)="kaydet(ilan)">\n\n      <ion-icon name="bookmark"></ion-icon>\n\n      Kaydet</button>\n\n    </div>\n\n    <div *ngIf="checkKaydedilen(ilan)">\n\n    <button ion-button block icon-left color="primary" (click)="deleteKaydet(ilan)">\n\n      <ion-icon name="ios-arrow-dropleft"></ion-icon>\n\n      Kayıt İptal</button>\n\n    </div>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n  <ion-card>\n\n  <ion-card-header>\n\n    <b>Açıklama</b>\n\n  </ion-card-header>\n\n  <ion-card-content style="white-space: pre-wrap;">{{ilan.aciklama}}\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-card-header>\n\n  <b>Detaylar</b>\n\n</ion-card-header>\n\n<ion-card-content>\n\n  <!-- <ion-list>\n\n    <ion-item> -->\n\n  <p><b>Tecrübe: </b> {{ilan.tecrube}}</p>\n\n    <!-- </ion-item>\n\n    <ion-item> -->\n\n      <p><b>Eğitim: </b> {{ilan.egitim}}</p>\n\n    <!-- </ion-item>\n\n  </ion-list> -->\n\n  <p><b>Askerlik: </b> {{ilan.askerlik}}</p>\n\n  <p><b>Ehliyet: </b> {{ilan.ehliyet}}</p>\n\n  <p><b>İlan Tarihi: </b> {{ilan.olusurmaTarih}}</p>\n\n  <p><b>İlan No: </b> {{ilan.id}}</p>\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\detay\detay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ilan_ser__["a" /* IlanSer */], __WEBPACK_IMPORTED_MODULE_2__providers_basvuru_ser__["a" /* BasvuruSer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_user_auth__["a" /* UserAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */]])
    ], DetayPage);
    return DetayPage;
}());

//# sourceMappingURL=detay.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map