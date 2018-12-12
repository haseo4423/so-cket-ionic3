import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the TimeRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-registration',
  templateUrl: 'time-registration.html',
})
export class TimeRegistrationPage {
  public url: string = "";
  public weekString: Array<String> = ['日', '月', '火', '水', '木', '金', '土'];
  public registeredLogArray: Array<any> = [];
  // disabledオプションの中でindexOfが動作してくれないようなので別にフラグを用意する
  public isDisabled: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) { }

  ionViewWillEnter() {
    // テキストボックスに入れるURLの保存があるか
    if (localStorage.getItem('registeredUrl')) {
      this.url = JSON.parse(localStorage.getItem('registeredUrl'));
    }
    // 勤怠登録の履歴保存があるか
    if (localStorage.getItem('registeredLog')) {
      this.registeredLogArray = JSON.parse(localStorage.getItem('registeredLog'));
    }
  }

  checkDisabled() {
    // 勤怠示すキーワードとスタッフ番号を示すキーワードがURLに入っていれば良しとする
    if (this.url.indexOf('gktrg03') > 0 && this.url.indexOf('staffNo') > 0) this.isDisabled = false;
    else this.isDisabled = true;
  }

  apiExecute() {
    // API実行時にテキスト入力されているURLをlocalStorageに保存
    localStorage.setItem('registeredUrl', JSON.stringify(this.url));
    // 実行時の年月日時を取る
    const nowMoment = moment();
    const weekNumber = nowMoment.format("d");
    const now = nowMoment.format("Y年M月D日(" + this.weekString[weekNumber] + ")H時m分");

    this.registeredLogArray.push(now);
    // 保存する履歴は6件までなので超えたら後入れ先出しで削除する
    if (this.registeredLogArray.length > 6) {
      const deleteItemCount = this.registeredLogArray.length - 6;
      this.registeredLogArray.splice(0, deleteItemCount);
    }
    localStorage.setItem('registeredLog', JSON.stringify(this.registeredLogArray));
    // CORSでapiリクエストが送れないがサーバ設定を変えるのは面倒なのでブラウザに実行してもらう
    window.open(this.url, "_system");
  }

}
