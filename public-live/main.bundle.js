webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_user_component__ = __webpack_require__("./src/app/components/profile/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_video_video_component__ = __webpack_require__("./src/app/components/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_video_search_video_search_component__ = __webpack_require__("./src/app/components/video-search/video-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_file_upload_file_upload_component__ = __webpack_require__("./src/app/components/file-upload/file-upload.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__components_profile_user_component__["a" /* UserComponent */] },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_4__components_video_video_component__["a" /* VideoComponent */] },
    { path: 'videoSearch', component: __WEBPACK_IMPORTED_MODULE_5__components_video_search_video_search_component__["a" /* VideoSearchComponent */] },
    { path: 'videoUpload', component: __WEBPACK_IMPORTED_MODULE_7__components_file_upload_file_upload_component__["a" /* FileUploadComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_smart_contract_service__ = __webpack_require__("./src/app/services/smart-contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_user_component__ = __webpack_require__("./src/app/components/profile/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_user_profile_user_profile_component__ = __webpack_require__("./src/app/components/profile/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_slider_slider_component__ = __webpack_require__("./src/app/components/home/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_video_video_component__ = __webpack_require__("./src/app/components/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_video_search_video_search_component__ = __webpack_require__("./src/app/components/video-search/video-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_video_list_video_list_component__ = __webpack_require__("./src/app/components/home/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_file_upload_file_upload_component__ = __webpack_require__("./src/app/components/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__custompipes_truncate_ethereum_address_pipe__ = __webpack_require__("./src/app/custompipes/truncate-ethereum-address.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { AngularFireDatabaseModule } from 'angularfire2/database';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_home_slider_slider_component__["a" /* SliderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_video_video_component__["a" /* VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_video_search_video_search_component__["a" /* VideoSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_home_video_list_video_list_component__["a" /* VideoListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_file_upload_file_upload_component__["a" /* FileUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_21__custompipes_truncate_ethereum_address_pipe__["a" /* TruncateEthereumAddressPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_smart_contract_service__["a" /* SmartContractService */],
                __WEBPACK_IMPORTED_MODULE_7__services_firebase_service__["a" /* FirebaseService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"uploadProgress\" style=\"width:100%; text-align: center\">\n      <p style=\"width:100%;\"> video upload progress {{ uploadProgress | async | number : '1.0-2' }} % </p>\n      <div class=\"progress\" style=\"width:100%;\">\n        <div class=\"determinate\" [style.width]=\"(uploadProgress | async) + '%'\"></div>\n      </div>\n    </div>\n    <div class=\"col s12\" id=\"setDealStepOne\">\n      <p class=\"center grey-text\"> 1 - {{ totalStes }}</p>\n      <h6 class=\"center\">1. Select a file to upload:</h6>\n      <div class=\"setDealSection\">\n        <ul class=\"collection\">\n          <li class=\"collection-item center\">\n            <label for=\"assetFileUpload\">\n              <i class=\"material-icons\">\n                cloud_upload\n              </i>\n            </label>\n            <input type=\"file\" (change)=\"(upload($event))\" id=\"assetFileUpload\" hidden />\n          </li>\n          <li class=\"collection-item\" *ngIf=\"uploadState | async; let state\">\n            <button type=\"button\" class=\"btn\" (click)=\"task.pause()\" [disabled]=\"state === 'paused'\">\n              <i class=\"material-icons\">\n                pause\n              </i>\n            </button>\n            <!-- <button type=\"button\" class=\"btn red\" (click)=\"task.cancel()\" [disabled]=\"state === 'running'\">\n                            <i class=\"material-icons\">\n                                close\n                            </i>\n                        </button> -->\n            <button type=\"button\" class=\"btn blue\" (click)=\"task.resume()\" [disabled]=\"state === 'running'\">\n              <i class=\"material-icons\">\n                play_circle_filled\n              </i>\n            </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n\n    <div class=\"col s12 hide\" id=\"setDealStepTwo\">\n      <p class=\"center grey-text\"> 2 - {{ totalStes }}</p>\n      <h6 class=\"center\">2. Select the user you'll make the deal with </h6>\n      <div class=\"setDealSection center\">\n        <form (ngSubmit)=\"findUserByAddress()\" id=\"serchUserByIdForm\">\n          <div class=\"input-field\">\n            <input id=\"userToDealWithEmail\" type=\"text\" class=\"validate\" name=\"userToDealWithEmail\" [(ngModel)]=\"userToDealWithEmail\">\n            <label for=\"userToDealWithEmail\">User email address</label>\n          </div>\n          <button type=\"submit\" class=\"btn\">\n            <i class=\"material-icons right\">send</i> send\n          </button>\n        </form>\n\n        <div *ngIf=\"userTodealWith\">\n          <div *ngIf=\"userTodealWith.length > 0 ; else noUserFound\">\n            <div class=\"row\">\n              <div class=\"col s12\">\n                <ul class=\"collection\" *ngFor=\"let userDeal of userTodealWith\">\n                  <li class=\"collection-item avatar\" (click)=\"selectUserToDealWith(userDeal)\">\n                    <img [src]=\"userDeal.profilePicture\" alt=\"\" class=\"circle\">\n                    <span class=\"title\">{{ userDeal.name }} {{ userDeal.lastname }} </span>\n                    <p class=\"truncate\"> {{ userDeal.address | truncateEthereumAddress }} </p>\n                    <p> {{userDeal.email}}</p>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <ng-template #noUserFound>\n            <h6>No user was found</h6>\n          </ng-template>\n          <button class=\"btn-floating btn-large waves-effect waves-light red\" (click)=\"resetForm()\">\n            <i class=\"material-icons\">close</i>\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s12  hide\" id=\"setDealStepThree\">\n      <p class=\"center grey-text\"> 3 - {{ totalStes }}</p>\n      <h6 class=\"center\">3. finalize the agreement </h6>\n      <br>\n\n      <div class=\"row\">\n        <!-- expert Section -->\n        <div class=\"col s6 center\">\n          <div *ngIf=\"currentUserInfo\">\n            <div *ngFor=\"let info of currentUserInfo\">\n              <img [src]=\"info.profilePicture\" alt=\"\" class=\"circle responsive-img\" width=\"250\">\n              <p class=\"center truncate\"> {{ info.name }} {{ info.lastname }} </p>\n              <p class=\"center truncate\"> {{ info.email}}</p>\n              <div class=\"input-field center\">\n                <input id=\"expertPercentage\" type=\"number\" class=\"validate\" name=\"expertPercentage\" [(ngModel)]=\"expertPercentage\">\n                <label for=\"expertPercentage\"> percentage</label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- User Section -->\n        <div class=\"col s6 center\">\n          <div *ngIf=\"userToDealStep3\">\n            <img [src]=\"userToDealStep3.profilePicture\" alt=\"\" class=\"circle responsive-img\" width=\"250\">\n            <p class=\"center truncate\"> {{ userToDealStep3.name }} {{ userToDealStep3.lastname }} </p>\n            <p class=\"center truncate\"> {{ userToDealStep3.email}}</p>\n            <div class=\"input-field center\">\n              <input id=\"userPercentage\" type=\"number\" class=\"validate\" name=\"userPercentage\" [(ngModel)]=\"userPercentage\">\n              <label for=\"userPercentage\"> percentage</label>\n            </div>\n          </div>\n        </div>\n        <!--Time to make a real deal son-->\n        <div class=\"col s12 m6 offset-m3 center\">\n          <form (ngSubmit)=\"sendAssetToDB()\">\n            <div class=\"input-field\">\n              <textarea id=\"assetTitle\" class=\"materialize-textarea\" [(ngModel)]=\"asset.title\" name=\"title\"></textarea>\n              <label for=\"assetTitle\">Title</label>\n            </div>\n\n            <div class=\"input-field\">\n              <textarea id=\"assetDescription\" class=\"materialize-textarea\" [(ngModel)]=\"asset.assetDescription\" name=\"description\"></textarea>\n              <label for=\"assetDescription\">Description</label>\n            </div>\n            <div class=\"input-field\">\n              <input id=\"assetPrice\" type=\"number\" class=\"validate\" [(ngModel)]=\"asset.price\" name=\"price\">\n              <label for=\"assetPrice\"> Price</label>\n            </div>\n            <div class=\"input-field\">\n              <select [(ngModel)]=\"asset.currency\" name=\"currency\">\n                <option value=\"no-currency-selected\" disabled selected>Select currency</option>\n                <option value=\"eth\">eth</option>\n                <option value=\"wei\">wei</option>\n              </select>\n            </div>\n            <button type=\"submit\" [disabled]=\"!finalizeDeal\" class=\"btn\">Make the deal</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_smart_contract_service__ = __webpack_require__("./src/app/services/smart-contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





////Servicios


var sha256 = __webpack_require__("./node_modules/js-sha256/src/sha256.js").sha256;
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(router, afStorage, fireService, contractServices) {
        this.router = router;
        this.afStorage = afStorage;
        this.fireService = fireService;
        this.contractServices = contractServices;
        this.totalStes = 3;
        this.finalizeDeal = false;
        this.currentUserAccountAddress = "Not reachable";
        this.asset = {
            assetURL: '',
            assetSha256Hash: '',
            expertAddress: '',
            expertPercentage: null,
            userAddress: '',
            userPercentage: null,
            price: null,
            currency: '',
            assetDescription: '',
            title: '',
            documentType: '',
            assetUploaderPicture: ''
        };
        this.createdAsset = {
            title: '',
            assetSha256Hash: '',
            expertAddress: '',
            userAddress: '',
            dateCreated: null
        };
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        var selectInputOptions = {};
        var selectInputElems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(selectInputElems, selectInputOptions);
    };
    FileUploadComponent.prototype.upload = function (event) {
        var _this = this;
        this.fileTimeStamp = new Date().getTime().toString();
        this.fileNameId = "assets/" + this.fileTimeStamp + "_" + event.target.files[0].name;
        this.fileExtension = this.fileNameId.split('.').pop();
        this.ref = this.afStorage.ref(this.fileNameId);
        this.task = this.ref.put(event.target.files[0]);
        this.videoHashsha256 = sha256(this.fileNameId);
        //Para el porcentaje del progreso del upload
        this.uploadProgress = this.task.percentageChanges();
        this.task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* finalize */])(function () {
            var fileNameIdToDownload = _this.afStorage.ref("assets/" + _this.fileTimeStamp + "_" + event.target.files[0].name);
            fileNameIdToDownload.getDownloadURL().subscribe(function (url) {
                _this.downloadURL = url;
            });
            _this.finalizeDeal = true;
        })).subscribe();
        this.showAgreementSection();
        ///UploadState
        this.uploadState = this.task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (s) { return s.state; }));
    };
    //////This functions hides the loading section and shows the section where two people agree in a deal
    FileUploadComponent.prototype.showAgreementSection = function () {
        var sectionOne = document.getElementById('setDealStepOne');
        sectionOne.classList.add('hide');
        var sectionTow = document.getElementById("setDealStepTwo");
        sectionTow.classList.remove('hide');
    };
    FileUploadComponent.prototype.findUserByAddress = function () {
        var _this = this;
        ///******************************/
        ///Firebase
        if (this.userToDealWithEmail) {
            this.fireService.getSpecificUser(this.userToDealWithEmail).subscribe(function (data) {
                _this.userTodealWith = data;
            });
            document.getElementById('serchUserByIdForm').classList.add('scale-out');
            document.getElementById('serchUserByIdForm').classList.add('hide');
        }
        else {
            M.toast({ html: 'The field is empty!' });
        }
    };
    FileUploadComponent.prototype.resetForm = function () {
        var serchUserByIdForm = document.getElementById("serchUserByIdForm");
        serchUserByIdForm.reset();
        this.userToDealWithEmail = "";
        this.userTodealWith = null;
        document.getElementById('serchUserByIdForm').classList.remove('hide');
    };
    FileUploadComponent.prototype.selectUserToDealWith = function (userToDealStep3) {
        var _this = this;
        document.getElementById('setDealStepTwo').classList.add('hide');
        document.getElementById('setDealStepThree').classList.remove('hide');
        ///get The current user Data
        ///******************************/
        ///Firebase
        this.contractServices.getUserAccount()
            .then(function (account) {
            _this.currentUserAccountAddress = account;
            ///******************************/
            ///Firebase
            _this.fireService.getUserAddress(account);
            _this.fireService.getUserInfo().subscribe(function (queriedItems) {
                _this.currentUserInfo = queriedItems;
                queriedItems.forEach(function (data) {
                    // console.log(data['profilePicture'])
                    _this.uploaderImageLink = data['profilePicture'];
                });
            });
        });
        this.userToDealWithAddress = userToDealStep3['address'];
        this.userToDealStep3 = userToDealStep3;
    };
    FileUploadComponent.prototype.sendAssetToDB = function () {
        //////  Assets section in dataBase
        this.asset.assetURL = this.downloadURL;
        this.asset.assetSha256Hash = this.videoHashsha256;
        this.asset.expertAddress = this.currentUserAccountAddress;
        this.asset.userAddress = this.userToDealWithAddress;
        this.asset.userPercentage = this.userPercentage;
        this.asset.expertPercentage = this.expertPercentage;
        this.asset.documentType = this.fileExtension;
        this.asset.assetUploaderPicture = this.uploaderImageLink;
        //////crear registro de asset
        this.createdAsset.title = this.asset.title;
        this.createdAsset.assetSha256Hash = this.videoHashsha256;
        this.createdAsset.expertAddress = this.currentUserAccountAddress;
        this.createdAsset.userAddress = this.userToDealWithAddress;
        this.createdAsset.dateCreated = this.fileTimeStamp;
        if (this.asset.price == null) {
            M.toast({ html: "Please assign a price to the content" });
        }
        else if (this.asset.expertPercentage == undefined || this.asset.userPercentage == undefined) {
            M.toast({ html: "Please assign a percentage" });
        }
        else if (this.asset.currency == null) {
            M.toast({ html: "Please select a currency" });
        }
        else {
            this.contractServices.setDeal(this.asset, this.createdAsset);
        }
    };
    FileUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-file-upload',
            template: __webpack_require__("./src/app/components/file-upload/file-upload.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_5__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_6__services_smart_contract_service__["a" /* SmartContractService */]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\n<app-video-list></app-video-list>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_smart_contract_service__ = __webpack_require__("./src/app/services/smart-contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(contractOne) {
        this.contractOne = contractOne;
        this.searching = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_smart_contract_service__["a" /* SmartContractService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\n    <ul class=\"slides\">\n      <li>\n        <img src=\"./assets/images/user-cover.jpeg\">\n        <div class=\"caption center-align\">\n          <h3>Do you have a question no one can Answer?</h3>\n          <h5 class=\"light grey-text text-lighten-3\">Here you'll find an expert</h5>\n        </div>\n      </li>\n      <li>\n        <img src=\"./assets/images/expert-cover.jpeg\">\n        <div class=\"caption right-align \">\n          <h3>Do you have great knowlege of a certain topic?</h3>\n          <h5 class=\"light grey-text text-lighten-3\">Help others and make good money out of it.</h5>\n        </div>\n      </li>\n      <li>\n        <img src=\"./assets/images/designer-cover.jpeg\">\n        <div class=\"caption left-align\">\n          <h3>Great skills at content design?</h3>\n          <h5 class=\"light grey-text text-lighten-3\">Help our experts improve their videos and content.</h5>\n        </div>\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
        var sliderOptions = new Object();
        var sliderElems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(sliderElems, sliderOptions);
    };
    SliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-slider',
            template: __webpack_require__("./src/app/components/home/slider/slider.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/video-list/video-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"assetsListShowCase; else noContentWasFound\">\n  <div class=\"row\">\n    <div class=\"col s12 m6 l4\" *ngFor=\"let asset of assetsListShowCase\">\n\n      <div class=\"card round-corner-20px hoverable\">\n        <div class=\"card-image\" *ngIf=\"asset.documentType == 'mp4'\">\n          <video class=\"responsive-video round-corner-top-20px\" width=\"320\" height=\"240\">\n            <source [src]=\"asset.assetURL\" type=\"video/mp4\">\n          </video>\n        </div>\n        <div class=\"card-image\" *ngIf=\"asset.documentType == 'png' || asset.documentType == 'jpg' || asset.documentType == 'jpeg'\">\n          <img [src]=\"asset.assetURL\" alt=\"asset.assetDescription\" class=\"round-corner-top-20px\">\n        </div>\n        <div class=\"card-content round-corner-20px\">\n          <span class=\"card-title activator grey-text\">\n            {{ asset.title }}\n            <a href=\"#modalVideoDescription\" class=\" modal-trigger\" (click)=\"selectAssetToView(asset.assetSha256Hash)\">\n              <i class=\"material-icons right\">info</i>\n            </a>\n          </span>\n          <p> {{ asset.assetDescription }}</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<ng-template #noContentWasFound>\n  <div class=\"container\">\n    <div class=\"row\">\n      <h6>...loading</h6>\n    </div>\n  </div>\n</ng-template>\n\n\n<div id=\"modalVideoDescription\" class=\"modal transparent full-width\" >\n  <div class=\"row\" *ngIf=\"assetsSelectedToView\">\n    <div class=\"col s12 m6\">\n      <div class=\"modal-content teal white-text\" style=\"height:80vh;\">\n        <video class=\"responsive-video\" controls id=\"previewVideo\">\n          <source [src]=\"assetsSelectedToView.assetURL\" type=\"video/mp4\" *ngIf=\"assetsSelectedToView.documentType == 'mp4'\">\n        </video>\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <img [src]=\"assetsSelectedToView.assetUploaderPicture\" class=\"circle responsive-img\" width=\"70\">\n          </div>\n\n          <!-- <div class=\"col s12 \">\n            <h4>Solutions</h4>\n            <p>¿Qué es blockchain para dummies? </p>\n            <p>¿Qué es un ledger? </p>\n            <p>¿Cómo puedo asesgurar mis datos?</p>\n            <p>¿Qué es un contrato inteligente?</p>\n          </div> -->\n\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s12 m6 valign-wrapper \" style=\"height:80vh; display: flex; justify-content: center; align-items: middle; flex-direction: column;\">\n      <h2 class=\"white-text\"> {{ assetsSelectedToView.price }} {{  assetsSelectedToView.currency  }}  </h2>\n      \n      <br>\n      \n      <button class=\"btn modal-close\" (click)=\"BuyVideo(assetsSelectedToView.assetSha256Hash);\"> Buy</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/video-list/video-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_smart_contract_service__ = __webpack_require__("./src/app/services/smart-contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoListComponent = /** @class */ (function () {
    function VideoListComponent(router, fireStore, contractServices) {
        var _this = this;
        this.router = router;
        this.fireStore = fireStore;
        this.contractServices = contractServices;
        this.VideoPriceToSell = 0.04;
        this.showDescription = false;
        this.acquiredAssets = {
            assetSha256Hash: '',
            buyerAddress: '',
            dateAcquired: ''
        };
        ///******************************/
        ///Solidity
        if (this.contractServices.cryptoUser != false) {
            this.contractServices.getUserAccount()
                .then(function (account) {
                _this.userAccountAddress = account;
            });
        }
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fireStore.getContent().subscribe(function (data) {
            _this.assetsListShowCase = data;
        });
        var modalOption = new Object();
        var modalElems = document.querySelectorAll('.modal');
        this.modalInstances = M.Modal.init(modalElems, modalOption);
        this.modalInstanceEdit = M.Modal.getInstance(modalElems);
    };
    VideoListComponent.prototype.selectAssetToView = function (sha256Hash) {
        var _this = this;
        this.assetsSelectedToView = '';
        this.fireStore.findAsset(sha256Hash).subscribe(function (data) {
            data.forEach(function (data1) {
                _this.assetsSelectedToView = data1;
            });
        });
        //////***************************** */
        ////// Open a modal with information 
        //////***************************** */
        var modalViewContentSelectedElement = document.querySelector('#modalVideoDescription');
        var instance = M.Modal.getInstance(modalViewContentSelectedElement);
        instance.open();
        //////***************************** */
        ///// disable the video at 11th second
        //////***************************** */
        setTimeout(function () {
            var previewVideo = document.getElementById('previewVideo');
            previewVideo.onplay = function () {
                setTimeout(function () {
                    previewVideo.pause();
                    previewVideo.currentTime = 0;
                    previewVideo.load();
                }, 11000);
            };
        }, 1000);
    };
    VideoListComponent.prototype.BuyVideo = function (acquiredAssetSha256Hash) {
        var currentDate = new Date().getTime().toString();
        this.acquiredAssets.assetSha256Hash = acquiredAssetSha256Hash;
        this.acquiredAssets.buyerAddress = this.userAccountAddress;
        this.acquiredAssets.dateAcquired = currentDate;
        this.contractServices.setSale(this.acquiredAssets);
        this.fireStore.registerNewSell(this.acquiredAssets);
    };
    VideoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video-list',
            template: __webpack_require__("./src/app/components/home/video-list/video-list.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_3__services_smart_contract_service__["a" /* SmartContractService */]])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <nav>\n    <div class=\"nav-wrapper teal\">\n      <a href=\"#!\" class=\"brand-logo\"> Consultacy </a>\n      <a class=\"right pr-2 pl-2 pointer\" (click)=\"showSearchInput()\">\n        <i class=\"material-icons\">search</i>\n      </a>\n      <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\">\n        <i class=\"material-icons\">menu</i>\n      </a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li>\n          <a *ngIf=\"showRegisterForm; else noRegisteredUserNavbar\"\n          class=\"waves-effect waves-light sidenav-close\" \n          routerLink=\"/user\">My profile</a>\n          <ng-template #noRegisteredUserNavbar>\n            <a class=\"waves-effect waves-light sidenav-close\" routerLink=\"/register\">Registrarse</a>\n          </ng-template>\n          <a class=\"waves-effect waves-light sidenav-close\" routerLink=\"/\">Home</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n\n<div *ngIf=\"searching\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 input-field\">\n        <form (ngSubmit)=\"onSubmitSearchImages()\">\n          <i class=\"material-icons prefix\">search</i>\n          <input type=\"text\" class=\"validate\">\n          <label for=\"search-input\">Search</label>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- MENU EN VISTA MOVIL -->\n\n<ul class=\"sidenav\" id=\"mobile-demo\">\n  <li *ngIf=\"showRegisterForm\">\n    <div class=\"user-view\" *ngFor=\"let user of userInfo\">\n      <div class=\"background\">\n        <img [src]=\"user.coverPicture\">\n      </div>\n      <a  routerLink=\"/user\" class=\"sidenav-close\">\n        <img class=\"circle\" [src]=\"user.profilePicture\">\n      </a>\n      <a>\n        <span class=\"white-text truncate\"> {{ user.name }} {{ user.lastname }} </span>\n      </a>\n      <a>\n        <span class=\"white-text truncate\"> {{ user.email }} </span>\n      </a>\n    </div>\n  </li>\n  <li>\n    <a class=\"waves-effect waves-light sidenav-close\" routerLink=\"/\">Home</a>\n  </li>\n  <li>\n    <div class=\"divider\"></div>\n  </li>\n  <li *ngIf=\"showRegisterForm; else noRegisteredUserNavbar\">\n    <a class=\"waves-effect waves-light sidenav-close\" routerLink=\"/user\">My profile</a>\n  </li>\n  <ng-template #noRegisteredUserNavbar>\n    <li>\n      <a class=\"waves-effect waves-light sidenav-close\" routerLink=\"/register\">Registrarse</a>\n    </li>\n  </ng-template>\n  <li>\n    <div class=\"divider\"></div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_smart_contract_service__ = __webpack_require__("./src/app/services/smart-contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, contractServices, fireService) {
        this.router = router;
        this.contractServices = contractServices;
        this.fireService = fireService;
        this.userAccountAddress = "Not reachable";
        this.showRegisterForm = false;
        this.userIsSet = false;
        this.userNickname = '';
        this.searching = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        ///******************************/
        ///Solidity
        if (this.contractServices.cryptoUser != false) {
            this.contractServices.getUserAccount()
                .then(function (account) {
                _this.userAccountAddress = account;
                ///******************************/
                ///Firebase
                _this.fireService.getUserAddress(account);
                _this.fireService.getUserInfo().subscribe(function (queriedItems) {
                    _this.userInfo = queriedItems;
                    queriedItems.forEach(function (info) {
                        if (info['address']) {
                            // this.userAccountAddress = false;
                            _this.showRegisterForm = true;
                        }
                    });
                });
            });
        }
        // if (this.contractServices.cryptoUser != false) {
        //       ///******************************/
        //       ///Solidity
        //       this.contractServices.getUserAccount()
        //         .then(account => {
        //           this.userAccountAddress = account;
        //           ///******************************/
        //           ///Firebase
        //           this.fireService.getUserAddress(account)
        //           let alreadyReegistered
        //         });
        // }
        ///******************************/
        ///Inicializaciones para materialize
        var modalOptions = new Object();
        var modalElems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(modalElems, modalOptions);
        var sideNavOptions = new Object();
        var sidenavElems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(sidenavElems, sideNavOptions);
        var selectElemsOptions = new Object();
        var selectElems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(selectElems, selectElemsOptions);
    };
    // Utilizar el nombre del usuario para la vsita
    NavbarComponent.prototype.setNickname = function () {
        if (this.userNickname.length < 2) {
            M.toast({ html: 'Please fill out the form!' });
        }
    };
    // Mostrar input para realizar busqueda
    NavbarComponent.prototype.showSearchInput = function () {
        if (this.searching == true) {
            this.searching = false;
        }
        else {
            this.searching = true;
        }
    };
    // realizar busqueda de topic seleccionado
    NavbarComponent.prototype.onSubmitSearchImages = function () {
        this.router.navigate(['/videoSearch']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_smart_contract_service__["a" /* SmartContractService */], __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Cover Image selected by the user  -->\n<div class=\"parallax-container\">\n  <div class=\"parallax\">\n    <!-- <img [src]=\"userPic.coverPicture\"> -->\n      \n      <img alt=\"\" id=\"parallaxUserCover\">\n  </div>\n</div>\n\n<!-- User Information -->\n<div *ngIf=\"userInfo\">\n  <div class=\"container up-480\" *ngFor=\"let user of userInfo\">\n    <div class=\"row\">\n\n\n      <div class=\"col s6 offset-s3 m3 offset-m9 l2 offset-l10 indigo user-tag\" *ngIf=\"user.role == 0\" style=\"text-align: center\">\n        <span class=\"white-text valign-wrapper\" style=\"font-size: 25px\">\n          <i class=\"material-icons\" style=\"font-size: 30px\">show_chart</i>\n          <span class=\"\"> User</span>\n        </span>\n      </div>\n\n      <div class=\"col s6 offset-s3 m3 offset-m9 l2 offset-l10 blue-grey darken-4 user-tag\" *ngIf=\"user.role == 1\" style=\"text-align: center\">\n        <span class=\"white-text valign-wrapper\" style=\"font-size: 25px\">\n          <i class=\"material-icons\" style=\"font-size: 30px\">stars</i>\n          <span class=\"\"> Expert</span>\n        </span>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col s12 m6 center\">\n        <!-- <img src=\"./assets/images/user-photo.jpg\" alt=\"\" class=\"circle\" width=\"250\"> -->\n        <img [src]=\"user.profilePicture\" alt=\"\" class=\"circle\" width=\"250\">\n      </div>\n      <div class=\"col s12 m6\">\n        <div class=\"card\">\n          <ul class=\"collection\">\n            <li class=\"collection-item avatar\">\n              <i class=\"material-icons circle\">person</i>\n              <span class=\"title\">Name</span>\n              <p class=\"truncate\"> {{ user.name }} {{ user.lastname }} </p>\n              <a href=\"#!\" class=\"secondary-content\">\n                <i class=\"material-icons\">grade</i>\n              </a>\n            </li>\n            <li class=\"collection-item avatar\">\n              <i class=\"material-icons circle green\">email</i>\n              <span class=\"title\">Name</span>\n              <p class=\"truncate\"> {{ user.email }} </p>\n              <a href=\"#!\" class=\"secondary-content\">\n                <i class=\"material-icons\">grade</i>\n              </a>\n            </li>\n            <li class=\"collection-item avatar\">\n              <i class=\"material-icons circle red\">cloud_upload</i>\n              <a routerLink=\"/videoUpload\">\n                <span class=\"title\">Upload a video</span>\n              </a>\n\n              <a href=\"#!\" class=\"secondary-content\">\n                <i class=\"material-icons\">grade</i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_smart_contract_service__ = __webpack_require__("./src/app/services/smart-contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, contractServices, fireService) {
        this.router = router;
        this.contractServices = contractServices;
        this.fireService = fireService;
        this.userAccountAddress = "Not reachable";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var parallaxUserCover = document.getElementById('parallaxUserCover');
        ///******************************/
        ///Solidity
        if (this.contractServices.cryptoUser != false) {
            this.contractServices.getUserAccount()
                .then(function (account) {
                _this.userAccountAddress = account;
                ///******************************/
                ///Firebase
                _this.fireService.getUserAddress(account);
                _this.fireService.getUserInfo().subscribe(function (queriedItems) {
                    _this.userInfo = queriedItems;
                    ///Acá se recupera la imagen de cover que haya puesto el usuario
                    queriedItems.forEach(function (item) {
                        if (item['coverPicture']) {
                            parallaxUserCover.src = item['coverPicture'];
                        }
                    });
                    //console.log(this.userInfo)
                });
            });
        }
        ///******************************/
        ///Inicializaciones para materialize
        var parallaxOptions = new Object();
        var parallaxElems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(parallaxElems, parallaxOptions);
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/components/profile/user-profile/user-profile.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_smart_contract_service__["a" /* SmartContractService */], __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/user.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-user-profile></app-user-profile>"

/***/ }),

/***/ "./src/app/components/profile/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/components/profile/user.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-3\">\n      <form (ngSubmit)=\"sendRegistrationData()\">\n\n          <span>You're registering with address\n            <br> {{ userAccountAddress }} </span> <br>\n          <div class=\"input-field col s12\">\n            <select class=\"icons\" name=\"role\" [(ngModel)]=\"userInfo.role\" required>\n              <option value=\"no-selection\" disabled selected>Choose your role</option>\n              <option value=\"0\" data-icon=\"./assets/images/user-cover.jpeg\" class=\"left\">User</option>\n              <option value=\"1\" data-icon=\"./assets/images/expert-cover.jpeg\" class=\"left\">Expert</option>\n            </select>\n            <label>What's your role</label>\n          </div>\n          \n          \n          <input type=\"hidden\" id=\"userEthereumAdddess\" [(ngModel)]=\"userInfo.address\" name=\"address\" [value]=\"userAccountAddress\" required>\n          \n          \n          <div class=\"input-field col s12\">\n            <input id=\"Nombre\" type=\"text\" class=\"validate\" name=\"nombre\" [(ngModel)]=\"userInfo.name\" required>\n            <label for=\"Nombre\">Nombre</label>\n          </div>\n          <div class=\"input-field col s12\">\n            <input id=\"Apellido\" type=\"text\" class=\"validate\" name=\"apellido\" [(ngModel)]=\"userInfo.lastname\" required>\n            <label for=\"Apellido\">Apellido</label>\n          </div>    \n          <div class=\"input-field col s12\">\n            <input id=\"email\" type=\"text\" class=\"validate\" name=\"email\" [(ngModel)]=\"userInfo.email\" required>\n            <label for=\"email\">Correo Electronico</label>\n          </div>    \n      \n          <div class=\"input-field col s12 center\" *ngIf=\"registerUser; else noRegistratioAvailabe\">\n            <button type=\"submit\" class=\"modal-close waves-effect waves-green btn teal darken-1\">Register</button>\n          </div>\n\n          <ng-template #noRegistratioAvailabe>\n              <div class=\"input-field col s12 center\">\n                <button type=\"button\" class=\"modal-close waves-effect waves-green btn teal darken-1\">Register</button>\n              </div>\n          </ng-template>\n      \n          \n        </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_smart_contract_service__ = __webpack_require__("./src/app/services/smart-contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(contractServices, router, fireService) {
        this.contractServices = contractServices;
        this.router = router;
        this.fireService = fireService;
        this.registerUser = true;
        this.userAccountAddress = "Account Address Not reachable";
        this.userInfo = {
            id: '',
            name: '',
            lastname: '',
            role: null,
            address: '',
            email: '',
            profilePicture: 'https://firebasestorage.googleapis.com/v0/b/mockups-e88f2.appspot.com/o/userProfilePics%2Fuser-icon.png?alt=media&token=350ccfd0-313a-4ae3-9d24-4dcbe2dd1a6d',
            coverPicture: 'https://firebasestorage.googleapis.com/v0/b/mockups-e88f2.appspot.com/o/coverPics%2Fcover.jpg?alt=media&token=9b19a152-3e1d-483c-8137-c55bfc3eb51e',
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.contractServices.cryptoUser != false) {
            this.contractServices.getUserAccount()
                .then(function (account) {
                ///******************************/
                ///Solidity
                _this.userAccountAddress = account;
                _this.userInfo.address = account;
                ///******************************/
                ///Firebase
                _this.fireService.getUserAddress(account);
                _this.fireService.getUserInfo().subscribe(function (data) {
                    data.forEach(function (info) {
                        if (info['address']) {
                            _this.registerUser = false;
                            _this.router.navigate(['/']);
                        }
                    });
                });
            });
        }
        var selectElemsOption = new Object();
        var selectElems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(selectElems, selectElemsOption);
    };
    RegisterComponent.prototype.sendRegistrationData = function () {
        /////Registro en ethereum
        this.contractServices.setUser(this.userInfo);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_smart_contract_service__["a" /* SmartContractService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/video-search/video-search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  video-search works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/video-search/video-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoSearchComponent = /** @class */ (function () {
    function VideoSearchComponent() {
    }
    VideoSearchComponent.prototype.ngOnInit = function () {
    };
    VideoSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video-search',
            template: __webpack_require__("./src/app/components/video-search/video-search.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], VideoSearchComponent);
    return VideoSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ***************************************** -->\n<!-- Video en vista de telefonos moviles -->\n<div *ngIf=\"assetSource\">\n  <video controls class=\"responsive-video hide-on-med-and-up\">\n    <source [src]=\"assetSource\" type=\"video/mp4\">\n  </video>\n</div>\n\n<!-- ***************************************** -->\n<!-- Vista en escritorio -->\n<div class=\"conainer\">\n  <div class=\"row\">\n    <div class=\"col s12 m8\">\n\n      <!-- Video en la vista de escritorio -->\n      <div *ngIf=\"assetSource\">\n        <video controls class=\"responsive-video hide-on-small-only\">\n          <source [src]=\"assetSource\" type=\"video/mp4\">\n        </video>\n      </div>\n\n      <ul class=\"collapsible\">\n\n        <li>\n          <div class=\"collapsible-header valign-wrapper\">\n\n            <span class=\"f-size-20\">Resumen Blockchain</span>\n            <span class=\"badge\">\n              <i class=\"material-icons right\">arrow_drop_down_circle</i>\n            </span>\n          </div>\n          <div class=\"collapsible-body no-pad\">\n\n            <div class=\"card no-pad no-mar\">\n              <div class=\"card-content black-text\">\n\n                <p>Este video es una peque;a explicacion de lo que es blockchain.</p>\n              </div>\n              <div class=\"card-action\">\n                <div class=\"row\">\n                  <div class=\"col s6\">\n                    <a routerLink=\"/expert\" class=\"left\">\n                      <img src=\"./assets/images/expert-photo.jpg\" class=\"circle\" width=\"70\">\n                    </a>\n                  </div>\n                  <div class=\"col s6\">\n                    <a routerLink=\"/designer\" class=\"right\">\n                      <img src=\"./assets/images/designer-photo.jpg\" class=\"circle\" width=\"70\">\n                    </a>\n                  </div>\n\n                  <div class=\"col s6 left\">\n                    <p class=\"left grey-text\">Realizador</p>\n                  </div>\n                  <div class=\"col s6\">\n                    <p class=\"left grey-text right\">Diseñador de contenido</p>\n                  </div>\n                </div>\n\n\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n\n\n      <!-- ***************************************** -->\n      <!-- Pagar video -->\n\n      <!--<div class=\"input-field col s12 m8\">\n         <form>\n          <i class=\"material-icons prefix\">monetization_on</i>\n          <input id=\"icon_prefix\" type=\"text\" class=\"validate\" [(ngModel)]=\"videoPrice\" name=\"videoPrice\">\n          <label for=\"icon_prefix\">Set Video Price</label>\n        </form> \n      </div>-->\n    </div>\n\n\n\n\n\n\n\n    <!-- ***************************************** -->\n    <!-- Comentarios -->\n    <div class=\"col s12 m4\" *ngIf=\"showPrice\">\n\n      <!-- <ul class=\"collapsible\">\n\n        <li class=\"active\">\n          <div class=\"collapsible-header\">\n\n            <span class=\"center\"> Comentarios </span>\n            <span class=\"badge\">\n              <i class=\"material-icons right\">arrow_drop_down_circle</i>\n            </span>\n          </div>\n          <div class=\"collapsible-body no-pad\">\n\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <strong>Carlos Sepulveda</strong>\n                <br>\n                <p>Ahora lo entiendo todo, me fascinó, es un excelente video.</p>\n              </div>\n            </div>\n\n\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <strong>Maria Cárdenas</strong>\n                <br>\n                <p>Pensé que era más complejo</p>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul> -->\n\n    </div>\n\n  </div>\n</div>\n\n\n<div id=\"modal1\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4>Getting awesome content?</h4>\n    <p>Please add your credit card information</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a (click)=\"removePrice()\" class=\"modal-close waves-effect waves-green btn-flat\">Agree</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_smart_contract_service__ = __webpack_require__("./src/app/services/smart-contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoComponent = /** @class */ (function () {
    function VideoComponent(smartContract, afStorage) {
        var _this = this;
        this.smartContract = smartContract;
        this.afStorage = afStorage;
        this.showPrice = true;
        var fileNameId = this.afStorage.ref('userProfilePics/1530512787860_BC-Video.mp4');
        fileNameId.getDownloadURL().subscribe(function (url) {
            _this.assetSource = url;
            // console.log(url)
        });
    }
    VideoComponent.prototype.ngOnInit = function () {
        // this.VideoPriceToSell = this.smartContract.Num;
        // console.log(this.smartContract.Num);
        var collapsibleOptions = new Object();
        var collapsibleElems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(collapsibleElems, collapsibleOptions);
        var modalOptions = new Object();
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, modalOptions);
    };
    VideoComponent.prototype.removePrice = function () {
        this.showPrice = false;
    };
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video',
            template: __webpack_require__("./src/app/components/video/video.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_smart_contract_service__["a" /* SmartContractService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/custompipes/truncate-ethereum-address.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateEthereumAddressPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncateEthereumAddressPipe = /** @class */ (function () {
    function TruncateEthereumAddressPipe() {
    }
    TruncateEthereumAddressPipe.prototype.transform = function (value) {
        var head = value.substring(0, 10);
        var tail = value.slice(-10);
        return head + "..." + tail;
    };
    TruncateEthereumAddressPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'truncateEthereumAddress'
        })
    ], TruncateEthereumAddressPipe);
    return TruncateEthereumAddressPipe;
}());



/***/ }),

/***/ "./src/app/services/contract-one.json":
/***/ (function(module, exports) {

module.exports = [{"anonymous":false,"inputs":[{"indexed":false,"name":"aHash","type":"bytes32"},{"indexed":false,"name":"uAddress","type":"address"},{"indexed":false,"name":"expertPercentage","type":"uint256"},{"indexed":false,"name":"expertTransfer","type":"uint256"},{"indexed":false,"name":"userPercentage","type":"uint256"},{"indexed":false,"name":"userTransfer","type":"uint256"},{"indexed":false,"name":"ownerPercentage","type":"uint256"},{"indexed":false,"name":"ownerTransfer","type":"uint256"}],"name":"NewSale","type":"event"},{"constant":false,"inputs":[],"name":"Payable","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"aHash","type":"bytes32"},{"indexed":false,"name":"dPrice","type":"uint256"},{"indexed":false,"name":"expertAddress","type":"address"},{"indexed":false,"name":"expertPercentage","type":"uint256"},{"indexed":false,"name":"userAddress","type":"address"},{"indexed":false,"name":"userPercentage","type":"uint256"}],"name":"NewDeal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"aHash","type":"bytes32"},{"indexed":false,"name":"aType","type":"bytes32"},{"indexed":false,"name":"aName","type":"bytes32"},{"indexed":false,"name":"aPrice","type":"uint256"}],"name":"NewAsset","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"uRole","type":"uint8"},{"indexed":false,"name":"uName","type":"bytes16"}],"name":"NewUser","type":"event"},{"constant":false,"inputs":[{"name":"_aHash","type":"bytes32"},{"name":"_aType","type":"bytes32"},{"name":"_aName","type":"bytes32"},{"name":"_aPrice","type":"uint256"}],"name":"setAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_aHash","type":"bytes32"},{"name":"_dPrice","type":"uint256"},{"name":"_expertAddress","type":"address"},{"name":"_expertPercentage","type":"uint256"},{"name":"_userAddress","type":"address"},{"name":"_userPercentage","type":"uint256"}],"name":"setDeal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_aHash","type":"bytes32"}],"name":"setSale","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"uint8"},{"name":"_name","type":"bytes16"}],"name":"setUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"_aHash","type":"bytes32"}],"name":"watchAsset","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_aHash","type":"bytes32"}],"name":"watchDeal","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"watchUser","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bytes16"}],"payable":false,"stateMutability":"view","type":"function"}]

