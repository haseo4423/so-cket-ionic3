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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) { }

  ionViewDidLoad() {
    this.http
      .get('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts')
      .subscribe(data => {
        this.posts = data['posts'];
      });
  }

}
