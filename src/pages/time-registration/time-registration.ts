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
  posts: {
    ID: number,
    Title: string,
    content: string,
    date: string,
  }[] = [];
  url: string;
  result: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) { }

  ionViewDidLoad() { }

  apiExecute() {
    this.http
      .post(this.url, "")
      .subscribe(data => {
        console.log(data);
        this.result = data["resultcode"];
      });
  }

}
