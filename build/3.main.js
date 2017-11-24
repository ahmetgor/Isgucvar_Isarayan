webpackJsonp([3],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyarlarPageModule", function() { return AyarlarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ayarlar__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AyarlarPageModule = /** @class */ (function () {
    function AyarlarPageModule() {
    }
    AyarlarPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ayarlar__["a" /* AyarlarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ayarlar__["a" /* AyarlarPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ayarlar__["a" /* AyarlarPage */]
            ]
        })
    ], AyarlarPageModule);
    return AyarlarPageModule;
}());

//# sourceMappingURL=ayarlar.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyarlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(34);
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
  Generated class for the Ayarlar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AyarlarPage = /** @class */ (function () {
    function AyarlarPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
    }
    AyarlarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad AyarlarPage');
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            });
        }
    };
    AyarlarPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
            selector: 'page-ayarlar',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\ayarlar\ayarlar.html"*/'<!--\n\n  Generated template for the Ayarlar page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Ayarlar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">Bildirimler</ion-item-divider>\n\n<ion-item>\n\n  <ion-label>Uygulama Bildirimleri</ion-label>\n\n  <ion-toggle item-end checked="true"></ion-toggle>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Email Bildirimleri</ion-label>\n\n  <ion-toggle item-end checked="false"></ion-toggle>\n\n</ion-item>\n\n</ion-item-group>\n\n\n\n<ion-item-group>\n\n  <ion-item-divider color="light">Destek</ion-item-divider>\n\n<button ion-item>\n\nGizlilik\n\n</button>\n\n<button ion-item>\n\nGeri Bildirim & Öneri\n\n</button>\n\n<button ion-item>\n\nHükümler & Şartlar\n\n</button>\n\n</ion-item-group>\n\n\n\n<ion-item-group>\n\n  <ion-item-divider color="light">Hakkında</ion-item-divider>\n\n  <button ion-item>\n\nSürüm Bilgisi\n\n</button>\n\n<button ion-item>\n\nUygulamayı Oyla\n\n</button>\n\n</ion-item-group>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\ayarlar\ayarlar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_auth__["a" /* UserAuth */]])
    ], AyarlarPage);
    return AyarlarPage;
}());

//# sourceMappingURL=ayarlar.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map