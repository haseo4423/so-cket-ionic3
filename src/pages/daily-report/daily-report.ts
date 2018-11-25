import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DailyReportModalPage } from '../daily-report-modal/daily-report-modal';

/**
 * Generated class for the DailyReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-report',
  templateUrl: 'daily-report.html',
})
export class DailyReportPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyReportPage');
  }

  openModal() {
    let dailyReportModal = this.modalCtrl.create(DailyReportModalPage);
    dailyReportModal.present();
  }

}
