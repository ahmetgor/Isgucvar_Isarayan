webpackJsonp([4],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AktivitePageModule", function() { return AktivitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aktivite__ = __webpack_require__(304);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AktivitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_basvuru_ser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_auth__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(36);
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
    function AktivitePage(navCtrl, navParams, basvuruSer, ilanSer, authService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.basvuruSer = basvuruSer;
        this.ilanSer = ilanSer;
        this.authService = authService;
        this.events = events;
        this.aktivite = 'basvurulan';
        this.skip = 0;
        this.limit = 10;
        this.scrollEnable = true;
        this.scrollEnabl = true;
        this.ski = 0;
        this.limi = 10;
    }
    // ionViewDidLoad() {
    // }
    AktivitePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
                console.log('aktivite checkauth');
                _this.getBasvuruList();
                _this.getKaydedilenList();
                _this.basvuruList = _this.basvuruSer.basvuruList;
                _this.kaydedilenList = _this.basvuruSer.kaydedilenList;
            }, function (err) {
                console.log('aktivite checkauth error');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            console.log('ionViewWillEnter AktivitePage');
            this.getBasvuruList();
            this.getKaydedilenList();
            this.basvuruList = this.basvuruSer.basvuruList;
            this.kaydedilenList = this.basvuruSer.kaydedilenList;
        }
        this.events.subscribe('kaydet:update', function () {
            _this.getKaydedilenList();
        });
        this.events.subscribe('basvur:update', function () {
            _this.getBasvuruList();
        });
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
        this.navCtrl.push('DetayPage', {
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
            __WEBPACK_IMPORTED_MODULE_3__providers_basvuru_ser__["a" /* BasvuruSer */], __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSer */], __WEBPACK_IMPORTED_MODULE_4__providers_user_auth__["a" /* UserAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AktivitePage);
    return AktivitePage;
}());

//# sourceMappingURL=aktivite.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map