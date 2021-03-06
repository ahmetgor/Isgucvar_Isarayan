webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasvuruSer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ozgecmis_ser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BasvuruSer = /** @class */ (function () {
    function BasvuruSer(http, authService, ozgecmisSer, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.ozgecmisSer = ozgecmisSer;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        // url : string = 'http://127.0.0.1:8080/api/aktiviteler/';
        this.url = 'https://isgucvarisarayan.herokuapp.com/api/aktiviteler/';
        // url : string = window.location.origin+'/api/aktiviteler/';
        this.kaydedilenList = {};
        this.basvuruList = {};
        //console.log('Hello BasvuruSer Provider');
        this.storage.get('ozgecmis').then(function (ozgecmis) {
            if (_this.authService.currentUser)
                _this.ozgecmis = _this.authService.currentUser.ozgecmis;
            else
                _this.ozgecmis = ozgecmis._id;
            _this.getBasvurularList()
                .then(function (ilanlist) {
                _this.basvuruList = ilanlist;
            })
                .catch(function (err) { });
            _this.getKaydedilenlerList()
                .then(function (ilanlist) {
                _this.kaydedilenList = ilanlist;
            })
                .catch(function (err) { });
        })
            .catch(function (err) { });
        // this.storage.get('ozgecmis').then((ozgecmis) => {
        // this.ozgecmis = authService.ozgecmis;
        // });
        // console.log(JSON.stringify(this.authService.currentUser.ozgecmis)+"datadata");
        // console.log(JSON.stringify(this.ozgecmisSer.ozgecmisId)+"idid");
    }
    BasvuruSer.prototype.getBasvurular = function (skip, limit) {
        var _this = this;
        this.ozgecmisId = this.ozgecmis;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + ("basvuru?ozgecmis=" + _this.ozgecmisId + "&skip=" + skip + "&limit=" + limit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                _this.presentToast('Başvuru listesi alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    BasvuruSer.prototype.getKaydedilenler = function (skip, limit) {
        var _this = this;
        this.ozgecmisId = this.ozgecmis;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + ("kaydedilen?ozgecmis=" + _this.ozgecmisId + "&skip=" + skip + "&limit=" + limit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                _this.presentToast('Kaydedilen listesi alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    BasvuruSer.prototype.getBasvurularList = function () {
        var _this = this;
        this.ozgecmisId = this.ozgecmis;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //console.log('servis basvurularlist oluştur');
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + ("basvurulist?ozgecmis=" + _this.ozgecmisId), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                // this.presentToast('Başvuru listesi alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    BasvuruSer.prototype.getKaydedilenlerList = function () {
        var _this = this;
        this.ozgecmisId = this.ozgecmis;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + ("kaydedilenlist?ozgecmis=" + _this.ozgecmisId), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
                // this.presentToast('Kaydedilen listesi alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    BasvuruSer.prototype.addBasvuru = function (basvuruId) {
        var _this = this;
        this.showLoader();
        // this.ozgecmis = this.ozgecmisSer.ozgecmis;
        var kayit = { ozgecmis: this.ozgecmisId, basvuru: basvuruId };
        //console.log(JSON.stringify(this.authService.ozgecmis)+'basvuruId');
        if (!this.authService.ozgecmis.enabled) {
            this.loading.dismiss();
            this.presentToast('Pasif özgeçmiş ile başvuru yapılamaz!');
            return new Promise(function (res, rej) { });
        }
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            //console.log(JSON.stringify(this.authService.ozgecmis)+"addbasvuru");
            _this.http.post(_this.url + 'basvuru/', JSON.stringify(kayit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.basvuruList.push(kayit);
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                reject(err);
                _this.loading.dismiss();
                _this.presentToast('Başvuru eklenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    BasvuruSer.prototype.deleteBasvuru = function (basvuruId) {
        var _this = this;
        this.ozgecmisId = this.ozgecmis;
        this.showLoader();
        var i = this.basvuruList.findIndex(function (item) {
            return (item.basvuru == basvuruId);
        });
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Authorization', _this.authService.token);
            _this.http.delete(_this.url + ("basvuru?ozgecmis=" + _this.ozgecmisId + "&basvuruid=" + basvuruId), { headers: headers })
                .subscribe(function (res) {
                _this.basvuruList.splice(i, 1);
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                reject(err);
                _this.presentToast('Başvuru silinemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
                _this.loading.dismiss();
            });
        });
    };
    BasvuruSer.prototype.addKaydedilen = function (kaydedilenId) {
        //console.log(JSON.stringify(kaydedilenId)+'kaydedilenId');
        var _this = this;
        this.showLoader();
        var kayit = { ozgecmis: this.ozgecmisId, kaydedilen: kaydedilenId };
        //console.log(JSON.stringify(kayit)+'kaydedilenId kayıt');
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.post(_this.url + 'kaydedilen/', JSON.stringify(kayit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.kaydedilenList.push(kayit);
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                reject(err);
                _this.presentToast('Kaydedilen eklenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
                _this.loading.dismiss();
            });
        });
    };
    BasvuruSer.prototype.deleteKaydedilen = function (kaydedilenId) {
        var _this = this;
        this.ozgecmisId = this.ozgecmis;
        //console.log(JSON.stringify(kaydedilenId)+'kaydedilenId delete');
        this.showLoader();
        var i = this.kaydedilenList.findIndex(function (item) {
            return (item.kaydedilen == kaydedilenId);
        });
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Authorization', _this.authService.token);
            _this.http.delete(_this.url + ("kaydedilen?ozgecmis=" + _this.ozgecmisId + "&kaydedilenid=" + kaydedilenId), { headers: headers })
                .subscribe(function (res) {
                _this.kaydedilenList.splice(i, 1);
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                reject(err);
                _this.loading.dismiss();
                _this.presentToast('Kaydedilen silinemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    BasvuruSer.prototype.checkBasvuru = function (ilanId) {
        // console.log(JSON.stringify(this.basvuruList)+'basvurulist');
        if (Object.keys(this.basvuruList).length == 0) {
            // console.log('check false');
            return false;
        }
        return this.basvuruList.findIndex(function (item) {
            return (item.basvuru == ilanId._id);
        }) > -1;
    };
    BasvuruSer.prototype.checkKaydedilen = function (ilanId) {
        // console.log('check'+ilanId._id);
        // for( const key of Object.keys(this.kaydedilenList)) {
        //   console.log(key +'   ' +JSON.stringify(this.kaydedilenList[key]));
        // }
        if (Object.keys(this.kaydedilenList).length == 0) {
            // console.log(JSON.stringify(Object.keys(this.kaydedilenList)));
            return false;
        }
        return this.kaydedilenList.findIndex(function (item) {
            return (item.kaydedilen == ilanId._id);
        }) > -1;
    };
    BasvuruSer.prototype.presentToast = function (mesaj) {
        var toast = this.toastCtrl.create({
            message: mesaj,
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    BasvuruSer.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'İşlem yapılıyor...'
        });
        this.loading.present();
    };
    BasvuruSer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__user_auth__["a" /* UserAuth */],
            __WEBPACK_IMPORTED_MODULE_4__ozgecmis_ser__["a" /* OzgecmisSer */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], BasvuruSer);
    return BasvuruSer;
}());

//# sourceMappingURL=basvuru-ser.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aktivite/aktivite.module": [
		280,
		4
	],
	"../pages/ayarlar/ayarlar.module": [
		281,
		3
	],
	"../pages/detay/detay.module": [
		282,
		2
	],
	"../pages/ozgecmis/ozgecmis.module": [
		283,
		1
	],
	"../pages/sonuc/sonuc.module": [
		284,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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




// import { Storage } from '@ionic/storage';
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        this.showLoader();
        var details = {
            email: this.email,
            password: this.password
        };
        this.authService.createAccount(details).then(function (result) {
            _this.loading.dismiss();
            // console.log(result);
            _this.presentToast('Kayıt yapıldı, hoşgeldin ' + _this.email.substring(0, _this.email.indexOf('@')));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (err) {
            var msg = JSON.parse(err._body);
            // console.log(msg.error+'asdasd');
            _this.presentToast(msg.error);
            _this.loading.dismiss();
        });
    };
    SignupPage.prototype.presentToast = function (errMsg) {
        var toast = this.toastCtrl.create({
            message: errMsg,
            duration: 6000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    SignupPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Kimlik Doğrulanıyor...'
        });
        this.loading.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the Signup page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Kayıt</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <form #heroForm="ngForm">\n\n            <ion-list>\n\n\n\n                <ion-item>\n\n                    <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n                    <ion-input [(ngModel)]="email" placeholder="Email" type="email" #name="ngModel" name="name" required\n\n                    pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})">\n\n                  </ion-input>\n\n                </ion-item>\n\n                <ion-item no-lines *ngIf="name.errors">\n\n                    <p style="color:red;">Lütfen geçerli email giriniz</p>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n                    <ion-input [(ngModel)]="password" placeholder="Şifre" type="password" #pass="ngModel" name="pass" minlength="6" required>\n\n                    </ion-input>\n\n                </ion-item>\n\n                <ion-item no-lines *ngIf="pass.errors">\n\n                    <p style="color:red;">Şİfre minimum 6 karakter olmalı</p>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n                    <ion-input [(ngModel)]="password1" placeholder="Tekrar Şifre" type="password" #pass1="ngModel" name="pass1" minlength="6" required>\n\n                    </ion-input>\n\n                </ion-item>\n\n                <ion-item no-lines *ngIf="pass1.value != pass.value">\n\n                    <p style="color:red;">Girilen şifreler aynı değil</p>\n\n                </ion-item>\n\n\n\n            </ion-list>\n\n\n\n            <button ion-button block (click)="register()" [disabled]="!heroForm.form.valid">Kaydol</button>\n\n          </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_auth__["a" /* UserAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassResetPage; });
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
  Generated class for the PassReset page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var PassResetPage = /** @class */ (function () {
    function PassResetPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.reset = true;
    }
    PassResetPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PassResetPage');
    };
    PassResetPage.prototype.resetle = function () {
        // this.showLoader();
        var user = {
            email: this.email
        };
        // console.log(JSON.stringify(credentials)+'credentials');
        this.authService.forgot(user).then(function (result) {
            // this.loading.dismiss();
            // this.navCtrl.setRoot(SonucPage);
        }, function (err) {
            // this.loading.dismiss();
            //console.log(JSON.stringify(err._body)+'asdasd');
            // this.presentToast('Girdiğiniz kullanıcı geçersiz veya bağ');
        });
    };
    PassResetPage.prototype.setPass = function () {
        var _this = this;
        // this.showLoader();
        var user = {
            email: this.email,
            password: this.password,
            resetPasswordToken: this.resetPasswordToken
        };
        // console.log(JSON.stringify(credentials)+'credentials');
        this.authService.reset(user).then(function (result) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            // this.loading.dismiss();
            // this.navCtrl.setRoot(SonucPage);
        }, function (err) {
            // this.loading.dismiss();
            //console.log(JSON.stringify(err._body)+'asdasd');
            // this.presentToast('Girdiğiniz kullanıcı geçersiz veya bağ');
        });
    };
    PassResetPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Giriş yapılıyor...'
        });
        this.loading.present();
    };
    PassResetPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    PassResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pass-reset',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\pass-reset\pass-reset.html"*/'<!--\n\n  Generated template for the PassReset page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="reset">Şifre Resetleme</ion-title>\n\n    <ion-title *ngIf="!reset">Yeni Şifre</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<div *ngIf="reset">\n\n<ion-list>\n\n    <ion-item>\n\n        <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n        <ion-input [(ngModel)]="email" placeholder="Email" type="email" required></ion-input>\n\n    </ion-item>\n\n</ion-list>\n\n<button ion-button block (click)="resetle()">Şİfre Gönder</button>\n\n<button ion-button clear small (click)="reset=false;">Geçİcİ şİfrem geldİ, yenİ şİfre belİrleyeceğİm </button>\n\n\n\n</div>\n\n\n\n<div *ngIf="!reset">\n\n<ion-list>\n\n    <ion-item>\n\n        <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n        <ion-input [(ngModel)]="email" placeholder="Email" type="email" required></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n        <ion-input [(ngModel)]="resetPasswordToken" placeholder="Geçici Şifre" type="text" required></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n        <ion-input [(ngModel)]="password" placeholder="Yeni Şifre" type="password" required></ion-input>\n\n    </ion-item>\n\n</ion-list>\n\n<button ion-button block (click)="setPass()">Yenİ Şİfre Belİrle</button>\n\n<button ion-button clear small (click)="reset=true;">Emaİlİme geçİcİ şİfre gönder</button>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\pass-reset\pass-reset.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_auth__["a" /* UserAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], PassResetPage);
    return PassResetPage;
}());

//# sourceMappingURL=pass-reset.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
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
  Generated class for the UserAuth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UserAuth = /** @class */ (function () {
    function UserAuth(http, storage, toastCtrl, loadingCtrl, events) {
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        // url : string = 'http://127.0.0.1:8080/api/auth/';
        // url1: string = 'http://127.0.0.1:8080/api/tools/';
        // url2: string = 'http://127.0.0.1:8080/api/ozgecmis/';
        this.url = 'https://isgucvarisarayan.herokuapp.com/api/auth/';
        this.url1 = 'https://isgucvarisarayan.herokuapp.com/api/tools/';
        this.url2 = 'https://isgucvarisarayan.herokuapp.com/api/ozgecmis/';
        //console.log('Hello UserAuth Provider');
        //console.log(window.location.origin+'host');
        // this.storage.get('token').then((value) => {
        //     console.log(value+' token');
        //     this.token = value;
        //
        // this.storage.get('user')
        //     .then((user) => {this.currentUser = user;
        //     console.log(JSON.stringify(user)+' user');
        //
        //     this.storage.get('ozgecmis')
        //         .then((ozgecmis) => {
        //           this.ozgecmis = ozgecmis;
        //           console.log(JSON.stringify(ozgecmis)+' ozgecmis');
        //         });
        //       });
        //       });
        // this.checkAuthentication();
    }
    UserAuth.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                // console.log(value+' token');
                _this.token = value;
                _this.storage.get('user')
                    .then(function (user) {
                    _this.currentUser = user;
                    //console.log(JSON.stringify(this.currentUser)+"  checkauth currentuser");
                });
                _this.storage.get('ozgecmis')
                    .then(function (ozgecmis) { return _this.ozgecmis = ozgecmis; })
                    .catch(function (err) {
                    //console.log("hata");
                });
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get(_this.url + 'protected', { headers: headers })
                    .subscribe(function (res) {
                    _this.events.publish('ozgecmis:update');
                    //console.log(JSON.stringify(res)+"success");
                    resolve(res);
                }, function (err) {
                    //console.log(JSON.stringify(err)+"err");
                    reject(err);
                });
            });
        });
    };
    UserAuth.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.showLoader();
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + 'register', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                //   this.currentUser = data.user;
                //   this.token = data.token;
                //   this.storage.set('token', data.token);
                //   this.storage.set('user', data.user);
                //
                //   this.getOzgecmis(data.user.ozgecmis)
                //   .then((ozgecmis) => {
                //     // this.ozgecmis = ozgecmis;
                //   // console.log(data+'data');
                // });
                _this.loading.dismiss();
                resolve(data);
            }, function (err) {
                _this.loading.dismiss();
                // console.log(JSON.stringify(err)+'registererr')
                reject(err);
            });
        });
    };
    UserAuth.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //console.log(JSON.stringify(credentials)+'credentials');
            _this.showLoader();
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + 'login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                //console.log(JSON.stringify(data)+'user');
                _this.currentUser = data.user;
                _this.storage.set('token', data.token);
                _this.storage.set('user', data.user);
                _this.loading.dismiss();
                _this.getOzgecmis(data.user.ozgecmis)
                    .then(function (ozgecmis) {
                    // this.ozgecmis = ozgecmis;
                    // console.log(data+'data');
                });
                resolve(data);
                // resolve(res.json());
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast("Girdiğiniz bilgiler yanlış veya hesabınız aktif değil!");
                //console.log(JSON.stringify(err)+'servis err');
                reject(err);
            });
        });
    };
    UserAuth.prototype.forgot = function (user) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url1 + 'forgot', JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
                // resolve(res.json());
                _this.loading.dismiss();
                _this.presentToast('Şifreniz resetlendi. Emailinize 1 saat geçerli geçici şifre gönderildi');
            }, function (err) {
                var erm = JSON.parse(err._body);
                //console.log(erm.error+'forgot err')
                _this.loading.dismiss();
                _this.presentToast("Geçici şifre gönderilemedi. " + erm.error);
            });
        });
    };
    UserAuth.prototype.reset = function (user) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url1 + 'reset', JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                _this.loading.dismiss();
                resolve(res);
                // resolve(res.json());
                _this.presentToast('Şifreniz değiştirildi.');
            }, function (err) {
                var erm = JSON.parse(err._body);
                //console.log(erm.error+'forgot err')
                _this.loading.dismiss();
                _this.presentToast("Yeni şifre kaydedilemedi. " + erm.error);
            });
        });
    };
    UserAuth.prototype.logout = function () {
        this.storage.remove('token');
        this.storage.remove('user');
        this.storage.remove('ozgecmis');
        this.currentUser = undefined;
        this.token = '';
        this.ozgecmis = undefined;
    };
    UserAuth.prototype.presentToast = function (mesaj) {
        var toast = this.toastCtrl.create({
            message: mesaj,
            duration: 5000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    UserAuth.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'İşlem yapılıyor...'
        });
        this.loading.present();
    };
    UserAuth.prototype.getOzgecmis = function (ozgecmisId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url2 + ozgecmisId, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.ozgecmis = data;
                _this.storage.set('ozgecmis', data);
                //console.log(JSON.stringify(data)+"data123");
                resolve(data);
            }, function (err) {
                //console.log(JSON.stringify(err));
                // reject(err);
                _this.presentToast('Özgeçmiş alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    UserAuth.prototype.updateUser = function (user) {
        var _this = this;
        this.showLoader();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        //console.log(JSON.stringify(user)+'updateuser');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'updatenormaluser', JSON.stringify(user), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.currentUser = data;
                _this.storage.set('user', data);
                //console.log(JSON.stringify(data)+"updateduser");
                _this.loading.dismiss();
                resolve(data);
            }, function (err) {
                _this.loading.dismiss();
                //console.log(JSON.stringify(err));
                // reject(err);
                _this.presentToast('Şifre değiştirilemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    UserAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */]])
    ], UserAuth);
    return UserAuth;
}());

