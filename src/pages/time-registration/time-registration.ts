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
  }

  apiExecute() {
    localStorage.setItem('registeredUrl', JSON.stringify(this.url));
    window.open(this.url, "_system");
  }

}
