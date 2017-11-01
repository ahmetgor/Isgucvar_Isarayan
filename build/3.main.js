webpackJsonp([3],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HesapPageModule", function() { return HesapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hesap__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HesapPageModule = /** @class */ (function () {
    function HesapPageModule() {
    }
    HesapPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hesap__["a" /* HesapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hesap__["a" /* HesapPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__hesap__["a" /* HesapPage */]
            ]
        })
    ], HesapPageModule);
    return HesapPageModule;
}());

//# sourceMappingURL=hesap.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HesapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HesapPage = /** @class */ (function () {
    function HesapPage(navCtrl, navParams, storage, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.authService = authService;
        this.newpassword = "";
        this.newpassword1 = "";
        this.storage.get('user')
            .then(function (user) {
            _this.user = user;
            console.log(JSON.stringify(user));
        });
    }
    HesapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            });
        }
        this.newpassword = "";
        this.newpassword1 = "";
        console.log('ionViewDidLoad HesapPagePage');
    };
    HesapPage.prototype.updateUser = function () {
        var _this = this;
        var details = {
            email: this.user.email,
            password: this.password
        };
        if (this.newpassword.trim() && this.newpassword.trim() != "") {
            details.newpassword = this.newpassword;
        }
        this.authService.updateUser(details).then(function (result) {
            // this.presentToast('Kaydınız yapıldı, giriş yapabilirsiniz');
            _this.authService.logout();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function (err) {
            // let msg = JSON.parse(err._body);
            // console.log(msg.error+'asdasd');
        });
        // });
    };
    HesapPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
            selector: 'page-hesap',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\hesap\hesap.html"*/'<!--\n  Generated template for the HesapPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Hesap</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #heroForm="ngForm">\n    <div *ngIf="user">\n    <ion-list>\n\n        <ion-item-divider no-lines color="light">Yeni şifre belirleyin:</ion-item-divider>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="newpassword" placeholder="Yeni Şifre" autocomplete="off" type="password" #pass="ngModel" name="pass" minlength="6">\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="pass.errors">\n            <p style="color:red;">Şifre minimum 6 karakter olmalı</p>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="newpassword1" placeholder="Yeni Şifre tekrar" autocomplete="off" type="password" #pass1="ngModel" name="pass1" minlength="6">\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="pass1.value != pass.value">\n            <p style="color:red;">Girilen şifreler aynı değil</p>\n        </ion-item>\n        <ion-item-divider no-lines color="light"></ion-item-divider>\n        <ion-item>\n            <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="user.email" placeholder="Email" type="email" #name="ngModel" name="name" disabled>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="password" placeholder="Mevcut Şifre" type="password" #oldpass="ngModel" name="passwrd" required>\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="oldpass.errors">\n            <p style="color:red;">Lütfen şifrenizi giriniz</p>\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block (click)="updateUser()"\n            [disabled]="!heroForm.form.valid||pass1.value != pass.value||heroForm.form.untouched">Güncelle</button>\n  </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\hesap\hesap.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_auth__["a" /* UserAuth */]])
    ], HesapPage);
    return HesapPage;
}());

//# sourceMappingURL=hesap.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map