//# sourceMappingURL=user-auth.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HesapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// @IonicPage()
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
            //console.log(JSON.stringify(user));
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
        //console.log('ionViewDidLoad HesapPagePage');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hesap',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\hesap\hesap.html"*/'<!--\n  Generated template for the HesapPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Hesap</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #heroForm="ngForm">\n    <div *ngIf="user">\n    <ion-list>\n\n        <ion-item-divider no-lines color="light">Yeni şifre belirleyin:</ion-item-divider>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="newpassword" placeholder="Yeni Şifre" autocomplete="off" type="password" #pass="ngModel" name="pass" minlength="6">\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="pass.errors">\n            <p style="color:red;">Şifre minimum 6 karakter olmalı</p>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="newpassword1" placeholder="Yeni Şifre tekrar" autocomplete="off" type="password" #pass1="ngModel" name="pass1" minlength="6">\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="pass1.value != pass.value">\n            <p style="color:red;">Girilen şifreler aynı değil</p>\n        </ion-item>\n        <ion-item-divider no-lines color="light"></ion-item-divider>\n        <ion-item>\n            <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="user.email" placeholder="Email" type="email" #name="ngModel" name="name" disabled>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="password" placeholder="Mevcut Şifre" type="password" #oldpass="ngModel" name="passwrd" required>\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="oldpass.errors">\n            <p style="color:red;">Lütfen şifrenizi giriniz</p>\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block (click)="updateUser()"\n            [disabled]="!heroForm.form.valid||pass1.value != pass.value||heroForm.form.untouched">Güncelle</button>\n  </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\hesap\hesap.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_auth__["a" /* UserAuth */]])
    ], HesapPage);
    return HesapPage;
}());

