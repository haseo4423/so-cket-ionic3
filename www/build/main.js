webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigurationPage = /** @class */ (function () {
    function ConfigurationPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ConfigurationPage.prototype.storageClear = function () {
        localStorage.clear();
        var toast = this.toastCtrl.create({
            message: 'LocalStorageを全て削除しました',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ConfigurationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-configuration',template:/*ion-inline-start:"/Users/sog/git/so-cket-ionic3/src/pages/configuration/configuration.html"*/'<!--\n  Generated template for the ConfigurationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      オプション\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button secondary (click)="storageClear()">LocalStorageクリア</button>\n</ion-content>'/*ion-inline-end:"/Users/sog/git/so-cket-ionic3/src/pages/configuration/configuration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ConfigurationPage);
    return ConfigurationPage;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyReportModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DailyReportModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DailyReportModalPage = /** @class */ (function () {
    function DailyReportModalPage(params, viewCtrl, toastCtrl) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.modalContents = "";
        var getParams = this.params.get("modalObject");
        this.modalContents = "\u65E5\u5831\u3000" + getParams.displayDate + "\u3000" + getParams.name + "\n\n";
        this.modalContents += "\u25A1\u672C\u65E5\u306EDS\u3000" + getParams.dsToday + "\uFF1A" + getParams.dsHeading + "\n\n";
        this.modalContents += "\u203B 1:\u60AA\u3044 <==> 5:\u826F\u3044\n";
        for (var _i = 0, _a = getParams.contents; _i < _a.length; _i++) {
            var content = _a[_i];
            this.modalContents += "\u25A1" + content.type + "\uFF1A" + content.value + "\n";
        }
        this.modalContents += "\n\u25A1\u81EA\u7531\u8A18\u5165\u6B04(DS\u4F53\u9A13/\u6C17\u3065\u304D\u306A\u3069\u3001\u305D\u306E\u4ED6\u306A\u3093\u3067\u3082)\n" + getParams.comment;
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__('#cpyBtn');
        this.clipboard.on('success', function () { return _this.showMsg(toastCtrl); });
    }
    DailyReportModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DailyReportModalPage.prototype.showMsg = function (toastCtrl) {
        var toast = toastCtrl.create({
            message: 'クリップボードにコピーしました',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    DailyReportModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-daily-report-modal',template:/*ion-inline-start:"/Users/sog/git/so-cket-ionic3/src/pages/daily-report-modal/daily-report-modal.html"*/'<!--\n  Generated template for the DailyReportModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      日報作成\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label color="primary" stacked>本文</ion-label>\n  <textarea [(ngModel)]="modalContents" name="modalContents" [value]="modalContents" id="copyTarget" class="modalTextarea"></textarea>\n  <button id="cpyBtn" block ion-button data-clipboard-target="#copyTarget">コピー</button>\n  <!-- <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{character.image}}">\n      </ion-avatar>\n      <h2>{{character.name}}</h2>\n      <p>{{character.quote}}</p>\n    </ion-item>\n    <ion-item *ngFor="let item of character[\'items\']">\n      {{item.title}}\n      <ion-note item-end>\n        {{item.note}}\n      </ion-note>\n    </ion-item>\n  </ion-list> -->\n</ion-content>'/*ion-inline-end:"/Users/sog/git/so-cket-ionic3/src/pages/daily-report-modal/daily-report-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], DailyReportModalPage);
    return DailyReportModalPage;
}());

//# sourceMappingURL=daily-report-modal.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_report_modal_daily_report_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dream_source_dream_source__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DailyReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * See https://github.com/pauloedsr/ionic3-datepicker.
 */
var DailyReportPage = /** @class */ (function () {
    function DailyReportPage(navCtrl, navParams, modalCtrl, dreamSource) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.dreamSource = dreamSource;
        this.weekString = ['日', '月', '火', '水', '木', '金', '土'];
        this.initDate = new Date();
        this.disabledDates = [new Date(2016, 11, 14)];
        this.displayDate = this.dateFormat(this.initDate);
        this.dsToday = 0;
        this.segments = [];
        this.testContents = [];
        this.segments = this.dreamSource.getMainSegmentItems();
    }
    DailyReportPage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('modalObject')) {
            var modalObject = JSON.parse(localStorage.getItem('modalObject'));
            this.name = modalObject.name;
            var num = modalObject.dsToday;
            this.dsToday = num - 1;
            for (var _i = 0, _a = modalObject.contents; _i < _a.length; _i++) {
                var content = _a[_i];
                this.testContents.push({ type: content.type, value: content.value });
            }
            this.comment = modalObject.comment;
        }
        else {
            this.testContents = [
                { type: "今日のDS意識度", value: 3 },
                { type: "今日の業務進捗", value: 3 },
                { type: "今日の体調", value: 3 },
                { type: "今日のモチベーション", value: 3 }
            ];
        }
        if (this.dsToday != undefined)
            this.dsItem = this.segments[this.dsToday].item;
    };
    DailyReportPage.prototype.openModal = function () {
        var num = this.dsToday;
        num++;
        var objectArray = [];
        for (var _i = 0, _a = this.testContents; _i < _a.length; _i++) {
            var content = _a[_i];
            objectArray.push({ type: content.type, value: content.value });
        }
        var modalObject = {
            displayDate: this.displayDate,
            name: this.name,
            dsToday: num,
            dsHeading: this.segments[this.dsToday].heading,
            contents: objectArray,
            comment: this.comment,
        };
        localStorage.setItem('modalObject', JSON.stringify(modalObject));
        var dailyReportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__daily_report_modal_daily_report_modal__["a" /* DailyReportModalPage */], { modalObject: modalObject });
        dailyReportModal.present();
    };
    DailyReportPage.prototype.setDate = function (date) {
        this.initDate = date;
        this.displayDate = this.dateFormat(date);
    };
    DailyReportPage.prototype.setDsItem = function () {
        this.dsItem = this.segments[this.dsToday].item;
    };
    // dateFormat 関数の定義
    DailyReportPage.prototype.dateFormat = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var w = date.getDay();
        var wNames = ['日', '月', '火', '水', '木', '金', '土'];
        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }
        // フォーマット整形済みの文字列を戻り値にする
        return y + '年' + m + '月' + d + '日(' + wNames[w] + ')';
    };
    DailyReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-daily-report',template:/*ion-inline-start:"/Users/sog/git/so-cket-ionic3/src/pages/daily-report/daily-report.html"*/'<!--\n  Generated template for the DailyReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      日報\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <p color="primary" class="likely-label" stacked>日付</p>\n      <span ion-datepicker (ionChanged)="setDate($event);" [value]="initDate" [markDates]="disabledDates" class="ScheduleDate"\n        [localeStrings]="{ weekdays: [\'日\', \'月\', \'火\', \'水\', \'木\', \'金\', \'土\'], months: [\'1月\', \'2月\', \'3月\', \'4月\', \'5月\', \'6月\', \'7月\', \'8月\', \'9月\', \'10月\', \'11月\', \'12月\'] }">\n        <span>{{displayDate}} <ion-icon name="calendar" item-left></ion-icon></span>\n      </span>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>氏名</ion-label>\n      <ion-input type="text" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>今日のDS</ion-label>\n      <ion-select interface="alert" [(ngModel)]="dsToday" name="dsToday" (ngModelChange)="setDsItem();">\n        <ion-option *ngFor="let segment of segments;let idx = index;" value="{{idx}}">{{idx+1}}：{{segment.heading}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <p class="white-space-prewrap">{{dsItem}}</p>\n    </ion-item>\n    <ion-item *ngFor="let testContent of testContents;">\n      <ion-label color="primary" stacked>{{testContent.type}}： {{testContent.value}}</ion-label>\n      <ion-range min="10" max="50" step="1" snaps="true" [(ngModel)]="10*testContent.value" color="secondary"\n        (ngModelChange)="testContent.value=$event/10">\n        <ion-icon range-left name="sad"></ion-icon>\n        <ion-icon range-right name="happy"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>自由記入欄</ion-label>\n      <ion-textarea [(ngModel)]="comment" name="comment" class="height50vh"></ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button (click)="openModal()" block [disabled]="!name">日報を作成する</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/sog/git/so-cket-ionic3/src/pages/daily-report/daily-report.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_dream_source_dream_source__["a" /* DreamSourceProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dream_source_dream_source__["a" /* DreamSourceProvider */]])
    ], DailyReportPage);
    return DailyReportPage;
}());

