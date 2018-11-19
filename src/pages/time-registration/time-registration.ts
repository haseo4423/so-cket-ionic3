import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  url: string;
  weekString: Array<String> = ['日', '月', '火', '水', '木', '金', '土'];
  registeredLogArray: Array<any>;

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
    const now = new Date().toLocaleString;
    this.registeredLogArray.push(now);
    localStorage.setItem('registeredLog', JSON.stringify(this.registeredLogArray));
    window.open(this.url, "_system");
  }

}