//# sourceMappingURL=hesap.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanSer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_auth__ = __webpack_require__(19);
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
  Generated class for the IlanSer provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var IlanSer = /** @class */ (function () {
    function IlanSer(http, authService, toastCtrl, loadingCtrl) {
        this.http = http;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        // url : string = 'http://127.0.0.1:8080/api/ilanlar/';
        this.url = 'https://isgucvarisarayan.herokuapp.com/api/ilanlar/';
        this.sehirler = [
            { "sehir": "İstanbul" }, { "sehir": "Ankara" }, { "sehir": "İzmir" }, { "sehir": "Adana" }, { "sehir": "Adıyaman" }, { "sehir": "Afyonkarahisar" },
            { "sehir": "Ağrı" }, { "sehir": "Aksaray" }, { "sehir": "Amasya" }, { "sehir": "Antalya" }, { "sehir": "Ardahan" }, { "sehir": "Artvin" },
            { "sehir": "Aydın" }, { "sehir": "Balıkesir" }, { "sehir": "Bartın" }, { "sehir": "Batman" }, { "sehir": "Bayburt" }, { "sehir": "Bilecik" },
            { "sehir": "Bingöl" }, { "sehir": "Bitlis" }, { "sehir": "Bolu" }, { "sehir": "Burdur" }, { "sehir": "Bursa" }, { "sehir": "Çanakkale" }, { "sehir": "Çankırı" },
            { "sehir": "Çorum" }, { "sehir": "Denizli" }, { "sehir": "Diyarbakır" }, { "sehir": "Düzce" }, { "sehir": "Edirne" }, { "sehir": "Elazığ" },
            { "sehir": "Erzincan" }, { "sehir": "Erzurum" }, { "sehir": "Eskişehir" }, { "sehir": "Gaziantep" }, { "sehir": "Giresun" }, { "sehir": "Gümüşhane" },
            { "sehir": "Hakkari" }, { "sehir": "Hatay" }, { "sehir": "Iğdır" }, { "sehir": "Isparta" }, { "sehir": "Kahramanmaraş" }, { "sehir": "Karabük" },
            { "sehir": "Karaman" }, { "sehir": "Kars" }, { "sehir": "Kastamonu" }, { "sehir": "Kayseri" }, { "sehir": "Kırıkkale" }, { "sehir": "Kırklareli" },
            { "sehir": "Kırşehir" }, { "sehir": "Kilis" }, { "sehir": "Kocaeli" }, { "sehir": "Konya" }, { "sehir": "Kütahya" }, { "sehir": "Malatya" },
            { "sehir": "Manisa" }, { "sehir": "Mardin" }, { "sehir": "Mersin" }, { "sehir": "Muğla" }, { "sehir": "Muş" }, { "sehir": "Nevşehir" },
            { "sehir": "Niğde" }, { "sehir": "Ordu" }, { "sehir": "Osmaniye" }, { "sehir": "Rize" }, { "sehir": "Sakarya" }, { "sehir": "Samsun" },
            { "sehir": "Siirt" }, { "sehir": "Sinop" }, { "sehir": "Sivas" }, { "sehir": "Şırnak" }, { "sehir": "Tekirdağ" }, { "sehir": "Tokat" },
            { "sehir": "Trabzon" }, { "sehir": "Tunceli" }, { "sehir": "Şanlıurfa" }, { "sehir": "Uşak" }, { "sehir": "Van" }, { "sehir": "Yalova" },
            { "sehir": "Yozgat" }, { "sehir": "Zonguldak" }
        ];
        //console.log('Hello IlanSer Provider');
        // this.basvurKaydetList = this.getBasvurKaydet();
    }
    IlanSer.prototype.getIlanlar = function (searchTerm, searchKayit, orderBy, skip, limit) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        var order = JSON.parse(orderBy);
        searchKayit.enabled = true;
        //console.log(JSON.stringify(order)+'order service');
        //console.log(order+'order service string');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + ("?term=" + searchTerm + "&kayit=" + JSON.stringify(searchKayit) + "&orderBy=" + JSON.stringify(order) + "&skip=" + skip + "&limit=" + limit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                // reject(err);
                _this.presentToast();
            });
        });
        // console.log(JSON.stringify(orderBy)+'kayıtlar');
        //   if (Object.keys(orderBy).length == 0 || orderBy == 'undefined') {
        //   orderBy = { "createdAt": -1 };
        // }
        // return  this.http.get(url, {headers: headers})
        //     .map((res: Response) => {console.log(JSON.stringify(res.json()));
        //       res.json().data as Hero[];})
        //     .catch(this.handleError);
    };
    IlanSer.prototype.getIlan = function (ilanId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + ilanId, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                // reject(err);
                _this.presentToast();
            });
        });
    };
    IlanSer.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'İlan listesi alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!',
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    IlanSer.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'İşlem yapılıyor...'
        });
        this.loading.present();
    };
    IlanSer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__user_auth__["a" /* UserAuth */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]])
    ], IlanSer);
    return IlanSer;
}());