//# sourceMappingURL=daily-report.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DreamSourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dream_source_dream_source__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DreamSourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DreamSourcePage = /** @class */ (function () {
    function DreamSourcePage(navCtrl, navParams, dreamSource) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dreamSource = dreamSource;
        this.segments = [];
        this.activeIndex = 0;
    }
    DreamSourcePage.prototype.ionViewDidLoad = function () {
        this.segments = this.dreamSource.getSegmentItems();
    };
    DreamSourcePage.prototype.change = function (idx) {
        this.activeIndex = idx;
        this.slides.slideTo(this.activeIndex, 500);
    };
    DreamSourcePage.prototype.onSlideChangeStart = function () {
        var _this = this;
        var index = this.slides.getActiveIndex();
        // しきい値チェック。タブメニューをはみ出してたらリターン
        if (this.tabmenu.nativeElement.children.length <= index) {
            return;
        }
        this.activeIndex = index;
        // タブメニューの移動
        var start = this.tabmenu.nativeElement.scrollLeft;
        var end = this.tabmenu.nativeElement.children[index].offsetLeft;
        var dir = 1;
        // 進行方向を決定(1：進む、-1：戻る)
        if (start > end) {
            dir = dir * -1;
        }
        // 移動量を決める。
        var speed = Math.abs(end - start) / 20;
        var cnt = 0;
        // endの位置に来るまでループ
        var obs = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(1).subscribe(function (x) {
            cnt = cnt + (speed * dir);
            _this.tabmenu.nativeElement.scrollLeft = start + cnt;
            // 進む場合
            if ((start + cnt) >= end && dir == 1) {
                obs.unsubscribe();
            }
            // 戻る場合
            if ((start + cnt) <= end && dir == -1) {
                obs.unsubscribe();
            }
        });
    };
    DreamSourcePage.prototype.doRefresh = function (refresher) {
        // this.currentPage = 1;
        setTimeout(function () {
            // this.qiitaServiceProvider.getQiitaItems(this.currentPage, this.queryOption)
            //   .subscribe(items => {
            //     this.qiitaItems = items;
            //     console.log(items);
            //   },
            //     err => console.log(err),
            //     () => { });
            refresher.complete();
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], DreamSourcePage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('tabmenu'),
        __metadata("design:type", Object)
    ], DreamSourcePage.prototype, "tabmenu", void 0);
    DreamSourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dream-source',template:/*ion-inline-start:"/Users/sog/git/so-cket-ionic3/src/pages/dream-source/dream-source.html"*/'<!--\n  Generated template for the DreamSourcePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      D2S\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- START:タブメニュー-->\n  <div class="tabmenu" #tabmenu ion-fixed>\n    <div class="tabmenu-items" *ngFor="let segment of segments;let idx = index;">\n      <div class="tabmenu-bt">\n        <button [ngClass]="{\'active\':idx==activeIndex}" ion-button (click)="change(idx)" clear>{{segment.name}}</button>\n      </div>\n    </div>\n  </div>\n  <!-- END:タブメニュー-->\n  <!-- START:リスト-->\n  <ion-slides (ionSlideWillChange)="onSlideChangeStart()" class="tabmenu-slides" #Slides>\n    <ion-slide *ngFor="let segment of segments;let idx = index;">\n      <ion-list *ngIf="idx==0">\n        <div *ngFor="let inner_segment of segments;let inner_index = index;">\n          <button class="active" ion-button (click)="change(inner_index)" *ngIf="inner_index!=0" clear>{{inner_segment.name}}<br>{{inner_segment.heading}}</button>\n        </div>\n      </ion-list>\n      <ion-list *ngIf="idx!=0">\n        <div class="font-weight-bold">{{segment.heading}}</div>\n        <div class="white-space-prewrap">{{segment.item}}</div>\n        <button class="active" ion-button (click)="change(0)" clear>目次に戻る</button>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n  <!-- END:リスト-->\n</ion-content>'/*ion-inline-end:"/Users/sog/git/so-cket-ionic3/src/pages/dream-source/dream-source.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_dream_source_dream_source__["a" /* DreamSourceProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dream_source_dream_source__["a" /* DreamSourceProvider */]])
    ], DreamSourcePage);
    return DreamSourcePage;
}());