/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
        db.firestore.settings({ timestampsInSnapshots: true });
    }
    FirebaseService.prototype.getUserAddress = function (address) {
        this.UserAddress = address;
        this.getUserInfo();
    };
    FirebaseService.prototype.getUserInfo = function () {
        var _this = this;
        if (this.UserAddress) {
            return this.users = this.db.collection('Users', function (ref) { return ref.where('address', '==', _this.UserAddress); }).valueChanges();
        }
    };
    FirebaseService.prototype.getContent = function () {
        return this.videos = this.db.collection('Assets').valueChanges();
    };
    FirebaseService.prototype.addNewUser = function (user) {
        var usersColection = this.db.collection('Users');
        usersColection.add(user);
    };
    FirebaseService.prototype.getSpecificUser = function (email) {
        if (email) {
            return this.users = this.db.collection('Users', function (ref) { return ref.where('email', '==', email); }).valueChanges();
        }
    };
    FirebaseService.prototype.addNewContent = function (asset) {
        var assetCollection = this.db.collection('Assets');
        assetCollection.add(asset);
    };
    FirebaseService.prototype.findAsset = function (sha256Hash) {
        if (sha256Hash) {
            return this.assets = this.db.collection('Assets', function (ref) { return ref.where('assetSha256Hash', '==', sha256Hash); }).valueChanges();
        }
    };
    FirebaseService.prototype.registerCreation = function (createdAsset) {
        var creationCollection = this.db.collection('createdAsset');
        creationCollection.add(createdAsset);
    };
    FirebaseService.prototype.registerNewSell = function (acquiredAssets) {
        var boughtAssetsCollection = this.db.collection('acquiredAssets');
        boughtAssetsCollection.add(acquiredAssets);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/smart-contract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Web3 = __webpack_require__("./node_modules/web3/index.js");
var tokenABI = __webpack_require__("./src/app/services/contract-one.json");
var SmartContractService = /** @class */ (function () {
    function SmartContractService(router, fireService) {
        this.router = router;
        this.fireService = fireService;
        this.cryptoUser = false;
        this.userAccountAddress = null;
        this._tokenContractAddress = '0x6e0bec7cd4c786919329dc1025c4cf8cf951bbd2';
        this.bootstrapWeb3();
    }
    SmartContractService.prototype.bootstrapWeb3 = function () {
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
            this.cryptoUser = true;
        }
        else {
            this.cryptoUser = false;
            if (this.router.url != '/') {
                this.router.navigate(['/']);
                alert('Haven\'t used ethereum? You should consider trying MetaMask!');
            }
            // // // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            // // Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // // // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            // // this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        if (this.cryptoUser == true) {
            this.instance = this.web3.eth.contract(tokenABI).at(this._tokenContractAddress);
        }
        // console.log(this.instance)
    };
    SmartContractService.prototype.getUserAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.web3.eth.getAccounts(function (err, accs) {
                                    if (err) {
                                        alert('ocurrió un error al traer la dirección de tu cuenta');
                                        _this.router.navigate(['/']);
                                        return;
                                    }
                                    else if (accs.length === 0) {
                                        alert('Couldn\'t get your metamask account.');
                                        _this.router.navigate(['/']);
                                        return;
                                    }
                                    else {
                                        if (_this.router.url == '/register') {
                                            // this.router.navigate(['/']);
                                            // alert('You are already registered');
                                        }
                                        resolve(accs[0]);
                                    }
                                });
                            })];
                    case 1:
                        _a.userAccountAddress = (_b.sent());
                        this.web3.eth.defaultAccount = this.userAccountAddress;
                        return [2 /*return*/, Promise.resolve(this.userAccountAddress)];
                }
            });
        });
    };
    SmartContractService.prototype.setUser = function (user) {
        var _this = this;
        var FullName = user.name + " " + user.lastname;
        this.instance.setUser(user.role, FullName, function (err, res) {
            if (!err) {
                console.log("Success with" + res);
                /////Registro en firebase
                _this.fireService.addNewUser(user);
            }
            else {
                console.log("Failed with " + err);
            }
        });
    };
    SmartContractService.prototype.setSale = function (acquiredAssets) {
        var _this = this;
        this.instance.setSale(acquiredAssets.assetSha256Hash, function (err, data) {
            if (!err) {
                _this.fireService.registerNewSell(acquiredAssets);
                M.toast({ html: 'THe content was succesfully acquired.' });
                // this.router.navigate(['/video'], acquiredAssets.assetSha256Hash)
            }
            else {
                M.toast({ html: "En error ocurred, please try again." });
            }
        });
    };
    SmartContractService.prototype.setDeal = function (a, createdAsset) {
        var _this = this;
        this.instance.setDeal(a.assetSha256Hash, a.price, a.expertAddress, a.expertPercentage, a.userAddress, a.userPercentage, function (err, res) {
            if (!err) {
                _this.fireService.addNewContent(a);
                _this.fireService.registerCreation(createdAsset);
                M.toast({ html: "The contract was registered succesfully" });
                _this.router.navigate(['/user']);
            }
            else {
                M.toast({ html: "En error ocurred, please try again." });
            }
        });
    };
    SmartContractService.prototype.watchUsers = function () {
        console.log(this.instance.watchUsers());
    };
    SmartContractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebaseService */]])
    ], SmartContractService);
    return SmartContractService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCAM3DjwUe83rvSRKVOL9WSdxF-6VJLhFE",
        authDomain: "mockups-e88f2.firebaseapp.com",
        databaseURL: "https://mockups-e88f2.firebaseio.com",
        projectId: "mockups-e88f2",
        storageBucket: "mockups-e88f2.appspot.com",
        messagingSenderId: "1050803365249"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map