//# sourceMappingURL=ilan-ser.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzgecmisDetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ozgecmis_ser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
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
  Generated class for the OzgecmisDetay page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var OzgecmisDetayPage = /** @class */ (function () {
    function OzgecmisDetayPage(navCtrl, navParams, formBuilder, ozgecmisSer, toastCtrl, camera, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.ozgecmisSer = ozgecmisSer;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.storage = storage;
        this.events = events;
        this.sehirler = [
            { "sehir": "İstanbul" }, { "sehir": "Ankara" }, { "sehir": "İzmir" }, { "sehir": "Adana" }, { "sehir": "Adıyaman" }, { "sehir": "Afyonkarahisar" },
            { "sehir": "Ağrı" }, { "sehir": "Aksaray" }, { "sehir": "Amasya" }, { "sehir": "Antalya" }, { "sehir": "Ardahan" }, { "sehir": "Artvin" },
            { "sehir": "Aydın" }, { "sehir": "Balıkesir" }, { "sehir": "Bartın" }, { "sehir": "Batman" }, { "sehir": "Bayburt" }, { "sehir": "Bilecik" },
            { "sehir": "Bingöl" }, { "sehir": "Bitlis" }, { "sehir": "Bolu" }, { "sehir": "Burdur" }, { "sehir": "Bursa" }, { "sehir": "Çanakkale" }, { "sehir": "Çankırı" },
            { "sehir": "Çorum" }, { "sehir": "Denizli" }, { "sehir": "Diyarbakır" }, { "sehir": "Düzce" }, { "sehir": "Edirne" }, { "sehir": "Elazığ" },
            { "sehir": "Erzincan" }, { "sehir": "Erzurum" }, { "sehir": "Eskişehir" }, { "sehir": "Gaziantep" }, { "sehir": "Giresun" }, { "sehir": "Gümüşhane" },
            { "sehir": "Hakkari" }, { "sehir": "Hatay" }, { "sehir": "Iğdır" }, { "sehir": "Isparta" }, { "sehir": "Kahramanmaraş" }, { "sehir": "Karabük" },
            { "sehir": "Karaman" }, { "sehir": "Kars" }, { "sehir": "Kastamonu" }, { "sehir": "Kayseri" }, { "sehir": "Kırıkkale" }, { "sehir": "Kırklareli" },
            { "sehir": "Kırşehir" }, { "sehir": "Kilis" }, { "sehir": "Kocaeli" }, { "sehir": "Konya" }, { "sehir": "Kütahya" }, { "sehir": "Malatya" },
            { "sehir": "Manisa" }, { "sehir": "Mardin" }, { "sehir": "Mersin" }, { "sehir": "Muğla" }, { "sehir": "Muş" }, { "sehir": "Nevşehir" },
            { "sehir": "Niğde" }, { "sehir": "Ordu" }, { "sehir": "Osmaniye" }, { "sehir": "Rize" }, { "sehir": "Sakarya" }, { "sehir": "Samsun" },
            { "sehir": "Siirt" }, { "sehir": "Sinop" }, { "sehir": "Sivas" }, { "sehir": "Şırnak" }, { "sehir": "Tekirdağ" }, { "sehir": "Tokat" },
            { "sehir": "Trabzon" }, { "sehir": "Tunceli" }, { "sehir": "Şanlıurfa" }, { "sehir": "Uşak" }, { "sehir": "Van" }, { "sehir": "Yalova" },
            { "sehir": "Yozgat" }, { "sehir": "Zonguldak" }
        ];
        this.detay = this.navParams.get('ozDetay');
        this.detayList = this.navParams.get('ozDetayList');
        this.basvurulist = this.navParams.get('basvurulist');
        // if(this.detayList) //console.log("oki");
        this.des = this.navParams.get('des');
        // console.log(JSON.stringify(this.detay)+this.des+"odetay")
        // this.detayClone = Object.assign({}, this.detay);
        this.kisiselFormGroup = formBuilder.group({
            isim: [this.detay.isim, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            dogumTarihi: [this.detay.dogumTarihi, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            tc: [this.detay.tc, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            // tc: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            askerlik: [this.detay.askerlik, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            medeni: [this.detay.medeni, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            ehliyet: [this.detay.ehliyet, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            egitimdurum: [this.detay.egitimdurum, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            unvan: [this.detay.unvan, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            yilTecrube: [this.detay.yilTecrube, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]]
            // resim: [this.detay.resim==undefined ? this.detay.resim.profile : '', [Validators.required]]
        });
        //  Validators.pattern('[\(]\d{3}[\)]\d{7}')
        this.iletisimFormGroup = formBuilder.group({
            telefon: [this.detay.telefon, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            email: [this.detay.email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            adres: [this.detay.adres, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            sehir: [this.detay.sehir, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
        this.tecrubeFormGroup = formBuilder.group({
            firma: [this.detay.firma, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            pozisyon: [this.detay.pozisyon, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            isTanimiKisa: [this.detay.isTanimiKisa, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            // isTanimi: [this.detay.isTanimi, Validators.required],
            sehir: [this.detay.sehir, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            ulke: [this.detay.ulke, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            giris: [this.detay.giris, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            cikis: [this.detay.cikis]
        });
        this.egitimFormGroup = formBuilder.group({
            okul: [this.detay.okul, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            derece: [this.detay.derece, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            bolum: [this.detay.bolum],
            cikis: [this.detay.cikis, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            sehir: [this.detay.sehir, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            ulke: [this.detay.ulke, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
        this.yabanciDilFormGroup = formBuilder.group({
            dil: [this.detay.dil, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            seviye: [this.detay.seviye, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
        this.sertifikaFormGroup = formBuilder.group({
            ad: [this.detay.ad, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            kurum: [this.detay.kurum, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            cikis: [this.detay.cikis, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
        });
        this.bilgisayarFormGroup = formBuilder.group({
            bilgisayar: [this.detay.bilgisayar, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
    }
    OzgecmisDetayPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad OzgecmisDetayPage');
    };
    OzgecmisDetayPage.prototype.openGallery = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]['installed']()) {
            var cameraOptions = {
                // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 100,
                targetHeight: 100,
                encodingType: this.camera.EncodingType.JPEG
                // correctOrientation: true
                // mediaType: this.camera.MediaType.PICTURE
            };
            // this.detay.resim.media = 'upload';
            this.camera.getPicture(cameraOptions)
                .then(function (file_uri) {
                _this.detay.resim = 'data:image/jpg;base64,' + file_uri;
                // this.ozgecmisSer.updateAvatar('data:image/jpeg;base64,' + file_uri)
                // .then( (resUrl: any) => {
                //   this.detay.resim.link = resUrl.secure_url;
                //   console.log(resUrl);
                //   // console.log(resUrl.secure_url+'secure');
                // });
            }, function (err) { return console.log(err); });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    OzgecmisDetayPage.prototype.save = function () {
        // console.log(JSON.stringify(this.detay)+'detaysavee');
        // console.log(JSON.stringify(this.detayList)+'detaysavelist');
        var _this = this;
        if (this.detayList) {
            //console.log("resim update");
            this.des = this.des.replace("Ekle", "");
            this.ozgecmisSer.updateOzgecmis(this.des, this.detayList, this.basvurulist)
                .then(function (res) {
                //console.log(JSON.stringify(this.basvurulist)+'detaylist');
                _this.storage.set('ozgecmis', _this.basvurulist);
                _this.events.publish('ozgecmis:update');
                _this.navCtrl.pop();
            });
        }
        else {
            //console.log("resim else");
            this.ozgecmisSer.updateOzgecmisAll(this.detay)
                .then(function (res) {
                //console.log(JSON.stringify(this.detay)+'detaylist');
                _this.events.publish('ozgecmis:update');
                _this.storage.set('ozgecmis', _this.detay);
                _this.navCtrl.pop();
            });
        }
        // ozgecmisSer.updateOzgecmis()
    };
    OzgecmisDetayPage.prototype.delete = function () {
        var _this = this;
        //console.log(JSON.stringify(this.detay)+'detay');
        this.des = this.des.replace('Ekle', '');
        if ((this.des == 'tecrube' || this.des == 'egitim') && Object.keys(this.detayList).length < 2) {
            this.presentToast("Son kayıt silinemez!");
            return;
        }
        var i = this.detayList.findIndex(function (item) {
            return (item === _this.detay);
        });
        this.detayList.splice(i, 1);
        this.ozgecmisSer.updateOzgecmis(this.des, this.detayList, this.basvurulist)
            .then(function (res) {
            //console.log(JSON.stringify(this.basvurulist)+'detaylist');
            _this.storage.set('ozgecmis', _this.basvurulist)
                .then(function (res) { return _this.navCtrl.pop(); });
        });
    };
    OzgecmisDetayPage.prototype.add = function () {
        var _this = this;
        //console.log(JSON.stringify(this.detay)+'detay');
        this.detayList.push(this.detay);
        this.des = this.des.replace('Ekle', '');
        this.ozgecmisSer.updateOzgecmis(this.des, this.detayList, this.basvurulist)
            .then(function (res) {
            //console.log(JSON.stringify(this.basvurulist)+'detaylist');
            _this.storage.set('ozgecmis', _this.basvurulist)
                .then(function (res) { return _this.navCtrl.pop(); });
        });
    };
    OzgecmisDetayPage.prototype.butPressed = function (media) {
        // this.detay.resim.media = media;
        // this.detay.resim.link = "https://avatars.io/"+this.detay.resim.media+"/"+this.detay.resim.profile;
        //console.log("butPressed");
    };
    OzgecmisDetayPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        // let dataUrl = undefined;
        reader.onload = function (readerEvent) {
            //console.log("event");
            _this.detay.resim = readerEvent.target.result;
            // console.log(dataUrl);
            // console.log(dataUrl.length);
            _this.resimCloudUrl = 'url(' + _this.detay.resim + ')';
        };
        reader.readAsDataURL(event.target.files[0]);
        //console.log(event.target.files[0]);
    };
    OzgecmisDetayPage.prototype.presentToast = function (mesaj) {
        var toast = this.toastCtrl.create({
            message: mesaj,
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], OzgecmisDetayPage.prototype, "fileInput", void 0);
    OzgecmisDetayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ozgecmis-detay',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\ozgecmis-detay\ozgecmis-detay.html"*/'<!--\n\n  Generated template for the OzgecmisDetay page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-buttons start>\n\n    <button (click)="goBack()" royal>\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n    </button> -->\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n<!-- </ion-buttons> -->\n\n\n\n    <ion-title>Özgeçmiş Detayı</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="des==\'kisisel\'&&detay">\n\n    <form [formGroup]="kisiselFormGroup">\n\n<!-- <form [formGroup]="ozgecmisFormGroup"> -->\n\n    <!-- <ion-label floating>Ünvan / Son Pozisyon</ion-label> -->\n\n\n\n    <!-- <ion-item no-lines>\n\n    <ion-thumbnail class="profile-image" item-left (click)="openGallery()">\n\n    <img class="profile-image1" [src]="detay.resim">\n\n    </ion-thumbnail>\n\n    <input type="file" #fileInput placeholder="resim" [hidden]="true" (change)="processWebImage($event)"/>\n\n    </ion-item> -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Resim</ion-label>\n\n    <ion-input [disabled]="detay.resim.media==\'upload\'" [ngModelOptions]="{standalone: true}" type="text"\n\n              [(ngModel)]="detay.resim.profile" placeholder="Sosyal medya profil adınız" (change)="picChanged()"></ion-input>\n\n    </ion-item> -->\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" required />\n\n    <div class="profile-image-wrapper">\n\n      <div class="profile-image-placeholder" *ngIf="!detay.resim" (click)="openGallery()">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>Profil Resmi</div>\n\n      </div>\n\n      <!-- <div class="profile-image" [style.backgroundImage]="getProfileImageStyle(userUrl)" *ngIf="userUrl"></div> -->\n\n      <div *ngIf="detay.resim" >\n\n          <img class="profile-image" [src]="detay.resim" (click)="openGallery()">\n\n      </div>\n\n    </div>\n\n    <ion-item>\n\n        <ion-label floating>İsim Soyisim</ion-label>\n\n        <ion-input formControlName="isim" type="text" [(ngModel)]="detay.isim"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>Ünvan / Son Pozisyon</ion-label>\n\n        <ion-input formControlName="unvan" type="text" [(ngModel)]="detay.unvan"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Doğum Tarihi</ion-label>\n\n      <ion-datetime formControlName="dogumTarihi" displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="detay.dogumTarihi" cancelText="İptal" doneText="Tamam">\n\n      </ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>TC Vatandaşı</ion-label>\n\n    <ion-select formControlName="tc" [(ngModel)]="detay.tc" cancelText="İptal" okText="Tamam">\n\n      <ion-option value="Evet" >Evet</ion-option>\n\n      <ion-option value="Hayır">Hayır</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>Askerlik</ion-label>\n\n    <ion-select formControlName="askerlik" [(ngModel)]="detay.askerlik" cancelText="İptal" okText="Tamam">\n\n      <ion-option value="Yapıldı/Muaf" >Yapıldı/Muaf</ion-option>\n\n      <ion-option value="Tecilli/Yapılmadı">Tecilli/Yapılmadı</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>Medeni Hal</ion-label>\n\n    <ion-select formControlName="medeni" [(ngModel)]="detay.medeni" cancelText="İptal" okText="Tamam">\n\n      <ion-option value="Evli" >Evli</ion-option>\n\n      <ion-option value="Bekar">Bekar</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Ehliyet</ion-label>\n\n        <ion-input formControlName="ehliyet" type="text" [(ngModel)]="detay.ehliyet"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>Eğitim</ion-label>\n\n    <ion-select formControlName="egitimdurum" [(ngModel)]="detay.egitimdurum" cancelText="İptal" okText="Tamam">\n\n      <ion-option value="1">İlköğretim</ion-option>\n\n      <ion-option value="2">Lise</ion-option>\n\n      <ion-option value="3">Lisans</ion-option>\n\n      <ion-option value="4">Yüksek Lisans</ion-option>\n\n      <ion-option value="5">Doktora</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>Çalışılan yıl</ion-label>\n\n        <ion-input formControlName="yilTecrube" type="number" [(ngModel)]="detay.yilTecrube"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-lines *ngIf="!kisiselFormGroup.valid">\n\n        <p style="color:red;">Tüm alanlar zorunlu</p>\n\n    </ion-item>\n\n    <div *ngIf="(des==\'tecrubeEkle\'||des==\'egitimEkle\'||des==\'yabanciDilEkle\'||des==\'sertifikaEkle\')">\n\n      <p></p>\n\n  <button ion-button block icon-left color="secondary" [disabled]="!kisiselFormGroup.valid" (click)="add()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Ekle</button>\n\n  </div>\n\n\n\n  <div *ngIf="(des!=\'tecrubeEkle\'&&des!=\'egitimEkle\'&&des!=\'yabanciDilEkle\'&&des!=\'sertifikaEkle\')">\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col *ngIf="(des!=\'kisisel\'&& des!=\'iletisim\'&& des!=\'bilgisayar\')">\n\n    <button ion-button block icon-left color="danger" (click)="delete()">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Sil</button>\n\n    </ion-col>\n\n    <ion-col>\n\n    <button ion-button block icon-left [disabled]="!kisiselFormGroup.valid" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n      Güncelle</button>\n\n    </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</form>\n\n  </div>\n\n\n\n  <div *ngIf="des==\'iletisim\'&&detay">\n\n    <form [formGroup]="iletisimFormGroup">\n\n\n\n    <ion-item>\n\n        <ion-label floating>Telefon</ion-label>\n\n        <ion-input formControlName="telefon" type="number" [(ngModel)]="detay.telefon"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input formControlName="email" type="text" [(ngModel)]="detay.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>Şehir</ion-label>\n\n    <ion-select formControlName="sehir" [(ngModel)]="detay.sehir" interface="popover" cancelText="İptal" okText="Tamam">\n\n      <ion-option *ngFor="let item of sehirler" value=\'{{item.sehir}}\'>{{item.sehir}}</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Adres:</ion-label>\n\n        <ion-input formControlName="adres" type="text" [(ngModel)]="detay.adres"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-lines *ngIf="!iletisimFormGroup.valid">\n\n        <p style="color:red;">Tüm alanlar zorunlu</p>\n\n    </ion-item>\n\n    <div *ngIf="(des==\'tecrubeEkle\'||des==\'egitimEkle\'||des==\'yabanciDilEkle\'||des==\'sertifikaEkle\')">\n\n      <p></p>\n\n  <button ion-button block icon-left color="secondary" [disabled]="!iletisimFormGroup.valid" (click)="add()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Ekle</button>\n\n  </div>\n\n\n\n  <div *ngIf="(des!=\'tecrubeEkle\'&&des!=\'egitimEkle\'&&des!=\'yabanciDilEkle\'&&des!=\'sertifikaEkle\')">\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col *ngIf="(des!=\'kisisel\'&& des!=\'iletisim\'&& des!=\'bilgisayar\')">\n\n    <button ion-button block icon-left color="danger" (click)="delete()">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Sil</button>\n\n    </ion-col>\n\n    <ion-col>\n\n    <button ion-button block icon-left [disabled]="!iletisimFormGroup.valid" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n      Güncelle</button>\n\n    </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</form>\n\n  </div>\n\n\n\n  <div *ngIf="(des==\'tecrube\'||des==\'tecrubeEkle\')&&detay">\n\n    <form [formGroup]="tecrubeFormGroup">\n\n\n\n    <ion-item>\n\n        <ion-label floating>Firma</ion-label>\n\n        <ion-input formControlName="firma" type="text" [(ngModel)]="detay.firma"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Pozisyon</ion-label>\n\n        <ion-input formControlName="pozisyon" type="text" [(ngModel)]="detay.pozisyon"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Kısa İş Tanımı</ion-label>\n\n        <ion-textarea formControlName="isTanimiKisa" rows="3" type="text" [(ngModel)]="detay.isTanimiKisa"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <!-- <ion-item>\n\n        <ion-label floating>İş Tanımı</ion-label>\n\n        <ion-textarea formControlName="isTanimi" rows="2" type="text" [(ngModel)]="detay.isTanimi"></ion-textarea>\n\n    </ion-item> -->\n\n\n\n    <ion-item>\n\n        <ion-label floating>Şehir</ion-label>\n\n        <ion-input formControlName="sehir" type="text" [(ngModel)]="detay.sehir"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Ülke</ion-label>\n\n        <ion-input formControlName="ulke" type="text" [(ngModel)]="detay.ulke"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Giriş Tarihi</ion-label>\n\n      <ion-datetime formControlName="giris" displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" [(ngModel)]="detay.giris" cancelText="İptal" doneText="Tamam">\n\n      </ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Çıkış Tarihi</ion-label>\n\n      <ion-datetime formControlName="cikis" displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" [(ngModel)]="detay.cikis" cancelText="İptal" doneText="Tamam">\n\n      </ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines *ngIf="!tecrubeFormGroup.valid">\n\n        <p style="color:red;">Tüm alanlar zorunlu</p>\n\n    </ion-item>\n\n    <div *ngIf="(des==\'tecrubeEkle\'||des==\'egitimEkle\'||des==\'yabanciDilEkle\'||des==\'sertifikaEkle\')">\n\n      <p></p>\n\n  <button ion-button block icon-left color="secondary" [disabled]="!tecrubeFormGroup.valid" (click)="add()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Ekle</button>\n\n  </div>\n\n\n\n  <div *ngIf="(des!=\'tecrubeEkle\'&&des!=\'egitimEkle\'&&des!=\'yabanciDilEkle\'&&des!=\'sertifikaEkle\')">\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col *ngIf="(des!=\'kisisel\'&& des!=\'iletisim\'&& des!=\'bilgisayar\')">\n\n    <button ion-button block icon-left color="danger" (click)="delete()">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Sil</button>\n\n    </ion-col>\n\n    <ion-col>\n\n    <button ion-button block icon-left [disabled]="!tecrubeFormGroup.valid" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n      Güncelle</button>\n\n    </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  </form>\n\n  </div>\n\n\n\n  <div *ngIf="(des==\'egitim\'||des==\'egitimEkle\')&&detay">\n\n    <form [formGroup]="egitimFormGroup">\n\n\n\n    <ion-item>\n\n        <ion-label floating>Okul</ion-label>\n\n        <ion-input formControlName="okul" type="text" [(ngModel)]="detay.okul"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Mezuniyet Tarihi</ion-label>\n\n      <ion-datetime formControlName="cikis" displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" [(ngModel)]="detay.cikis" cancelText="İptal" doneText="Tamam">\n\n      </ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Bölüm</ion-label>\n\n        <ion-input formControlName="bolum" type="text" [(ngModel)]="detay.bolum"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>Mezuniyet Derecesi</ion-label>\n\n    <ion-select formControlName="derece" [(ngModel)]="detay.derece" cancelText="İptal" okText="Tamam">\n\n      <ion-option value="1">İlköğretim</ion-option>\n\n      <ion-option value="2">Lise</ion-option>\n\n      <ion-option value="3">Lisans</ion-option>\n\n      <ion-option value="4">Yüksek Lisans</ion-option>\n\n      <ion-option value="5">Doktora</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Şehir</ion-label>\n\n        <ion-input formControlName="sehir" type="text" [(ngModel)]="detay.sehir"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Ülke</ion-label>\n\n        <ion-input formControlName="ulke" type="text" [(ngModel)]="detay.ulke"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines *ngIf="!egitimFormGroup.valid">\n\n        <p style="color:red;">Tüm alanlar zorunlu</p>\n\n    </ion-item>\n\n    <div *ngIf="(des==\'tecrubeEkle\'||des==\'egitimEkle\'||des==\'yabanciDilEkle\'||des==\'sertifikaEkle\')">\n\n      <p></p>\n\n  <button ion-button block icon-left color="secondary" [disabled]="!egitimFormGroup.valid" (click)="add()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Ekle</button>\n\n  </div>\n\n\n\n  <div *ngIf="(des!=\'tecrubeEkle\'&&des!=\'egitimEkle\'&&des!=\'yabanciDilEkle\'&&des!=\'sertifikaEkle\')">\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col *ngIf="(des!=\'kisisel\'&& des!=\'iletisim\'&& des!=\'bilgisayar\')">\n\n    <button ion-button block icon-left color="danger" (click)="delete()">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Sil</button>\n\n    </ion-col>\n\n    <ion-col>\n\n    <button ion-button block icon-left [disabled]="!egitimFormGroup.valid" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n      Güncelle</button>\n\n    </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  </form>\n\n  </div>\n\n\n\n  <div *ngIf="(des==\'sertifika\'||des==\'sertifikaEkle\')&&detay">\n\n    <form [formGroup]="sertifikaFormGroup">\n\n\n\n    <ion-item>\n\n        <ion-label floating>Ad</ion-label>\n\n        <ion-input formControlName="ad" type="text" [(ngModel)]="detay.ad"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Kurum</ion-label>\n\n        <ion-input formControlName="kurum" type="text" [(ngModel)]="detay.kurum"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Tarih</ion-label>\n\n      <ion-datetime formControlName="cikis" displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" [(ngModel)]="detay.cikis" cancelText="İptal" doneText="Tamam">\n\n      </ion-datetime>\n\n    </ion-item>\n\n    <div *ngIf="(des==\'tecrubeEkle\'||des==\'egitimEkle\'||des==\'yabanciDilEkle\'||des==\'sertifikaEkle\')">\n\n      <p></p>\n\n  <button ion-button block icon-left color="secondary" [disabled]="!sertifikaFormGroup.valid" (click)="add()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Ekle</button>\n\n  </div>\n\n\n\n    <ion-item no-lines *ngIf="!sertifikaFormGroup.valid">\n\n        <p style="color:red;">Tüm alanlar zorunlu</p>\n\n    </ion-item>\n\n  <div *ngIf="(des!=\'tecrubeEkle\'&&des!=\'egitimEkle\'&&des!=\'yabanciDilEkle\'&&des!=\'sertifikaEkle\')">\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col *ngIf="(des!=\'kisisel\'&& des!=\'iletisim\'&& des!=\'bilgisayar\')">\n\n    <button ion-button block icon-left color="danger" (click)="delete()">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Sil</button>\n\n    </ion-col>\n\n    <ion-col>\n\n    <button ion-button block icon-left [disabled]="!sertifikaFormGroup.valid" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n      Güncelle</button>\n\n    </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</form>\n\n  </div>\n\n\n\n  <div *ngIf="(des==\'yabanciDil\'||des==\'yabanciDilEkle\')&&detay">\n\n    <form [formGroup]="yabanciDilFormGroup">\n\n\n\n    <ion-item>\n\n        <ion-label floating>Dil</ion-label>\n\n        <ion-input formControlName="dil" type="text" [(ngModel)]="detay.dil"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>Seviye</ion-label>\n\n    <ion-select formControlName="seviye" [(ngModel)]="detay.seviye" cancelText="İptal" okText="Tamam">\n\n      <ion-option value="1">Başlangıç</ion-option>\n\n      <ion-option value="2">Orta</ion-option>\n\n      <ion-option value="3">İyi</ion-option>\n\n      <ion-option value="4">Çok İyi</ion-option>\n\n      <ion-option value="5">Mükemmel</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines *ngIf="!yabanciDilFormGroup.valid">\n\n        <p style="color:red;">Tüm alanlar zorunlu</p>\n\n    </ion-item>\n\n    <div *ngIf="(des==\'tecrubeEkle\'||des==\'egitimEkle\'||des==\'yabanciDilEkle\'||des==\'sertifikaEkle\')">\n\n      <p></p>\n\n  <button ion-button block icon-left color="secondary" [disabled]="!yabanciDilFormGroup.valid" (click)="add()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Ekle</button>\n\n  </div>\n\n\n\n  <div *ngIf="(des!=\'tecrubeEkle\'&&des!=\'egitimEkle\'&&des!=\'yabanciDilEkle\'&&des!=\'sertifikaEkle\')">\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col *ngIf="(des!=\'kisisel\'&& des!=\'iletisim\'&& des!=\'bilgisayar\')">\n\n    <button ion-button block icon-left color="danger" (click)="delete()">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Sil</button>\n\n    </ion-col>\n\n    <ion-col>\n\n    <button ion-button block icon-left [disabled]="!yabanciDilFormGroup.valid" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n      Güncelle</button>\n\n    </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  </form>\n\n  </div>\n\n\n\n  <div *ngIf="des==\'bilgisayar\'&&detay">\n\n    <form [formGroup]="bilgisayarFormGroup">\n\n\n\n    <ion-item>\n\n    <ion-label stacked>Bilgisayar Teknolojileri</ion-label>\n\n    <ion-input formControlName="bilgisayar" type="text" [(ngModel)]="detay.bilgisayar" placeholder="Örn: Excel, SQL"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="(des==\'tecrubeEkle\'||des==\'egitimEkle\'||des==\'yabanciDilEkle\'||des==\'sertifikaEkle\')">\n\n      <p></p>\n\n    <ion-item no-lines *ngIf="!bilgisayarFormGroup.valid">\n\n        <p style="color:red;">Bu alan zorunlu</p>\n\n    </ion-item>\n\n  <button ion-button block icon-left color="secondary" [disabled]="!bilgisayarFormGroup.valid" (click)="add()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Ekle</button>\n\n  </div>\n\n\n\n  <div *ngIf="(des!=\'tecrubeEkle\'&&des!=\'egitimEkle\'&&des!=\'yabanciDilEkle\'&&des!=\'sertifikaEkle\')">\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col *ngIf="(des!=\'kisisel\'&& des!=\'iletisim\'&& des!=\'bilgisayar\')">\n\n    <button ion-button block icon-left color="danger" (click)="delete()">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Sil</button>\n\n    </ion-col>\n\n    <ion-col>\n\n    <button ion-button block icon-left [disabled]="!bilgisayarFormGroup.valid" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n      Güncelle</button>\n\n    </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  </form>\n\n  </div>\n\n\n\n\n\n\n\n<!-- </form> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\ozgecmis-detay\ozgecmis-detay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_ozgecmis_ser__["a" /* OzgecmisSer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], OzgecmisDetayPage);
    return OzgecmisDetayPage;
}());

//# sourceMappingURL=ozgecmis-detay.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrelePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Geolocation } from '@ionic-native/geolocation';
var FiltrelePage = /** @class */ (function () {
    function FiltrelePage(navCtrl, navParams, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.sehirler = [
            { "sehir": "İstanbul" }, { "sehir": "Ankara" }, { "sehir": "İzmir" }, { "sehir": "Adana" }, { "sehir": "Adıyaman" }, { "sehir": "Afyonkarahisar" },
            { "sehir": "Ağrı" }, { "sehir": "Aksaray" }, { "sehir": "Amasya" }, { "sehir": "Antalya" }, { "sehir": "Ardahan" }, { "sehir": "Artvin" },
            { "sehir": "Aydın" }, { "sehir": "Balıkesir" }, { "sehir": "Bartın" }, { "sehir": "Batman" }, { "sehir": "Bayburt" }, { "sehir": "Bilecik" },
            { "sehir": "Bingöl" }, { "sehir": "Bitlis" }, { "sehir": "Bolu" }, { "sehir": "Burdur" }, { "sehir": "Bursa" }, { "sehir": "Çanakkale" }, { "sehir": "Çankırı" },
            { "sehir": "Çorum" }, { "sehir": "Denizli" }, { "sehir": "Diyarbakır" }, { "sehir": "Düzce" }, { "sehir": "Edirne" }, { "sehir": "Elazığ" },
            { "sehir": "Erzincan" }, { "sehir": "Erzurum" }, { "sehir": "Eskişehir" }, { "sehir": "Gaziantep" }, { "sehir": "Giresun" }, { "sehir": "Gümüşhane" },
            { "sehir": "Hakkari" }, { "sehir": "Hatay" }, { "sehir": "Iğdır" }, { "sehir": "Isparta" }, { "sehir": "Kahramanmaraş" }, { "sehir": "Karabük" },
            { "sehir": "Karaman" }, { "sehir": "Kars" }, { "sehir": "Kastamonu" }, { "sehir": "Kayseri" }, { "sehir": "Kırıkkale" }, { "sehir": "Kırklareli" },
            { "sehir": "Kırşehir" }, { "sehir": "Kilis" }, { "sehir": "Kocaeli" }, { "sehir": "Konya" }, { "sehir": "Kütahya" }, { "sehir": "Malatya" },
            { "sehir": "Manisa" }, { "sehir": "Mardin" }, { "sehir": "Mersin" }, { "sehir": "Muğla" }, { "sehir": "Muş" }, { "sehir": "Nevşehir" },
            { "sehir": "Niğde" }, { "sehir": "Ordu" }, { "sehir": "Osmaniye" }, { "sehir": "Rize" }, { "sehir": "Sakarya" }, { "sehir": "Samsun" },
            { "sehir": "Siirt" }, { "sehir": "Sinop" }, { "sehir": "Sivas" }, { "sehir": "Şırnak" }, { "sehir": "Tekirdağ" }, { "sehir": "Tokat" },
            { "sehir": "Trabzon" }, { "sehir": "Tunceli" }, { "sehir": "Şanlıurfa" }, { "sehir": "Uşak" }, { "sehir": "Van" }, { "sehir": "Yalova" },
            { "sehir": "Yozgat" }, { "sehir": "Zonguldak" }
        ];
        this.detayAra = navParams.get('detayAra');
        //console.log(JSON.stringify(this.detayAra) + 'detay')
        this.sirala = navParams.get('sirala');
    }
    FiltrelePage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad FiltrelePage');
    };
    FiltrelePage.prototype.filtrele = function () {
        //console.log(this.sirala+'kapatfiltre');
        // this.sirala = JSON.parse(this.sirala);
        //console.log(JSON.stringify(this.detayAra)+'kapatfiltre');
        // //console.log(JSON.stringify(this.sirala)+'parsefiltre');
        // this.viewCtrl.dismiss(this.sirala, this.detayAra);
        this.events.publish('ilan:filtered');
        this.navCtrl.pop();
    };
    FiltrelePage.prototype.kapat = function () {
        this.navCtrl.pop();
    };
    FiltrelePage.prototype.clear = function () {
        //console.log(JSON.stringify(this.detayAra)+'clearfiltre');
        //console.log(JSON.stringify(this.sirala)+'clearfiltre');
        // this.viewCtrl.dismiss(this.sirala, this.detayAra);
        this.events.publish('ilan:filtered', 'clear');
        this.navCtrl.pop();
    };
    FiltrelePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filtrele',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\filtrele\filtrele.html"*/'<!--\n\n  Generated template for the Filtrele page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Filtrele</ion-title>\n\n  <!-- <ion-buttons start>\n\n  <button ion-button (click)="kapat()">\n\n    <span ion-text color="dark" showWhen="ios">Kapat</span>\n\n    <ion-icon name="close-circle" showWhen="android, windows"></ion-icon>\n\n  </button>\n\n</ion-buttons> -->\n\n<button ion-button menuToggle>\n\n  <ion-icon name="menu"></ion-icon>\n\n</button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="detayAra">\n\n\n\n  <!-- <ion-item-group>\n\n    <ion-item-divider color="light"></ion-item-divider>\n\n  <ion-item>\n\n  <ion-label color="secondary">Sırala:</ion-label>\n\n  <ion-select [(ngModel)]="sirala" cancelText="İptal" okText="Tamam">\n\n    <ion-option value=\'{}\'>En Uygun</ion-option>\n\n    <ion-option value=\'{"olusturmaTarih" :-1}\'>En Erken</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n</ion-item-group> -->\n\n\n\n<!-- <ion-item-group>\n\n  <ion-item-divider color="light"></ion-item-divider> -->\n\n  <ion-item>\n\n  <ion-label floating color="primary">İl</ion-label>\n\n  <ion-select [(ngModel)]="detayAra.il" interface="popover" cancelText="İptal" okText="Tamam">\n\n    <!-- <ion-option value=\'Konumum\'>Konumum</ion-option> -->\n\n    <ion-option *ngFor="let item of sehirler" value=\'{{item.sehir}}\'>{{item.sehir}}</ion-option>\n\n\n\n    <!-- <ion-option value=\'İstanbul\'>İstanbul</ion-option>\n\n    <ion-option value=\'Ankara\'>Ankara</ion-option>\n\n    <ion-option value=\'Kahramanmaraş\'>Kahramanmaraş</ion-option> -->\n\n  </ion-select>\n\n  </ion-item>\n\n<ion-item>\n\n    <ion-label floating color="primary">Firma</ion-label>\n\n    <ion-input type="text" [(ngModel)]="detayAra.firma"></ion-input>\n\n</ion-item>\n\n\n\n<ion-item>\n\n    <ion-label floating color="primary">Tip</ion-label>\n\n  <ion-select  type="text" [(ngModel)]="detayAra.tip" cancelText="İptal" okText="Tamam">\n\n    <ion-option value=\'Tam Z.\'>Tam Z.</ion-option>\n\n    <ion-option value=\'Yarı Z.\'>Yarı Z.</ion-option>\n\n    <ion-option value=\'Proje Bazlı\'>Proje Bazlı</ion-option>\n\n    <ion-option value=\'Staj\'>Staj</ion-option>\n\n    <ion-option value=\'Günlük\'>Günlük</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label floating color="primary">Tecrübe</ion-label>\n\n  <ion-select [(ngModel)]="detayAra.tecrube" multiple="true" cancelText="İptal" okText="Tamam">\n\n    <!-- <ion-option value=\'\' selected="true">Farketmez</ion-option> -->\n\n    <ion-option value=\'Az Tecrübeli (0-2 yıl)\'>Az Tecrübeli (0-2 yıl)</ion-option>\n\n    <ion-option value=\'Orta Tecrübeli (2-4 yıl)\'>Orta Tecrübeli (2-4 yıl)</ion-option>\n\n    <ion-option value=\'Çok Tecrübeli (4-6 yıl)\'>Çok Tecrübeli (4-6 yıl)</ion-option>\n\n    <ion-option value=\'Yönetici - Eksper (6 yıl üstü)\'>Yönetici - Eksper (6+ yıl)</ion-option>\n\n    <ion-option value=\'Stajyer\'>Stajyer</ion-option>\n\n    <ion-option value=\'Hizmet Personeli - İşçi\'>Hizmet Personeli - İşçi</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n<ion-label floating color="primary">Eğitim</ion-label>\n\n<ion-select [(ngModel)]="detayAra.egitim" multiple="true" cancelText="İptal" okText="Tamam">\n\n  <ion-option value=\'Lise\'>Lise</ion-option>\n\n  <ion-option value=\'Lisans\'>Lisans</ion-option>\n\n  <ion-option value=\'Yüksek Lisans - Doktora\'>Yüksek Lisans - Doktora</ion-option>\n\n</ion-select>\n\n</ion-item>\n\n\n\n <!-- </ion-item-group> -->\n\n\n\n <ion-row>\n\n <ion-col>\n\n <button ion-button block icon-left color="secondary"  (click)="clear()">\n\n   <ion-icon name="backspace"></ion-icon>\n\n   Temizle</button>\n\n </ion-col>\n\n <ion-col>\n\n <button ion-button block icon-left color="primary" (click)="filtrele()">\n\n   <ion-icon name="search"></ion-icon>\n\n   Filtrele</button>\n\n </ion-col>\n\n</ion-row>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\filtrele\filtrele.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], FiltrelePage);
    return FiltrelePage;
}());

//# sourceMappingURL=filtrele.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_filtrele_filtrele__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ozgecmis_detay_ozgecmis_detay__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_hesap_hesap__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ilan_ser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_basvuru_ser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_ozgecmis_ser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_basvuruldu__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pass_reset_pass_reset__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { Geolocation } from '@ionic-native/geolocation';


// import { LinkedIn } from '@ionic-native/linkedin';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // AktivitePage,
                // AyarlarPage,
                // SonucPage,
                // DetayPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_filtrele_filtrele__["a" /* FiltrelePage */],
                // OzgecmisPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_ozgecmis_detay_ozgecmis_detay__["a" /* OzgecmisDetayPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pass_reset_pass_reset__["a" /* PassResetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hesap_hesap__["a" /* HesapPage */],
                // DatePipe,
                __WEBPACK_IMPORTED_MODULE_14__pipes_basvuruldu__["a" /* Basvuruldu */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
                }, {
                    links: [
                        { loadChildren: '../pages/aktivite/aktivite.module#AktivitePageModule', name: 'AktivitePage', segment: 'aktivite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayarlar/ayarlar.module#AyarlarPageModule', name: 'AyarlarPage', segment: 'ayarlar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detay/detay.module#DetayPageModule', name: 'DetayPage', segment: 'detay/:ilanId', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ozgecmis/ozgecmis.module#OzgecmisPageModule', name: 'OzgecmisPage', segment: 'ozgecmis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sonuc/sonuc.module#SonucPageModule', name: 'SonucPage', segment: 'ilanlar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot()
                // FacebookModule.forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // AktivitePage,
                // AyarlarPage,
                // SonucPage,
                // DetayPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_filtrele_filtrele__["a" /* FiltrelePage */],
                // OzgecmisPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_ozgecmis_detay_ozgecmis_detay__["a" /* OzgecmisDetayPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pass_reset_pass_reset__["a" /* PassResetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hesap_hesap__["a" /* HesapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_ilan_ser__["a" /* IlanSer */],
                __WEBPACK_IMPORTED_MODULE_11__providers_basvuru_ser__["a" /* BasvuruSer */],
                __WEBPACK_IMPORTED_MODULE_12__providers_user_auth__["a" /* UserAuth */],
                __WEBPACK_IMPORTED_MODULE_13__providers_ozgecmis_ser__["a" /* OzgecmisSer */],
                // Geolocation,
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                // Deeplinks,
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
                // Facebook,
                // LinkedIn,
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ozgecmis_ser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_hesap_hesap__ = __webpack_require__(203);
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
    function MyApp(platform, statusBar, splashScreen, alertCtrl, authService, storage, ozgecmisSer, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.storage = storage;
        this.ozgecmisSer = ozgecmisSer;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'İlanlar', component: 'SonucPage', icon: 'search' },
            { title: 'Aktiviteler', component: 'AktivitePage', icon: 'walk' },
            { title: 'Özgeçmiş', component: 'OzgecmisPage', icon: 'list-box' },
            { title: 'Ayarlar', component: 'AyarlarPage', icon: 'settings' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        // this.storage.get('ozgecmis')
        //     .then((ozgecmis) => {
        //       if (this.authService.ozgecmis) this.user = this.authService.ozgecmis;
        //       else this.user = ozgecmis;
        //       // this.username = user.isim.substring(0, user.isim.indexOf('@'));
        //       console.log(JSON.stringify(ozgecmis)+"initializeApp");
        //     });
        var _this = this;
        this.events.subscribe('ozgecmis:update', function () {
            //console.log('ozgecmis:update' + this.authService.currentUser.ozgecmis);
            _this.ozgecmisSer.getOzgecmis(_this.authService.currentUser.ozgecmis)
                .then(function (ozgecmis) { return _this.user = ozgecmis; });
        });
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.platform.registerBackButtonAction(function () {
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    if (_this.alert) {
                        _this.alert.dismiss();
                        _this.alert = null;
                    }
                    else {
                        _this.presentLogout('Uygulama kapansın mı?');
                    }
                }
            });
            // this.deeplinks.routeWithNavController(this.nav, {
            //   '/#/ilan/:ilanId': DetayPage,
            //   // '/universal-links-test': AboutPage,
            //   // '/products/:productId': ProductPage
            // }).subscribe((match) => {
            //   console.log('Successfully routed', match);
            // }, (nomatch) => {
            //   console.warn('Unmatched Route', nomatch);
            // });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.presentLogout = function (message) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: message,
            // message: 'Çıkmak istediğinizden emin misiniz?',
            buttons: [
                {
                    text: 'Hayır',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Evet',
                    handler: function () {
                        //console.log('Logged out');
                        if (message == 'Uygulama kapansın mı?') {
                            _this.platform.exitApp();
                        }
                        else {
                            _this.authService.logout();
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                        }
                    }
                }
            ]
        });
        this.alert.present();
    };
    MyApp.prototype.goHesap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_hesap_hesap__["a" /* HesapPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n\n\n    <ion-list>\n\n      <div *ngIf="user">\n\n        <ion-item no-lines>\n\n          <!-- <ion-thumbnail item-start> -->\n\n          <img item-start width="30" height="30" src="assets/img/happy.png">\n\n          <!-- </ion-thumbnail> -->\n\n          <p text-wrap style="color:lightgrey;">İşgüçvar İş Arayan</p>\n\n        </ion-item>\n\n\n\n      <ion-item no-lines text-wrap no-padding no-margin>\n\n        <ion-thumbnail class="img-circle" item-start *ngIf="user.resim">\n\n        <img class="img-circle" [src]="user.resim">\n\n        </ion-thumbnail>\n\n        <p>Merhaba</p>\n\n        <h2 text-wrap>{{user.isim}}</h2>\n\n      </ion-item>\n\n\n\n      <button menuClose ion-item no-lines (click)="goHesap()">\n\n        <ion-icon name="build"></ion-icon>\n\n        Hesabım\n\n      </button>\n\n\n\n      <ion-item-divider color="light"></ion-item-divider>\n\n    </div>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="{{p.icon}}"></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item no-lines (click)="presentLogout(\'Oturumunuz kapansın mı?\')">\n\n        <ion-icon name="log-out"></ion-icon>\n\n        Çıkış\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_auth__["a" /* UserAuth */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_ozgecmis_ser__["a" /* OzgecmisSer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Basvuruldu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_basvuru_ser__ = __webpack_require__(107);
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
  Generated class for the Basvuruldu pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
var Basvuruldu = /** @class */ (function () {
    function Basvuruldu(basvuruSer) {
        this.basvuruSer = basvuruSer;
    }
    /*
      Takes a value and makes it lowercase.
     */
    Basvuruldu.prototype.transform = function (ilanId) {
        // console.log("pipe");
        // value = value + ''; // make sure it's a string
        return this.basvuruSer.checkBasvuru(ilanId);
    };
    Basvuruldu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'basvuruldu'
        })
        // @Injectable()
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_basvuru_ser__["a" /* BasvuruSer */]])
    ], Basvuruldu);
    return Basvuruldu;
}());

//# sourceMappingURL=basvuruldu.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pass_reset_pass_reset__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ozgecmis_ser__ = __webpack_require__(36);
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
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, loadingCtrl, toastCtrl, storage, ozgecmisSer, events) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.ozgecmisSer = ozgecmisSer;
        this.events = events;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LoginPage');
        var _this = this;
        this.storage.get('user')
            .then(function (user) {
            _this.email = user.email;
            _this.password = user.password;
        })
            .catch(function (err) {
            return;
        });
        // this.showLoader('Bilgiler yükleniyor...');
        //Check if already authenticated
        this.authService.checkAuthentication().then(function (res) {
            // console.log("Already authorized");
            // this.loading.dismiss();
            _this.navCtrl.setRoot('SonucPage');
        }, function (err) {
            // console.log("Not already authorized");
            // this.loading.dismiss();
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // this.showLoader('Giriş Yapılıyor...');
        var credentials = {
            email: this.email,
            password: this.password
        };
        // console.log(JSON.stringify(credentials)+'credentials');
        this.authService.login(credentials).then(function (result) {
            //   this.userService.getUser(credentials.email)
            //   .then((user) => {
            //   this.storage.set('user', user);
            //   // console.log(JSON.stringify(user)+'  loginuser');
            // }, (err) => {
            //     this.loading.dismiss();
            //     // this.presentToast();
            //     // console.log(err);
            // });
            //console.log(JSON.stringify(result)+"result");
            _this.ozgecmisSer.getOzgecmis(result.user.ozgecmis)
                .then(function (res) {
                // this.loading.dismiss();
                _this.events.publish('ozgecmis:update');
                _this.navCtrl.setRoot('SonucPage');
            }, function (err) {
                // this.loading.dismiss();
                //console.log(JSON.stringify(err._body)+'asdasd');
                // let msg = JSON.parse(err._body);
            });
        }, function (err) {
            // this.loading.dismiss();
            //console.log(JSON.stringify(err._body)+'asdasd');
            // let msg = JSON.parse(err._body);
        });
    };
    //   presentToast(message) {
    //   let toast = this.toastCtrl.create({
    //     message: message,
    //     duration: 4000,
    //     position: 'top',
    //     showCloseButton: true,
    //     closeButtonText: 'OK'
    //   });
    //
    //   // toast.onDidDismiss(() => {
    //   // });
    //   toast.present();
    // }
    LoginPage.prototype.launchSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.resetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pass_reset_pass_reset__["a" /* PassResetPage */]);
    };
    LoginPage.prototype.showLoader = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\7448\Desktop\isBul\src\pages\login\login.html"*/'<!--\n\n  Generated template for the Login page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>İş Arayan Giriş</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <form #heroForm="ngForm">\n\n\n\n            <ion-list>\n\n\n\n              <ion-item>\n\n                <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n                <ion-input [(ngModel)]="email" placeholder="Email" type="email" #name="ngModel" name="name"\n\n                required pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"></ion-input>\n\n              </ion-item>\n\n              <ion-item no-lines *ngIf="name.errors">\n\n                  <p style="color:red;">Lütfen geçerli email giriniz</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n                <ion-input [(ngModel)]="password" placeholder="Şifre" type="password" #pass="ngModel" name="pass" required></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n\n\n            <button ion-button block icon-left (click)="login()" color="primary" class="login-button"  [disabled]="!heroForm.form.valid">\n\n              <ion-icon name="log-in"></ion-icon>\n\n              Gİrİş</button>\n\n          </form>\n\n\n\n    <ion-row>\n\n        <ion-col text-center>\n\n            <button ion-button round icon-left color="secondary" (click)="launchSignup()" class="create-account">\n\n              <ion-icon name="person-add"></ion-icon>\n\n              Hesap Oluştur</button>\n\n        </ion-col>\n\n    </ion-row>\n\n  <div text-center>\n\n    <button ion-button clear small (click)="resetPass()">Şİfremİ unuttum</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isBul\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_auth__["a" /* UserAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_ozgecmis_ser__["a" /* OzgecmisSer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzgecmisSer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OzgecmisSer = /** @class */ (function () {
    function OzgecmisSer(http, authService, toastCtrl, loadingCtrl, storage) {
        //console.log('Hello OzgecmisSer Provider');
        this.http = http;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        // url : string = 'http://127.0.0.1:8080/api/ozgecmis/';
        // url1 : string = 'http://127.0.0.1:8080/api/tools/avatar/';
        this.url = 'https://isgucvarisarayan.herokuapp.com/api/ozgecmis/';
        this.url1 = 'https://isgucvarisarayan.herokuapp.com/api/tools/avatar/';
        // this.ozgecmisId = "58eba2904be8d6e2c51b0757";
        //   this.storage.get('user').then((user) => {
        //   this.ozgecmisId = user.ozgecmis;
        //   this.getOzgecmis(user.ozgecmis);
        // });
    }
    OzgecmisSer.prototype.getOzgecmis = function (ozgecmisId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + ozgecmisId, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.ozgecmis = data;
                _this.storage.set('ozgecmis', data);
                //console.log(JSON.stringify(data)+"data123");
                resolve(data);
            }, function (err) {
                // reject(err);
                _this.presentToast('Özgeçmiş alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    OzgecmisSer.prototype.updateOzgecmis = function (paramname, kayit, ozgecmisUpd) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.put(_this.url + _this.authService.currentUser.ozgecmis + '/' + paramname, JSON.stringify(kayit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //console.log(JSON.stringify(res)+"avatarres");
                _this.authService.ozgecmis = res;
                _this.storage.set('ozgecmis', res);
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                //console.log(JSON.stringify(err)+"avatarerr");
                _this.loading.dismiss();
                _this.presentToast('Özgeçmiş güncellenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    OzgecmisSer.prototype.updateOzgecmisAll = function (kayit) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.put(_this.url + kayit._id, JSON.stringify(kayit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.authService.ozgecmis = res;
                _this.storage.set('ozgecmis', res);
                //console.log(JSON.stringify(res)+"updateall");
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                // reject(err);
                _this.loading.dismiss();
                _this.presentToast('Özgeçmiş güncellenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    OzgecmisSer.prototype.updateAvatar = function (resim) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.post(_this.url1, { "resim": resim }, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                // reject(err);
                _this.loading.dismiss();
                _this.presentToast('Resim yüklenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    OzgecmisSer.prototype.presentToast = function (mesaj) {
        var toast = this.toastCtrl.create({
            message: mesaj,
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    OzgecmisSer.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'İşlem yapılıyor...'
        });
        this.loading.present();
    };
    OzgecmisSer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__user_auth__["a" /* UserAuth */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], OzgecmisSer);
    return OzgecmisSer;
}());

//# sourceMappingURL=ozgecmis-ser.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map