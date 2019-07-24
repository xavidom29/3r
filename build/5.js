webpackJsonp([5],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.step = 1;
    }
    SettingsPage.prototype.ngOnInit = function () {
        console.log(this.step);
    };
    SettingsPage.prototype.send = function () {
        this.step = 2;
    };
    SettingsPage.prototype.consejos2 = function () {
        this.step = 1;
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Xavi\Desktop\3rProject\myApp\src\pages\settings\settings.html"*/'<ion-header>\n \n\n    <ion-navbar>\n      \n      <img src="../../assets/imagenes/icon/favicon.png"  class="logo" alt="">\n      <ion-title>Puntos Limpios</ion-title>\n\n    \n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n\n\n      <div *ngIf="step==1" >\n          <img src="assets/imagenes/ilust_puntos limpios.png"  class="slide-image"/>\n          <h2 class="slide-titlepun">Puntos limpios</h2>\n          <p class="slide-text"> Los puntos verdes sirven para deshacernos de los residuos que no podemos\n             tirar en los contenedores que encontramos en la calle. Utilizando los puntos limpios \n            contribuimos a mejorar el proceso de reciclaje y ayudamos a preservar el medio ambiente.\n              Busca los puntos limpios más cercano a tu hogar.</p>\n          <button   id="boton12"  (click)="send()" >\n            Entrar\n          </button>\n       </div>\n\n       <div *ngIf="step==2" >\n          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d20726.247565479724!2d2.1749854818114875!3d41.39003424519833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spuntos+limpios!5e0!3m2!1ses!2ses!4v1561042073371!5m2!1ses!2ses" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>        \n          \n        </div>\n<div *ngIf="step==2">\n    <ion-card>        \n        <ion-card-content>\n            <p class="slide-text"> <ion-icon name="arrow-forward"></ion-icon> \n               Punto Verde 500m</p>\n          </ion-card-content>\n      </ion-card>\n      \n    <ion-card>        \n        <ion-card-content>\n            <p class="slide-text"> <ion-icon name="arrow-forward"></ion-icon> \n               Punto Verde  500m</p>\n          </ion-card-content>\n      </ion-card>\n      \n    <ion-card>        \n        <ion-card-content>\n          \n          <p class="slide-text"> <ion-icon name="arrow-forward"></ion-icon> \n             Punto Verde  500m</p>\n           </ion-card-content>\n      </ion-card>\n      <button ion-button icon-end large clear id="boton12"  (click)="consejos2()" >\n          Atrás\n        </button>\n</div>\n       \n          \n          \n\n  </ion-content>'/*ion-inline-end:"C:\Users\Xavi\Desktop\3rProject\myApp\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map