//# sourceMappingURL=dream-source.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TimeRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeRegistrationPage = /** @class */ (function () {
    function TimeRegistrationPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.weekString = ['日', '月', '火', '水', '木', '金', '土'];
        this.registeredLogArray = [];
    }
    TimeRegistrationPage.prototype.ionViewDidLoad = function () { };
    TimeRegistrationPage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('registeredUrl')) {
            this.url = JSON.parse(localStorage.getItem('registeredUrl'));
        }
        if (localStorage.getItem('registeredLog')) {
            this.registeredLogArray = JSON.parse(localStorage.getItem('registeredLog'));
        }
    };
    TimeRegistrationPage.prototype.apiExecute = function () {
        localStorage.setItem('registeredUrl', JSON.stringify(this.url));
        var nowMoment = __WEBPACK_IMPORTED_MODULE_3_moment__();
        var weekNumber = nowMoment.format("d");
        var now = nowMoment.format("Y年M月D日(" + this.weekString[weekNumber] + ")H時m分");
        this.registeredLogArray.push(now);
        if (this.registeredLogArray.length > 6) {
            var deleteItemCount = this.registeredLogArray.length - 6;
            this.registeredLogArray.splice(0, deleteItemCount);
        }
        localStorage.setItem('registeredLog', JSON.stringify(this.registeredLogArray));
        window.open(this.url, "_system");
    };
    TimeRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-time-registration',template:/*ion-inline-start:"/Users/sog/git/so-cket-ionic3/src/pages/time-registration/time-registration.html"*/'<!--\n  Generated template for the TimeRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      勤怠\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p padding>※社員番号を含めた勤怠登録URLを入力して登録ボタンを押してください。ブラウザが起動して打刻されます。</p>\n  <form padding (submit)="apiExecute()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>URL</ion-label>\n        <ion-input type="text" [(ngModel)]="url" name="url"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block>登録</button>\n  </form>\n  <ion-list padding>\n    <p>履歴</p>\n    <ion-item *ngFor="let log of registeredLogArray">\n      <p>{{log}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/sog/git/so-cket-ionic3/src/pages/time-registration/time-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TimeRegistrationPage);
    return TimeRegistrationPage;
}());

