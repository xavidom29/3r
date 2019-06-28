webpackJsonp([12],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardsPageModule = /** @class */ (function () {
    function CardsPageModule() {
    }
    CardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */]
            ]
        })
    ], CardsPageModule);
    return CardsPageModule;
}());

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
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


var CardsPage = /** @class */ (function () {
    function CardsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.step = 1;
        this.cardItems = [
            {
                user: {
                    avatar: 'assets/imagenes/icn_guia.png',
                    name: 'Guía del reciclaje'
                },
                content: 'Hay algo que todos tenemos en común:el aire que nos da la vida y, cada vez más, nos la quita 9 de cada 10 person…',
            },
            {
                user: {
                    avatar: 'assets/imagenes/inc_Poster.png',
                    name: 'Póster del reciclaje'
                },
                content: 'Descárgate el póster didáctico del reciclaje para poder colocarlo donde quieras y tener a la vista cómo separar…'
            },
            {
                user: {
                    avatar: 'assets/imagenes/img_icn.png',
                    name: '¿Qué podemos reciclar?'
                },
                content: 'Reciclar es darle una nueva vida a los envases, reduciendo el consumo de recursos y la degradación…'
            }
        ];
    }
    CardsPage.prototype.ngOnInit = function () {
        console.log(this.step);
    };
    CardsPage.prototype.consejos = function () {
        this.step = 2;
    };
    CardsPage.prototype.consejos2 = function () {
        this.step = 1;
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"C:\proyectos\projects\3rtest\myapp\src\pages\cards\cards.html"*/'<ion-header>\n  <ion-navbar>\n    <div>\n        <img src="../../assets/imagenes/icon/favicon.png" class="logo"  alt="">\n\n        <ion-title>Consejos <button *ngIf="step==2" slot="end" ion-button icon-end large clear  (click)="consejos2()" >\n            Atrás        \n          </button></ion-title>\n        \n    </div>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="step==1">\n    <div>\n      <img src="assets/imagenes/ilust_consejos.png" class="slide-image" />\n      <h2 class="slide-titlecons">Consejos de reciclaje </h2>\n      <p class="slide-text"> El reciclaje forma parte de nuestro día a día, forma parte ya del ADN de las presentes\n        generaciones; reciclamos en casa, en la oficina, en la calle...\n        Pero para que este proceso sea mucho más fácil, os damos una serie de recomendaciones:</p>\n    </div>\n    <a (click)="consejos()" >\n        <ion-card class="segunda">\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/imagenes/icn_guia.png">\n              </ion-avatar>\n              <h2>Guía del reciclaje</h2>\n            </ion-item>\n            <ion-card-content>\n              <p class="slide-text">Hay algo que todos tenemos en común:el aire que nos da la vida y, cada vez más, nos la\n                quita 9 de cada 10 person…</p>\n            </ion-card-content>\n          </ion-card>\n    </a>\n  \n    <a href="assets/imagenes/inc_Poster.png" download>\n      <ion-card>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imagenes/img_icn.png">\n          </ion-avatar>\n          <h2>Póster del reciclaje</h2>\n        </ion-item>\n        <ion-card-content>\n          <p class="slide-text">Descárgate el póster didáctico del reciclaje para poder colocarlo donde quieras y tener\n            a la vista cómo separar…</p>\n        </ion-card-content>\n      </ion-card>\n    </a>\n   \n  </div>\n\n\n  <div *ngIf="step==2">\n      <ion-card class="primera segunda">\n          <ion-card-content>\n              <h2 class=" textdetail">Envases de plástico</h2>\n              <p class="slide-text">Reducir su consumo, reutilizar y reciclar son las tres acciones básicas para reducir su\n                  impacto, ya que el plástico tarda alrededor de 700 años en degradarse. Por eso, es importante depositar en el\n                  contenedor amarillo las botellas de agua, de detergente, el bote de champú o las bolsas de patatas.</p>\n                  <img src="assets/imagenes/ilustracions/ilu_envases.png" class="slide-image2">\n\n                </ion-card-content>\n        </ion-card>\n        \n        <ion-card class="primera segunda">\n            <ion-card-content>\n                <h2 class=" textdetail2">Briks</h2>\n                <p class="slide-text">También podemos reciclar el brik de leche o de zumo depositándolos al contenedor amarillo y\n                    así conseguir darles una segunda vida.</p>\n                    <img src="assets/imagenes/ilustracions/ilus_brks.png" class="slide-image2">\n  \n                  </ion-card-content>\n          </ion-card>\n          <ion-card class="primera segunda">\n              <ion-card-content>\n                  <h2 class=" textdetail2">Latas</h2>\n                  <p class="slide-text">Este tipo de envase está siempre presente en nuestra cocina. ¿Quién no tiene una lata de\n                      refresco o de conservas en el frigorífico? Las latas están compuestas de aluminio y se pueden reciclar un número\n                      ilimitado de veces. ¡Al contenedor amarillo!</p>\n                      <img src="assets/imagenes/ilustracions/ilu_latas.png" class="slide-image2">\n    \n                    </ion-card-content>\n            </ion-card>\n            <ion-card class="primera segunda">\n                <ion-card-content>\n                    <h2 class=" textdetail3">Envases de papel y cartón </h2>\n                    <p class="slide-text">Revistas, periódicos viejos, caja de cereales, de zapatos... todos deben ir al contenedor azul\n                        para ser reciclados y ayudar a reducir la sobreexplotación de los recursos naturales.</p>\n                        <img src="assets/imagenes/ilustracions/ilu_papel.png" class="slide-image2">\n      \n                      </ion-card-content>\n              </ion-card>\n              <ion-card class="primera segunda">\n                  <ion-card-content>\n                      <h2 class=" textdetail2">Vidrio </h2>\n                      <p class="slide-text">Este material se puede volver a reutilizar mediante un proceso de lavado de desechos o a\n                          través de su fundición y puede ser reciclado al 100% una cantidad indefinida de veces. Para ello debemos\n                          separarlos del resto de materiales. ¡Al contenedor verde!</p>\n                          <img src="assets/imagenes/ilustracions/ilu_vidrio.png" class="slide-image2">\n        \n                        </ion-card-content>\n                </ion-card>\n                <ion-card class="primera segunda">\n                    <ion-card-content>\n                        <h2 class=" textdetail4">Pilas y baterías </h2>\n                        <p class="slide-text">Podemos encontrarlas a diario en el mando de la tele, el ratón del ordenador o en la\n                            maquinilla de afeitar y nunca debemos tirarlas a la basura con el resto de residuos. Tienen componentes altamente\n                            contaminantes, por lo que es muy importante llevarlas a los contenedores de residuos peligrosos que tengamos más\n                            cerca de casa o al punto limpio</p>\n                            <img src="assets/imagenes/ilustracions/ilu_pilas.png" class="slide-image2">\n          \n                          </ion-card-content>\n                  </ion-card>\n                  <ion-card class="primera segunda">\n                      <ion-card-content>\n                          <h2 class=" textdetail2">Otros </h2>\n                          <p class="slide-text">Electrodomésticos, aparatos electrónicos, bombillas, aceites usados… también se puede reciclar\n                              en los puntos limpios.</p>\n                              <img src="assets/imagenes/ilustracions/ilu_otros.png" class="slide-image2">\n            \n                            </ion-card-content>\n                    </ion-card>\n    \n \n\n    \n    \n    \n \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\proyectos\projects\3rtest\myapp\src\pages\cards\cards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ })

});
//# sourceMappingURL=12.js.map