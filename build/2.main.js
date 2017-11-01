webpackJsonp([2],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AktivitePageModule", function() { return AktivitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aktivite__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AktivitePageModule = /** @class */ (function () {
    function AktivitePageModule() {
    }
    AktivitePageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aktivite__["a" /* AktivitePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aktivite__["a" /* AktivitePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__aktivite__["a" /* AktivitePage */]
            ]
        })
    ], AktivitePageModule);
    return AktivitePageModule;
}());

//# sourceMappingURL=aktivite.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_basvuru_ser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ilan_ser__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_linkedin__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DetayPage = /** @class */ (function () {
    function DetayPage(navCtrl, navParams, ilanSer, basvuruSer, socialSharing, authService, fb, face, plt, actionSheetCtrl, linkedin) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ilanSer = ilanSer;
        this.basvuruSer = basvuruSer;
        this.socialSharing = socialSharing;
        this.authService = authService;
        this.fb = fb;
        this.face = face;
        this.plt = plt;
        this.actionSheetCtrl = actionSheetCtrl;
        this.linkedin = linkedin;
        //  this.ilan = this.navParams.get('ilan');
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            });
        }
        this.basvuruList = this.navParams.get('basvurulist');
        this.kaydedilenList = this.navParams.get('kaydedilenlist');
        this.ilanId = this.navParams.get('ilanId');
        console.log(this.ilanId + "ilanId");
        //  this.basvuruList.push({id: 'hebe'});
        console.log(JSON.stringify(this.kaydedilenList) + 'detay basvuru');
        // if(this.ilanId) {
        ilanSer.getIlan(this.ilanId)
            .then(function (ilan) {
            _this.ilan = ilan;
            console.log(JSON.stringify(_this.ilan) + "link ilan");
        });
        var initParams = {
            appId: '112498582687614',
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
        face.browserInit(112498582687614, 'v2.9');
    }
    DetayPage.prototype.shareFace = function () {
        var options = {
            method: "share",
            href: 'http://localhost:8100/#/detay/' + this.ilan._id,
            caption: "Such caption, very feed.",
            description: "Much description"
            // picture: this.ilan.resim
        };
        var params = {
            href: 'http://localhost:8100/#/detay/' + this.ilan._id,
            method: 'share'
        };
        console.log("share face");
        // this.face.showDialog( options)
        // .then((res) => console.log(res)+"res")
        // .catch((e: any) => console.error(e)+"error");
        FB.ui({
            method: 'share',
            href: 'http://localhost:8100/#/detay/' + this.ilan._id,
        }, function (response) { });
        //     this.fb.ui(params)
        //     .then((res: UIResponse) => console.log(res))
        //     .catch((e: any) => console.error(e));
    };
    DetayPage.prototype.shareLinked = function () {
        //     const body = {
        //   comment: 'Hello world!',
        //   visibility: {
        //     code: 'anyone'
        //   }
        // };
        //
        // this.linkedin.postRequest('~/shares', body)
        //   .then(res => console.log(res))
        //   .catch(e => console.log(e));
        var payload = {
            "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG",
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
        console.log('ionViewDidLoad DetayPage');
        //Deeplink
        if (!this.ilan) {
            this.ilanSer.getIlan(this.ilanId)
                .then(function (ilan) { return _this.ilan = ilan; });
        }
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            });
        }
    };
    DetayPage.prototype.getDays = function (d1) {
        // console.log(Date.parse(d1)+' date');
        var diff = Math.floor(((new Date()).getTime() - Date.parse(d1)) / 86400000);
        return diff;
    };
    DetayPage.prototype.basvur = function (ilan) {
        console.log(ilan._id + 'detay');
        this.basvuruSer.addBasvuru(ilan._id);
        console.log(JSON.stringify(this.basvuruSer.basvuruList) + 'create');
        //   console.log( JSON.stringify(this.basvuruList.find((item) => {
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
        console.log(ilan._id + 'detay');
        this.basvuruSer.deleteBasvuru(ilan._id);
        console.log(JSON.stringify(this.basvuruSer.basvuruList) + 'detay');
    };
    DetayPage.prototype.kaydet = function (ilan) {
        this.basvuruSer.addKaydedilen(ilan._id);
        console.log(JSON.stringify(this.basvuruSer.kaydedilenList) + 'create');
    };
    DetayPage.prototype.deleteKaydet = function (ilan) {
        this.basvuruSer.deleteKaydedilen(ilan._id);
        console.log(JSON.stringify(this.basvuruSer.kaydedilenList) + 'detay');
    };
    DetayPage.prototype.checkBasvuru = function (ilanId) {
        // console.log(JSON.stringify(this.basvuruList)+'detaylist');
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
                }, {
                    text: 'LinkedIn',
                    icon: 'logo-linkedin',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.shareLinked();
                    }
                }, {
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
    DetayPage.prototype.share = function () {
        if (this.plt.is('ios') || this.plt.is('android')) {
            var options = {
                message: "share this\n",
                // subject: 'the subject', // fi. for email
                // files: [this.ilan.resim], // an array of filenames either locally or remotely
                url: "https://isgucvar.herokuapp.com/#/ilan/" + this.ilan._id,
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
    DetayPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
            segment: 'detay/:ilanId'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
            selector: 'page-detay',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\detay\detay.html"*/'<meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />\n\n<meta property="og:type"               content="article" />\n\n<meta property="og:title"              content="When Great Minds Don’t Think Alike" />\n\n<meta property="og:description"        content="How much does culture influence creative thinking?" />\n\n<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />\n\n\n\n<ion-header>\n\n  <ion-navbar >\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n  <button ion-button icon-only (click)="share()">\n\n    <ion-icon name="share"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n    <ion-title>İlan Detayı</ion-title>\n\n  </ion-navbar>\n\n\n\n  <div *ngIf="ilan">\n\n\n\n\n\n\n\n<!-- <ion-toolbar> -->\n\n<!-- </ion-toolbar> -->\n\n</div>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <script type="in/Login"></script>\n\n\n\n  <div *ngIf="ilan">\n\n\n\n<div >\n\n  <ion-item text-wrap no-lines class="item">\n\n    <ion-thumbnail item-left>\n\n      <img class="img-circle" [src]="ilan.firma.resim">\n\n    </ion-thumbnail>\n\n\n\n    <ion-row>\n\n    <ion-col>\n\n    <h2>{{ilan.baslik}}</h2>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n    <div class="firma"><h4>{{ilan.firma.firma}}</h4></div>\n\n    </ion-col>\n\n    <ion-col>\n\n      <h4 align="right" [class.my-class]="getDays(ilan.olusurmaTarih) < 10">\n\n        <ion-icon name="calendar"></ion-icon>\n\n        {{getDays(ilan.olusurmaTarih)}} gün\n\n      </h4>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-auto>\n\n        <p><ion-icon name="pin"></ion-icon>\n\n          {{ilan.il}}\n\n        </p>\n\n    </ion-col>\n\n    <ion-col>\n\n      <p align="right">\n\n        <span style="float:left;">\n\n        <i *ngIf="checkBasvuru(ilan)">\n\n          <ion-icon name="checkmark-circle"></ion-icon>\n\n        </i>\n\n        <i *ngIf="checkKaydedilen(ilan)">\n\n          <ion-icon name="bookmark"></ion-icon>\n\n        </i>\n\n      </span>\n\n        <ion-icon name="briefcase"></ion-icon>\n\n        {{ilan.tip}}\n\n      </p>\n\n    </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n</div>\n\n    <ion-row>\n\n      <ion-col>\n\n    <div *ngIf="!checkBasvuru(ilan)">\n\n    <button ion-button block icon-left color="secondary" (click)="basvur(ilan)">\n\n      <ion-icon name="checkmark-circle"></ion-icon>\n\n      Başvur</button>\n\n    </div>\n\n    <div *ngIf="checkBasvuru(ilan)">\n\n    <button ion-button block icon-left color="secondary" (click)="deleteBasvur(ilan)">\n\n      <ion-icon name="ios-arrow-dropleft"></ion-icon>\n\n      Başvuru İptal</button>\n\n    </div>\n\n    </ion-col>\n\n    <ion-col>\n\n    <div *ngIf="!checkKaydedilen(ilan)">\n\n    <button ion-button block icon-left color="primary" (click)="kaydet(ilan)">\n\n      <ion-icon name="bookmark"></ion-icon>\n\n      Kaydet</button>\n\n    </div>\n\n    <div *ngIf="checkKaydedilen(ilan)">\n\n    <button ion-button block icon-left color="primary" (click)="deleteKaydet(ilan)">\n\n      <ion-icon name="ios-arrow-dropleft"></ion-icon>\n\n      Kayıt İptal</button>\n\n    </div>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n  <ion-card>\n\n  <ion-card-header>\n\n    <b>Açıklama</b>\n\n  </ion-card-header>\n\n  <ion-card-content style="white-space: pre-wrap;">{{ilan.aciklama}}\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-card-header>\n\n  <b>Detaylar</b>\n\n</ion-card-header>\n\n<ion-card-content>\n\n  <!-- <ion-list>\n\n    <ion-item> -->\n\n  <p><b>Tecrübe: </b> {{ilan.tecrube}}</p>\n\n    <!-- </ion-item>\n\n    <ion-item> -->\n\n      <p><b>Eğitim: </b> {{ilan.egitim}}</p>\n\n    <!-- </ion-item>\n\n  </ion-list> -->\n\n  <p><b>Askerlik: </b> {{ilan.askerlik}}</p>\n\n  <p><b>Ehliyet: </b> {{ilan.ehliyet}}</p>\n\n  <p><b>İlan Tarihi: </b> {{ilan.olusurmaTarih}}</p>\n\n  <p><b>İlan No: </b> {{ilan.id}}</p>\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\detay\detay.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_ilan_ser__["a" /* IlanSer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_ilan_ser__["a" /* IlanSer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_basvuru_ser__["a" /* BasvuruSer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_basvuru_ser__["a" /* BasvuruSer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_user_auth__["a" /* UserAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_user_auth__["a" /* UserAuth */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_linkedin__["a" /* LinkedIn */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_linkedin__["a" /* LinkedIn */]) === "function" && _l || Object])
    ], DetayPage);
    return DetayPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=detay.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AktivitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_basvuru_ser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detay_detay__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the Aktivite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AktivitePage = /** @class */ (function () {
    function AktivitePage(navCtrl, navParams, basvuruSer, ilanSer, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.basvuruSer = basvuruSer;
        this.ilanSer = ilanSer;
        this.authService = authService;
        this.aktivite = 'basvurulan';
        this.skip = 0;
        this.limit = 10;
        this.scrollEnable = true;
        this.scrollEnabl = true;
        this.ski = 0;
        this.limi = 10;
    }
    AktivitePage.prototype.ionViewDidLoad = function () {
    };
    AktivitePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
                _this.getBasvuruList();
                _this.getKaydedilenList();
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            console.log('ionViewWillEnter AktivitePage');
            this.getBasvuruList();
            this.getKaydedilenList();
        }
        this.basvuruList = this.basvuruSer.basvuruList;
        this.kaydedilenList = this.basvuruSer.kaydedilenList;
    };
    AktivitePage.prototype.getBasvuruList = function () {
        var _this = this;
        this.scrollEnable = true;
        this.skip = 0;
        this.basvuruSer.getBasvurular(this.skip, this.limit)
            .then(function (basvurular) {
            _this.basvurular = basvurular;
            // console.log(JSON.stringify(basvurular));
        })
            .catch(function (err) { });
    };
    AktivitePage.prototype.getKaydedilenList = function () {
        var _this = this;
        this.scrollEnabl = true;
        this.ski = 0;
        this.basvuruSer.getKaydedilenler(this.ski, this.limi)
            .then(function (kaydedilenler) {
            _this.kaydedilenler = kaydedilenler;
        })
            .catch(function (err) { });
    };
    AktivitePage.prototype.itemTapped = function (ev, ilan) {
        // console.log(JSON.stringify(this.basvuruList)+'sonuc basvuru');
        console.log(JSON.stringify(ilan) + 'ilan');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detay_detay__["a" /* DetayPage */], {
            ilanId: ilan._id,
            basvurulist: this.basvuruSer.basvuruList,
            kaydedilenlist: this.basvuruSer.kaydedilenList
        });
    };
    AktivitePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.skip = _this.skip + 1;
            _this.basvuruSer.getBasvurular(_this.skip, _this.limit)
                .then(function (basvurular) {
                console.log(JSON.stringify(basvurular) + "basvuruList");
                if (Object.keys(basvurular).length < _this.limit) {
                    console.log('true');
                    // infiniteScroll.enable(false);
                    _this.scrollEnable = false;
                }
                for (var key in basvurular) {
                    _this.basvurular.push(basvurular[key]);
                }
            })
                .catch(function (err) { });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    AktivitePage.prototype.doInfinit = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.ski = _this.ski + 1;
            _this.basvuruSer.getKaydedilenler(_this.ski, _this.limi)
                .then(function (kaydedilenler) {
                console.log(JSON.stringify(kaydedilenler) + "basvuruList");
                if (Object.keys(kaydedilenler).length < _this.limi) {
                    console.log('true');
                    // infiniteScroll.enable(false);
                    _this.scrollEnabl = false;
                }
                for (var key in kaydedilenler) {
                    _this.kaydedilenler.push(kaydedilenler[key]);
                }
            })
                .catch(function (err) { });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    AktivitePage.prototype.checkBasvuru = function (ilanId) {
        return this.basvuruSer.checkBasvuru(ilanId);
    };
    AktivitePage.prototype.checkKaydet = function (ilanId) {
        return this.basvuruSer.checkKaydedilen(ilanId);
    };
    AktivitePage.prototype.getDays = function (d1) {
        var diff = Math.floor(((new Date()).getTime() - (new Date(d1)).getTime()) / 86400000);
        return diff;
    };
    AktivitePage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
            selector: 'page-aktivite',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\aktivite\aktivite.html"*/'<!--\n\n  Generated template for the Aktivite page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Aktivitelerim</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n  <ion-segment [(ngModel)]="aktivite" color="dark">\n\n    <ion-segment-button value="basvurulan">\n\n      <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n      Başvurulan\n\n    </ion-segment-button>\n\n    <!-- <ion-segment-button value="goruntulenen">\n\n      <ion-icon name="eye"></ion-icon>\n\n      Görüntülenen\n\n    </ion-segment-button> -->\n\n    <ion-segment-button value="kaydedilen">\n\n      <ion-icon name="bookmark" item-left></ion-icon>\n\n      Kaydedilen\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="aktivite">\n\n    <div  *ngSwitchCase="\'basvurulan\'">\n\n\n\n  <ion-list text-wrap>\n\n    <button ion-item *ngFor="let basvuru of basvurular" (click)="itemTapped($event, basvuru)">\n\n      <!-- <ion-icon [name]="item.icon" item-left></ion-icon> -->\n\n      <ion-thumbnail item-left>\n\n        <img class="img-circle" [src]="basvuru.firma.resim">\n\n      </ion-thumbnail>\n\n\n\n      <ion-row>\n\n      <ion-col>\n\n      <h2>{{basvuru.baslik}}</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n      <div class="firma"><h4>{{basvuru.firmaAdi}}</h4></div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h4 align="right" [class.my-class]="getDays(basvuru.olusurmaTarih) < 10">\n\n          <ion-icon name="calendar"></ion-icon>\n\n          {{getDays(basvuru.olusturmaTarih)}} gün\n\n        </h4>\n\n      </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n      <ion-col col-auto>\n\n          <p><ion-icon name="pin"></ion-icon>\n\n            {{basvuru.il}}\n\n\n\n          </p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p align="right">\n\n          <span style="float:left;">\n\n          <i *ngIf="checkBasvuru(basvuru)">\n\n            <ion-icon name="checkmark-circle"></ion-icon>\n\n          </i>\n\n          <i *ngIf="checkKaydet(basvuru)">\n\n            <ion-icon name="bookmark"></ion-icon>\n\n          </i>\n\n        </span>\n\n          <ion-icon name="briefcase"></ion-icon>\n\n          {{basvuru.tip}}\n\n        </p>\n\n      </ion-col>\n\n      </ion-row>\n\n\n\n    </button>\n\n  </ion-list>\n\n\n\n    <ion-infinite-scroll *ngIf="scrollEnable" (ionInfinite)="doInfinite($event)">\n\n\n\n    <ion-infinite-scroll-content\n\n    loadingText="Başvurular yükleniyor...">\n\n  </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</div>\n\n\n\n<div *ngSwitchCase="\'kaydedilen\'">\n\n\n\n  <ion-list text-wrap>\n\n    <button ion-item *ngFor="let kaydedilen of kaydedilenler" (click)="itemTapped($event, kaydedilen)">\n\n      <!-- <ion-icon [name]="item.icon" item-left></ion-icon> -->\n\n      <ion-thumbnail item-left>\n\n        <img class="img-circle" [src]="kaydedilen.firma.resim">\n\n      </ion-thumbnail>\n\n\n\n      <ion-row>\n\n      <ion-col>\n\n      <h2>{{kaydedilen.baslik}}</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n      <div class="firma"><h4>{{kaydedilen.firmaAdi}}</h4></div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h4 align="right" [class.my-class]="getDays(kaydedilen.olusurmaTarih) < 10">\n\n          <ion-icon name="calendar"></ion-icon>\n\n          {{getDays(kaydedilen.olusturmaTarih)}} gün\n\n        </h4>\n\n      </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n      <ion-col col-auto>\n\n          <p><ion-icon name="pin"></ion-icon>\n\n            {{kaydedilen.il}}\n\n\n\n          </p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p align="right">\n\n          <span style="float:left;">\n\n          <i *ngIf="checkBasvuru(kaydedilen)">\n\n            <ion-icon name="checkmark-circle"></ion-icon>\n\n          </i>\n\n          <i *ngIf="checkKaydet(kaydedilen)">\n\n            <ion-icon name="bookmark"></ion-icon>\n\n          </i>\n\n        </span>\n\n          <ion-icon name="briefcase"></ion-icon>\n\n          {{kaydedilen.tip}}\n\n        </p>\n\n      </ion-col>\n\n      </ion-row>\n\n\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll *ngIf="scrollEnabl" (ionInfinite)="doInfinit($event)">\n\n\n\n  <ion-infinite-scroll-content\n\n  loadingText="Kaydedilenler yükleniyor...">\n\n</ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n\n\n</div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\aktivite\aktivite.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_basvuru_ser__["a" /* BasvuruSer */], __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSer */], __WEBPACK_IMPORTED_MODULE_5__providers_user_auth__["a" /* UserAuth */]])
    ], AktivitePage);
    return AktivitePage;
}());

//# sourceMappingURL=aktivite.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map