//# sourceMappingURL=time-registration.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/configuration/configuration.module": [
		424,
		4
	],
	"../pages/daily-report-modal/daily-report-modal.module": [
		425,
		3
	],
	"../pages/daily-report/daily-report.module": [
		426,
		2
	],
	"../pages/dream-source/dream-source.module": [
		427,
		1
	],
	"../pages/time-registration/time-registration.module": [
		428,
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.doRefresh = function (refresher) {
        // this.currentPage = 1;
        setTimeout(function () {
            // this.qiitaServiceProvider.getQiitaItems(this.currentPage, this.queryOption)
            //   .subscribe(items => {
            //     this.qiitaItems = items;
            //     console.log(items);
            //   },
            //     err => console.log(err),
            //     () => { });
            refresher.complete();
        }, 500);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sog/git/so-cket-ionic3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingText="ひっぱって更新" refreshingText="更新中...">\n    </ion-refresher-content>\n  </ion-refresher> -->\n  <h3>so-cket v0.4.0</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>'/*ion-inline-end:"/Users/sog/git/so-cket-ionic3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_time_registration_time_registration__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_daily_report_daily_report__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dream_source_dream_source__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_daily_report_modal_daily_report_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_configuration_configuration__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_mock_mock__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_dream_source_dream_source__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic3_datepicker__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_time_registration_time_registration__["a" /* TimeRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_daily_report_daily_report__["a" /* DailyReportPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dream_source_dream_source__["a" /* DreamSourcePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_daily_report_modal_daily_report_modal__["a" /* DailyReportModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_configuration_configuration__["a" /* ConfigurationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/configuration/configuration.module#ConfigurationPageModule', name: 'ConfigurationPage', segment: 'configuration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/daily-report-modal/daily-report-modal.module#DailyReportModalPageModule', name: 'DailyReportModalPage', segment: 'daily-report-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/daily-report/daily-report.module#DailyReportPageModule', name: 'daily-report', segment: 'daily-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dream-source/dream-source.module#DreamSourcePageModule', name: 'dream-source', segment: 'dream-source', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-registration/time-registration.module#TimeRegistrationPageModule', name: 'TimeRegistrationPage', segment: 'time-registration', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_ionic3_datepicker__["a" /* DatePickerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_time_registration_time_registration__["a" /* TimeRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_daily_report_daily_report__["a" /* DailyReportPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dream_source_dream_source__["a" /* DreamSourcePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_daily_report_modal_daily_report_modal__["a" /* DailyReportModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_configuration_configuration__["a" /* ConfigurationPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_mock_mock__["a" /* MockProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_dream_source_dream_source__["a" /* DreamSourceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 163,
	"./af.js": 163,
	"./ar": 164,
	"./ar-dz": 165,
	"./ar-dz.js": 165,
	"./ar-kw": 166,
	"./ar-kw.js": 166,
	"./ar-ly": 167,
	"./ar-ly.js": 167,
	"./ar-ma": 168,
	"./ar-ma.js": 168,
	"./ar-sa": 169,
	"./ar-sa.js": 169,
	"./ar-tn": 170,
	"./ar-tn.js": 170,
	"./ar.js": 164,
	"./az": 171,
	"./az.js": 171,
	"./be": 172,
	"./be.js": 172,
	"./bg": 173,
	"./bg.js": 173,
	"./bm": 174,
	"./bm.js": 174,
	"./bn": 175,
	"./bn.js": 175,
	"./bo": 176,
	"./bo.js": 176,
	"./br": 177,
	"./br.js": 177,
	"./bs": 178,
	"./bs.js": 178,
	"./ca": 179,
	"./ca.js": 179,
	"./cs": 180,
	"./cs.js": 180,
	"./cv": 181,
	"./cv.js": 181,
	"./cy": 182,
	"./cy.js": 182,
	"./da": 183,
	"./da.js": 183,
	"./de": 184,
	"./de-at": 185,
	"./de-at.js": 185,
	"./de-ch": 186,
	"./de-ch.js": 186,
	"./de.js": 184,
	"./dv": 187,
	"./dv.js": 187,
	"./el": 188,
	"./el.js": 188,
	"./en-au": 189,
	"./en-au.js": 189,
	"./en-ca": 190,
	"./en-ca.js": 190,
	"./en-gb": 191,
	"./en-gb.js": 191,
	"./en-ie": 192,
	"./en-ie.js": 192,
	"./en-il": 193,
	"./en-il.js": 193,
	"./en-nz": 194,
	"./en-nz.js": 194,
	"./eo": 195,
	"./eo.js": 195,
	"./es": 196,
	"./es-do": 197,
	"./es-do.js": 197,
	"./es-us": 198,
	"./es-us.js": 198,
	"./es.js": 196,
	"./et": 199,
	"./et.js": 199,
	"./eu": 200,
	"./eu.js": 200,
	"./fa": 201,
	"./fa.js": 201,
	"./fi": 202,
	"./fi.js": 202,
	"./fo": 203,
	"./fo.js": 203,
	"./fr": 204,
	"./fr-ca": 205,
	"./fr-ca.js": 205,
	"./fr-ch": 206,
	"./fr-ch.js": 206,
	"./fr.js": 204,
	"./fy": 207,
	"./fy.js": 207,
	"./gd": 208,
	"./gd.js": 208,
	"./gl": 209,
	"./gl.js": 209,
	"./gom-latn": 210,
	"./gom-latn.js": 210,
	"./gu": 211,
	"./gu.js": 211,
	"./he": 212,
	"./he.js": 212,
	"./hi": 213,
	"./hi.js": 213,
	"./hr": 214,
	"./hr.js": 214,
	"./hu": 215,
	"./hu.js": 215,
	"./hy-am": 216,
	"./hy-am.js": 216,
	"./id": 217,
	"./id.js": 217,
	"./is": 218,
	"./is.js": 218,
	"./it": 219,
	"./it.js": 219,
	"./ja": 220,
	"./ja.js": 220,
	"./jv": 221,
	"./jv.js": 221,
	"./ka": 222,
	"./ka.js": 222,
	"./kk": 223,
	"./kk.js": 223,
	"./km": 224,
	"./km.js": 224,
	"./kn": 225,
	"./kn.js": 225,
	"./ko": 226,
	"./ko.js": 226,
	"./ky": 227,
	"./ky.js": 227,
	"./lb": 228,
	"./lb.js": 228,
	"./lo": 229,
	"./lo.js": 229,
	"./lt": 230,
	"./lt.js": 230,
	"./lv": 231,
	"./lv.js": 231,
	"./me": 232,
	"./me.js": 232,
	"./mi": 233,
	"./mi.js": 233,
	"./mk": 234,
	"./mk.js": 234,
	"./ml": 235,
	"./ml.js": 235,
	"./mn": 236,
	"./mn.js": 236,
	"./mr": 237,
	"./mr.js": 237,
	"./ms": 238,
	"./ms-my": 239,
	"./ms-my.js": 239,
	"./ms.js": 238,
	"./mt": 240,
	"./mt.js": 240,
	"./my": 241,
	"./my.js": 241,
	"./nb": 242,
	"./nb.js": 242,
	"./ne": 243,
	"./ne.js": 243,
	"./nl": 244,
	"./nl-be": 245,
	"./nl-be.js": 245,
	"./nl.js": 244,
	"./nn": 246,
	"./nn.js": 246,
	"./pa-in": 247,
	"./pa-in.js": 247,
	"./pl": 248,
	"./pl.js": 248,
	"./pt": 249,
	"./pt-br": 250,
	"./pt-br.js": 250,
	"./pt.js": 249,
	"./ro": 251,
	"./ro.js": 251,
	"./ru": 252,
	"./ru.js": 252,
	"./sd": 253,
	"./sd.js": 253,
	"./se": 254,
	"./se.js": 254,
	"./si": 255,
	"./si.js": 255,
	"./sk": 256,
	"./sk.js": 256,
	"./sl": 257,
	"./sl.js": 257,
	"./sq": 258,
	"./sq.js": 258,
	"./sr": 259,
	"./sr-cyrl": 260,
	"./sr-cyrl.js": 260,
	"./sr.js": 259,
	"./ss": 261,
	"./ss.js": 261,
	"./sv": 262,
	"./sv.js": 262,
	"./sw": 263,
	"./sw.js": 263,
	"./ta": 264,
	"./ta.js": 264,
	"./te": 265,
	"./te.js": 265,
	"./tet": 266,
	"./tet.js": 266,
	"./tg": 267,
	"./tg.js": 267,
	"./th": 268,
	"./th.js": 268,
	"./tl-ph": 269,
	"./tl-ph.js": 269,
	"./tlh": 270,
	"./tlh.js": 270,
	"./tr": 271,
	"./tr.js": 271,
	"./tzl": 272,
	"./tzl.js": 272,
	"./tzm": 273,
	"./tzm-latn": 274,
	"./tzm-latn.js": 274,
	"./tzm.js": 273,
	"./ug-cn": 275,
	"./ug-cn.js": 275,
	"./uk": 276,
	"./uk.js": 276,
	"./ur": 277,
	"./ur.js": 277,
	"./uz": 278,
	"./uz-latn": 279,
	"./uz-latn.js": 279,
	"./uz.js": 278,
	"./vi": 280,
	"./vi.js": 280,
	"./x-pseudo": 281,
	"./x-pseudo.js": 281,
	"./yo": 282,
	"./yo.js": 282,
	"./zh-cn": 283,
	"./zh-cn.js": 283,
	"./zh-hk": 284,
	"./zh-hk.js": 284,
	"./zh-tw": 285,
	"./zh-tw.js": 285
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 395;

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_time_registration_time_registration__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_daily_report_daily_report__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dream_source_dream_source__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_configuration_configuration__ = __webpack_require__(104);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: '勤怠', component: __WEBPACK_IMPORTED_MODULE_5__pages_time_registration_time_registration__["a" /* TimeRegistrationPage */] },
            { title: '日報', component: __WEBPACK_IMPORTED_MODULE_6__pages_daily_report_daily_report__["a" /* DailyReportPage */] },
            { title: 'D2S', component: __WEBPACK_IMPORTED_MODULE_7__pages_dream_source_dream_source__["a" /* DreamSourcePage */] },
            { title: 'オプション', component: __WEBPACK_IMPORTED_MODULE_8__pages_configuration_configuration__["a" /* ConfigurationPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/sog/git/so-cket-ionic3/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/sog/git/so-cket-ionic3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockProvider; });
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
/*
  Generated class for the MockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// @Injectable()
var MockProvider = /** @class */ (function () {
    function MockProvider() {
    }
    /*
      戻り値：[{"name":"string", "items":[string[]]}]
    */
    MockProvider.prototype.getSegmentItems = function () {
        var segments = [];
        for (var i = 0; i < 10; i++) {
            var item = this.getItem("menu" + i, 15);
            segments.push(item);
        }
        return segments;
    };
    /*
      戻り値：{"name":"string", "items":[string[]]}
    */
    MockProvider.prototype.getItem = function (name, num) {
        var item = {
            "name": name,
            "items": []
        };
        for (var i = 0; i < num; i++) {
            item.items.push("item" + i);
        }
        return item;
    };
    return MockProvider;
}());

//# sourceMappingURL=mock.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DreamSourceProvider; });
/*
  Generated class for the DreamSourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DreamSourceProvider = /** @class */ (function () {
    function DreamSourceProvider() {
        this.beginningSegments = [
            {
                "name": "目次",
                "heading": "",
                "item": ""
            },
            {
                "name": "序文",
                "heading": "",
                "item": "\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u3068\u3044\u3046\u8A00\u8449\u306F\u6BD4\u8F03\u7684\u8033\u306B\u3059\u308B\u3068\u3057\u3066\u3082\u3001\u300C\u51FA\u9022\u3048\u3066\u826F\u304B\u3063\u305F\u300D\u3068\u3044\u3046\u8A00\u8449\u306F\u76F8\u624B\u306E\u4EBA\u751F\u306B\u5BFE\u3057\u3066\u76F8\u5F53\u306A\u611F\u52D5\u3084\u30A4\u30F3\u30D1\u30AF\u30C8\u3092\u4E0E\u3048\u306A\u3044\u3068\u51FA\u3066\u3053\u306A\u3044\u8A00\u8449\u3067\u3059\u3002\n        \n\u793E\u54E1\u540C\u58EB\u306F\u304A\u4E92\u3044\u3092\u81EA\u5206\u306E\u5BB6\u65CF\u306E\u3088\u3046\u306B\u611F\u3058\u3001\u500B\u6027\u3084\u5F79\u5272\u3092\u5C0A\u91CD\u3057\u5408\u3044\u3001\u82E6\u697D\u3092\u5171\u306B\u3059\u308B\u95A2\u4FC2\u3092\u7BC9\u3044\u3066\u3001\u300C\u4E09\u6075\u30AF\u30EA\u30A8\u30B9\u306E\u30E1\u30F3\u30D0\u30FC\u3067\u826F\u304B\u3063\u305F\u300D\u3068\u8A00\u3048\u308B\u95A2\u4FC2\u3092\u5275\u308A\u305F\u3044\u3002\n        \n\u79C1\u305F\u3061\u306F\u795E\u696D\u306E\u6280\u8853\u3068\u3001\u3068\u3073\u3063\u304D\u308A\u306E\u771F\u5FC3\u3092\u8FBC\u3081\u305F\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u3067\u3001\u304A\u5BA2\u69D8\u306E\u672C\u8CEA\u7684\u306A\u8AB2\u984C\u3092\u89E3\u6C7A\u3057\u3001\u767A\u5C55\u306B\u5927\u304D\u304F\u5BC4\u4E0E\u3057\u3066\u3001\u300C\u4E09\u6075\u30AF\u30EA\u30A8\u30B9\u3055\u3093\u306B\u51FA\u9022\u3048\u3066\u826F\u304B\u3063\u305F\u300D\u3068\u8A00\u308F\u308C\u308B\u4F1A\u793E\u306B\u306A\u308A\u305F\u3044\u3002\n        \n\u79C1\u305F\u3061\u304C\u95A2\u308F\u308B\u5168\u3066\u306E\u4EBA\u3068\u300C\u51FA\u9022\u3048\u3066\u826F\u304B\u3063\u305F\u300D\u3068\u8A00\u3044\u3042\u3048\u308B\u3088\u3046\u306A\u95A2\u4FC2\u3092\u7BC9\u3044\u3066\u3044\u304F\u3053\u3068\u304C\u3001\u79C1\u305F\u3061\u306E\u5922\u3067\u3042\u308A\u3001\u76EE\u6307\u3059\u7406\u60F3\u306E\u30E2\u30C7\u30EB\u4F01\u696D\u3067\u3059\u3002"
            },
            {
                "name": "Life Winner",
                "heading": "",
                "item": "\u5927\u5FD7\u3092\u62B1\u304D\u4EBA\u751F\u3092\u304B\u3051\u3066\u3000\u7D99\u7D9A\u7684\u306B\u52AA\u529B\u3057\u3001\u6C7A\u65AD\u3057\u305F\u9053\u3092\u524D\u9032\u3059\u308B\u4EBA\u3067\u3042\u308B\u3002\n        \n\u5E38\u306B\u5B66\u3073\u5E38\u306B\u76F4\u9762\u3059\u308B\u969C\u5BB3\u3092\u4E57\u308A\u8D8A\u3048\u308B\u65B9\u6CD5\u3092\u8003\u3048\u3001\u5B9F\u8DF5\u3059\u308B\u4EBA\u3067\u3042\u308B\u3002\n        \n\u307E\u305A\u81EA\u7ACB\u3057\u5931\u6557\u3057\u3066\u3082\u4ED6\u4EBA\u306E\u305B\u3044\u306B\u305B\u305A\u3001\u6700\u5F8C\u307E\u3067\u8CAC\u4EFB\u3092\u53D6\u308B\u4EBA\u3067\u3042\u308B\u3002\n        \n\u6C7A\u65AD\u3057\u305F\u9053\u3092\u9032\u3080\u904E\u7A0B\u3092\u901A\u3058\u3066\u3001\u81EA\u5206\u305D\u3057\u3066\u5468\u56F2\u306E\u4EBA\u306B\u5BFE\u3057\u3066\u3082\u611F\u52D5\u3068\u5E78\u798F\u3092\u4E0E\u3048\u308B\u4EBA\u3067\u3042\u308B\u3002"
            },
            {
                "name": "Vision",
                "heading": "",
                "item": "\u300C\u3042\u306A\u305F\u306B\u51FA\u9022\u3048\u3066\u826F\u304B\u3063\u305F\u300D\u3068\u8A00\u308F\u308C\u308BNo.1\u306E\u4F01\u696D\u30B0\u30EB\u30FC\u30D7\u306B\u306A\u308A\u307E\u3059\u3002"
            },
            {
                "name": "Mission",
                "heading": "",
                "item": "First Step\n        \n\u4E09\u6075\u30AF\u30EA\u30A8\u30B9\u306F\u3001\u793E\u54E1\u306E\u4EBA\u683C\u6210\u9577\u3068\u5C02\u9580\u30B9\u30AD\u30EB\u5411\u4E0A\u306E\u305F\u3081\u306B\u3001\u5FC5\u8981\u306A\u6559\u80B2\u3084\u30C1\u30E3\u30F3\u30B9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\n        \nSecond Step\n        \n\u4E09\u6075\u30AF\u30EA\u30A8\u30B9\u306F\u3001\u304A\u5BA2\u69D8\u306E\u767A\u5C55\u3068\u5E78\u798F\u306E\u305F\u3081\u306B\u3001\u30CF\u30FC\u30C8\u30D5\u30EB\u306AIT\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\n        \nThird Step\n        \n\u4E09\u6075\u30AF\u30EA\u30A8\u30B9\u306F\u3001\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u304C\u3042\u3075\u308C\u308B\u672A\u6765\u306E\u305F\u3081\u306B\u3001\u300C\u5BB6\u65CF\u6587\u5316*\u300D\u3092\u767A\u4FE1\u3057\u7D9A\u3051\u307E\u3059\u3002\n        \n*\u304A\u4E92\u3044\u3092\u81EA\u5206\u306E\u5BB6\u65CF\u306E\u3088\u3046\u306B\u611F\u3058\u3001\u500B\u6027\u3084\u5F79\u5272\u3092\u5C0A\u91CD\u3057\u5408\u3044\u3001\u82E6\u697D\u3092\u5171\u306B\u3059\u308B\u95A2\u4FC2"
            },
        ];
        this.mainSegments = [
            {
                "name": "基本原則１",
                "heading": "Dream Sourceは会社の心である",
                "item": "\nDream Source\u306F\u4E09\u6075\u30AF\u30EA\u30A8\u30B9\u306E\u5FC3\u3067\u3042\u308A\u9B42\u3067\u3042\u308A\u3001\u5927\u5207\u306B\u3057\u3066\u3044\u308B\u4FA1\u5024\u89B3\u3067\u3059\u3002\u5168\u54E1\u304C\u3053\u308C\u3092\u81EA\u5206\u306E\u3082\u306E\u3068\u3057\u3066\u53D7\u3051\u5165\u308C\u7406\u89E3\u3057\u3001\u4E3B\u4F53\u7684\u306B\u5B9F\u8DF5\u3057\u307E\u3059\u3002\u5168\u3066\u306E\u30E1\u30F3\u30D0\u30FC\u306FDream Source\u3092\u5E38\u306B\u8EAB\u306B\u3064\u3051\u3001\u8FF7\u3044\u304C\u751F\u3058\u305F\u6642\u306B\u306F\u632F\u308A\u8FD4\u308A\u307E\u3059\u3002"
            },
            {
                "name": "基本原則２",
                "heading": "動機を大切にする",
                "item": "\n\u62C5\u5F53\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3084\u4ED5\u4E8B\u306E\u76EE\u7684\u3068\u610F\u7FA9\u3092\u52D5\u6A5F\u3068\u3057\u3066\u3001\u81EA\u3089\u306E\u30A8\u30F3\u30B8\u30F3\u3092\u52A0\u901F\u3055\u305B\u3001\u671F\u5F85\u3055\u308C\u308B\u4EE5\u4E0A\u306E\u6210\u679C\u3092\u751F\u307F\u51FA\u3057\u3066\u3044\u304D\u307E\u3059\u3002"
            },
            {
                "name": "基本原則３",
                "heading": "代表者意識",
                "item": "\n\u5168\u3066\u306E\u30E1\u30F3\u30D0\u30FC\u306F\u4F1A\u793E\u306E\u4EE3\u8868\u3067\u3059\u3002\u79C1\u9054\u4E00\u4EBA\u4E00\u4EBA\u306E\u8A00\u52D5\u306B\u3088\u3063\u3066\u3001\u5468\u56F2\u306E\u4EBA\u306F\u3069\u306E\u3088\u3046\u306A\u4F1A\u793E\u304B\u5224\u65AD\u3057\u307E\u3059\u3002\u79C1\u9054\u306F\u672C\u793E\u52E4\u52D9\u3042\u308B\u3044\u306F\u5BA2\u5148\u5E38\u99D0\u3067\u3042\u3063\u305F\u3068\u3057\u3066\u3082\u3001\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u306E\u6642\u9593\u3067\u3042\u3063\u305F\u3068\u3057\u3066\u3082\u3001\u5E38\u306B\u4EE3\u8868\u8005\u610F\u8B58\u3092\u6301\u3063\u3066Dream Source\u306B\u6065\u3058\u306A\u3044\u8A00\u52D5\u306B\u52AA\u3081\u307E\u3059\u3002"
            },
            {
                "name": "基本原則４",
                "heading": "率先して責任を持つ",
                "item": "\n\u79C1\u9054\u306F\u696D\u52D9\u306E\u76EE\u7684\u3092\u9054\u6210\u3059\u308B\u305F\u3081\u306B\u3001\u7387\u5148\u3057\u3066\u8CAC\u4EFB\u3092\u6301\u3061\u3001\u4E3B\u4F53\u7684\u306B\u63D0\u6848\u30FB\u5B9F\u884C\u3067\u304D\u308B\u5185\u5BB9\u304C\u306A\u3044\u304B\u3092\u8003\u3048\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002"
            },
            {
                "name": "基本原則５",
                "heading": "目標を明確にする",
                "item": "\n\u79C1\u9054\u306F\u30C1\u30FC\u30E0\u306E\u76EE\u6A19\u3092\u5171\u6709\u3057\u3001\u304A\u5BA2\u69D8\u3068\u76EE\u6307\u3059\u65B9\u5411\u6027\u3084\u671F\u5F85\u5024\u306E\u8A8D\u8B58\u5408\u308F\u305B\u3092\u3057\u305F\u4E0A\u3067\u3001\u4ECA\u3084\u308B\u3079\u304D\u4E8B\u3092\u660E\u78BA\u306B\u3057\u3001\u30B4\u30FC\u30EB\u306B\u5411\u3051\u524D\u9032\u3057\u3066\u3044\u304D\u307E\u3059\u3002"
            },
            {
                "name": "基本原則６",
                "heading": "情熱と真剣さを持って最後までやり抜く",
                "item": "\n\u79C1\u9054\u306F\u4ED5\u4E8B\u306B\u60C5\u71B1\u3068\u771F\u5263\u3055\u3092\u3082\u3063\u3066\u53D6\u308A\u7D44\u307F\u3001\u5FB9\u5E95\u3057\u3066\u52AA\u529B\u3057\u7D9A\u3051\u307E\u3059\u3002\u3069\u3093\u306A\u56F0\u96E3\u306B\u3076\u3064\u304B\u3063\u3066\u3082\u4F8B\u5916\u3092\u4F5C\u3089\u305A\u3001\u300C\u79C1\u306F\u5FC5\u305A\u9054\u6210\u3067\u304D\u308B\uFF01\u300D\u3068\u3044\u3046\u78BA\u4FE1\u3068\u8A87\u308A\u3092\u6301\u3063\u3066\u3001\u6700\u5F8C\u307E\u3067\u3084\u308A\u629C\u304D\u307E\u3059\u3002"
            },
            {
                "name": "基本原則７",
                "heading": "可能性を信じ、自己の限界に挑戦する",
                "item": "\n\u6311\u6226\u3059\u308B\u3053\u3068\u306F\u6642\u306B\u52C7\u6C17\u304C\u5FC5\u8981\u3067\u3059\u304C\u3001\u56F0\u96E3\u3092\u4E57\u308A\u8D8A\u3048\u9054\u6210\u3057\u305F\u6642\u3053\u305D\u3001\u4EBA\u9593\u3068\u3057\u3066\u6700\u9AD8\u306E\u559C\u3073\u306B\u51FA\u4F1A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u79C1\u9054\u306F\u3001\u81EA\u3089\u305D\u3057\u3066\u4F1A\u793E\u306E\u53EF\u80FD\u6027\u3092\u4FE1\u3058\u3066\u3001\u65E5\u3005\u81EA\u5DF1\u306E\u9650\u754C\u306B\u6311\u6226\u3057\u307E\u3059\u3002"
            },
            {
                "name": "基本原則８",
                "heading": "常に自らのスキルを磨く",
                "item": "\n\u79C1\u9054\u306F\u793E\u54E1\u540C\u58EB\u3001\u51FA\u9022\u3063\u305F\u304A\u5BA2\u69D8\u306B\u5BFE\u3057\u3001\u5E38\u306B\u6700\u9AD8\u306E\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u7D9A\u3051\u3066\u3044\u304F\u305F\u3081\u306B\u3001\u81EA\u5206\u306E\u751F\u6DAF\u3092\u304B\u3051\u3066\u30B9\u30AD\u30EB\u3092\u78E8\u3044\u3066\u3044\u304D\u307E\u3059\u3002"
            },
            {
                "name": "基本原則９",
                "heading": "心を開く",
                "item": "\n\u79C1\u9054\u306F\u793E\u54E1\u540C\u58EB\u3001\u304A\u5BA2\u69D8\u306B\u5BFE\u3057\u3066\u3001\u5FC3\u3092\u958B\u3044\u3066\u63A5\u3057\u3001\u7D20\u76F4\u306B\u76F8\u624B\u306E\u8003\u3048\u3084\u6C17\u6301\u3061\u3092\u7406\u89E3\u3059\u308B\u3053\u3068\u3092\u5927\u5207\u306B\u3057\u307E\u3059\u3002\u305D\u3046\u3059\u308B\u3053\u3068\u3067\u3001\u79C1\u9054\u81EA\u8EAB\u3082\u76F8\u624B\u306B\u7406\u89E3\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"
            },
            {
                "name": "基本原則１０",
                "heading": "メンバーを尊重しお互いの強みを共有する",
                "item": "\n\u79C1\u9054\u306F\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC\u3092\u4FE1\u3058\u3001\u5C0A\u91CD\u3057\u3001\u5354\u8ABF\u6027\u3092\u6301\u3063\u3066\u4ED5\u4E8B\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002\u305D\u3057\u3066\u4E00\u4EBA\u4E00\u4EBA\u304C\u30D7\u30ED\u3068\u3057\u3066\u6301\u3063\u3066\u3044\u308B\u300C\u5F37\u307F\u300D\u300C\u30CE\u30A6\u30CF\u30A6\u300D\u300C\u6280\u8853\u300D\u300C\u60C5\u71B1\u300D\u7B49\u3092\u5171\u6709\u3057\u3001\u30C1\u30FC\u30E0\u5168\u4F53\u306E\u6210\u679C\u5411\u4E0A\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002"
            },
            {
                "name": "基本原則１１",
                "heading": "周囲に活力を与える",
                "item": "\n\u79C1\u9054\u306F\u65E5\u3005\u4E00\u7DD2\u306B\u4ED5\u4E8B\u3092\u3059\u308B\u4EF2\u9593\u306B\u30B9\u30C8\u30ED\u30FC\u30AF(*)\u3092\u4E0E\u3048\u3066\u3001\u5468\u56F2\u3092\u6D3B\u6027\u5316\u3057\u3066\u3044\u304D\u307E\u3059\u3002\u79C1\u9054\u306F\u60DC\u3057\u307F\u306A\u304F\u304A\u5BA2\u69D8\u306E\u767A\u5C55\u3068\u5E78\u798F\u3001\u305D\u3057\u3066\u4E00\u7DD2\u306B\u4ED5\u4E8B\u3092\u3059\u308B\u30E1\u30F3\u30D0\u30FC\u306E\u559C\u3073\u3068\u6210\u9577\u306E\u305F\u3081\u306B\u5168\u529B\u3092\u5C3D\u304F\u3057\u307E\u3059\u3002\n*\u30B9\u30C8\u30ED\u30FC\u30AF\uFF1A\u5FC3\u7406\u5B66\u7528\u8A9E\u3002\u76F8\u624B\u306E\u5B58\u5728\u3092\u8A8D\u3081\u308B\u5168\u3066\u306E\u52D5\u4F5C\u3084\u50CD\u304D\u304B\u3051\u3002\u5177\u4F53\u7684\u306B\u306F\u4EBA\u3068\u306E\u300C\u95A2\u308F\u308A\u300D\u300C\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\uFF08\u884C\u52D5\u306B\u5BFE\u3059\u308B\u8A55\u4FA1\uFF09\u300D\u300C\u523A\u6FC0\u300D\u306E\u3053\u3068\u3092\u8A00\u3044\u307E\u3059\u3002\u6328\u62F6\u3001\u63E1\u624B\u3001\u8996\u7DDA\u3092\u5408\u308F\u305B\u308B\u306A\u3069\u3082\u305D\u306E\u4E00\u7A2E\u3067\u3059\u3002"
            },
            {
                "name": "基本原則１２",
                "heading": "良き助言を与えあう",
                "item": "\n\u76F8\u624B\u306E\u6210\u9577\u3068\u4F1A\u793E\u5168\u4F53\u306E\u305F\u3081\u306B\u7387\u76F4\u306B\u610F\u898B\u3092\u8A00\u3044\u5408\u3044\u307E\u3059\u3002\u8A00\u3044\u306B\u304F\u3044\u3053\u3068\u3067\u3082\u3001\u30C1\u30FC\u30E0\u304C\u3001\u305D\u3057\u3066\u4F1A\u793E\u5168\u4F53\u304C\u6700\u9AD8\u306E\u529B\u3092\u767A\u63EE\u3059\u308B\u306B\u306F\u3069\u3046\u3059\u308B\u3079\u304D\u304B\u3068\u8003\u3048\u3066\u610F\u898B\u3057\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u9670\u3067\u6279\u5224\u3057\u305F\u308A\u3001\u6539\u5584\u6848\u306E\u4F34\u308F\u306A\u3044\u6279\u5224\u7B49\u3005\u306F\u7D76\u5BFE\u306B\u8A8D\u3081\u307E\u305B\u3093\u3002"
            },
            {
                "name": "基本原則１３",
                "heading": "クレームに対し誠心誠意取り組む",
                "item": "\n\u30AF\u30EC\u30FC\u30E0\u306F\u66F4\u306B\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3067\u304D\u308B\u30C1\u30E3\u30F3\u30B9\u3068\u6349\u3048\u3001\u7A4D\u6975\u7684\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002\u5BFE\u5FDC\u3059\u308B\u793E\u54E1\u306F\u4F1A\u793E\u306E\u4EE3\u8868\u3068\u3057\u3066\u3001\u76EE\u306E\u524D\u306E\u30AF\u30EC\u30FC\u30E0\u306B\u8AA0\u5FC3\u8AA0\u610F\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002"
            },
            {
                "name": "基本原則１４",
                "heading": "凡事を徹底する",
                "item": "\n\u4FE1\u983C\u3092\u52DD\u3061\u53D6\u308B\u305F\u3081\u306B\u306F\u3001\u5F53\u305F\u308A\u524D\u306E\u4E8B\u3092\u5F53\u305F\u308A\u524D\u306B\u3084\u308B\u3068\u3044\u3046\u51E1\u4E8B\u5FB9\u5E95\u304C\u5927\u5207\u3067\u3059\u3002\u305F\u3068\u3048\u3070\u3001\u300C\u7D04\u675F\u3092\u5B88\u308B\u300D\u300C\u6642\u9593\u3092\u5B88\u308B\u300D\u300C\u5831\u9023\u76F8\u300D\u306A\u3069\u3001\u77E5\u3063\u3066\u3044\u308B\u3060\u3051\u3067\u306F\u306A\u304F\u3001\u3084\u308C\u3066\u3044\u308B\u72B6\u614B\u306B\u3059\u308B\u4E8B\u304C\u5927\u5207\u3067\u3059\u3002"
            },
            {
                "name": "基本原則１５",
                "heading": "身の回りの整理整頓を心がける",
                "item": "\n\u30AA\u30D5\u30A3\u30B9\u74B0\u5883\u306E\u6C5A\u308C\u3084\u4E71\u96D1\u3055\u306F\u5FC3\u306E\u53CD\u6620\u3067\u3059\u3002\u74B0\u5883\u3092\u6574\u7406\u3057\u6E05\u6F54\u306B\u3057\u305F\u5206\u3001\u5FC3\u306E\u8352\u307F\u3082\u306A\u304F\u306A\u308A\u304D\u308C\u3044\u306B\u306A\u308A\u307E\u3059\u3002\u79C1\u9054\u306F\u81EA\u3089\u306E\u5FC3\u3092\u6E05\u3081\u3001\u5468\u56F2\u306E\u30E1\u30F3\u30D0\u30FC\u304C\u6C17\u6301\u3061\u3088\u304F\u50CD\u3044\u3066\u3082\u3089\u3046\u305F\u3081\u306B\u3001\u8EAB\u306E\u56DE\u308A\u306E\u6574\u7406\u6574\u9813\u3092\u5FC3\u304C\u3051\u307E\u3059\u3002"
            },
            {
                "name": "基本原則１６",
                "heading": "心と体の健康管理",
                "item": "\n\u79C1\u9054\u306F\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u3068\u3057\u3066\u3001\u5FC3\u3068\u4F53\u306E\u5065\u5EB7\u306B\u7D30\u5FC3\u306E\u6CE8\u610F\u3092\u6255\u3044\u307E\u3059\u3002\u5FC3\u3068\u4F53\u306E\u30D0\u30E9\u30F3\u30B9\u304C\u53D6\u308C\u3066\u3001\u521D\u3081\u3066\u79C1\u9054\u306F\u6301\u3066\u308B\u529B\u3092\u51FA\u3057\u5207\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u79C1\u306E\u4F53\u306F\u5358\u306B\u81EA\u5206\u306E\u3082\u306E\u3067\u306F\u306A\u304F\u3001\u516C\u306E\u3082\u306E\u3068\u3057\u3066\u65E5\u9803\u306E\u4F53\u8ABF\u7BA1\u7406\u306B\u52AA\u3081\u307E\u3059\u3002"
            },
            {
                "name": "基本原則１７",
                "heading": "会社の資産を大切に使う",
                "item": "\n\u79C1\u9054\u306F\u81EA\u5206\u304C\u76F4\u63A5\u7BA1\u7406\u3057\u3066\u3044\u308B\u673A\u3084\u5099\u54C1\u306F\u3082\u3061\u308D\u3093\u306E\u3053\u3068\u3001\u4F1A\u793E\u306E\u8CC7\u7523\u3092\u8CAC\u4EFB\u6301\u3063\u3066\u7BA1\u7406\u3057\u307E\u3059\u3002\u79C1\u9054\u306F\u8CC7\u7523\u306E\u672C\u6765\u306E\u4FA1\u5024\u3092\u5F15\u304D\u51FA\u305B\u308B\u3088\u3046\u306B\u5927\u5207\u306B\u4F7F\u3044\u307E\u3059\u3002"
            },
            {
                "name": "基本原則１８",
                "heading": "人生の成功者を目指す",
                "item": "\n\u79C1\u9054\u306F\u8077\u696D\u4EBA\u3068\u3057\u3066\u306E\u6210\u529F\u8005\u3067\u306F\u306A\u304F\u3001\u4EBA\u751F\u306E\u6210\u529F\u8005\u3092\u76EE\u6307\u3057\u307E\u3059\u3002\u826F\u3044\u751F\u6D3B\u7FD2\u6163\u306F\u4ED5\u4E8B\u306B\u6D3B\u304B\u3055\u308C\u3001\u4ED5\u4E8B\u3067\u5F97\u305F\u3053\u3068\u306F\u751F\u6D3B\u306B\u6D3B\u304B\u3055\u308C\u307E\u3059\u3002\u79C1\u9054\u306F\u751F\u6D3B\u3082\u4ED5\u4E8B\u3082\u3069\u3061\u3089\u3082\u7B49\u3057\u304F\u5927\u5207\u306B\u3057\u3001\u4EBA\u751F\u306E\u6210\u529F\u8005\u3092\u76EE\u6307\u3057\u307E\u3059\u3002"
            },
            {
                "name": "基本原則１９",
                "heading": "良心に従って行動する",
                "item": "\n\u79C1\u9054\u306F\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u3092\u5FB9\u5E95\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u4EEE\u306B\u6CD5\u5F8B\u3084\u898F\u5247\u306B\u660E\u793A\u3055\u308C\u3066\u3044\u306A\u304B\u3063\u305F\u3068\u3057\u3066\u3082\u3001Dream Source\u3092\u5171\u6709\u3057\u305F\u5BB6\u65CF\u3068\u3057\u3066\u3001\u81EA\u5206\u306E\u826F\u5FC3\u306B\u5F93\u3063\u3066\u884C\u52D5\u3057\u307E\u3059\u3002"
            },
        ];
    }
    /*
      戻り値：[{"name":"string", "items":[string[]]}]
    */
    DreamSourceProvider.prototype.getSegmentItems = function () {
        var segments = this.beginningSegments.concat(this.mainSegments);
        return segments;
    };
    /*
      戻り値：[{"name":"string", "items":[string[]]}]
    */
    DreamSourceProvider.prototype.getMainSegmentItems = function () {
        var segments = this.mainSegments;
        return segments;
    };
    /*
      戻り値：{"name":"string", "items":[string[]]}
    */
    DreamSourceProvider.prototype.getItem = function (name, num) {
        var item = {
            "name": name,
            "items": []
        };
        for (var i = 0; i < num; i++) {
            item.items.push("item" + i);
        }
        return item;
    };
    return DreamSourceProvider;
}());

//# sourceMappingURL=dream-source.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map