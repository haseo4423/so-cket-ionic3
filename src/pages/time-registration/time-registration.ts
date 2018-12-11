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
  public url: string;
  public weekString: Array<String> = ['日', '月', '火', '水', '木', '金', '土'];
  public registeredLogArray: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) { }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    if (localStorage.getItem('registeredUrl')) {
      this.url = JSON.parse(localStorage.getItem('registeredUrl'));
    }
    if (localStorage.getItem('registeredLog')) {
      this.registeredLogArray = JSON.parse(localStorage.getItem('registeredLog'));
    }
  }

  apiExecute() {
    localStorage.setItem('registeredUrl', JSON.stringify(this.url));
    const nowMoment = moment();
    const weekNumber = nowMoment.format("d");
    const now = nowMoment.format("Y年M月D日(" + this.weekString[weekNumber] + ")H時m分");
    this.registeredLogArray.push(now);
    if (this.registeredLogArray.length > 6) {
      const deleteItemCount = this.registeredLogArray.length - 6;
      this.registeredLogArray.splice(0, deleteItemCount);
    }
    localStorage.setItem('registeredLog', JSON.stringify(this.registeredLogArray));
    window.open(this.url, "_system");
  }

}
