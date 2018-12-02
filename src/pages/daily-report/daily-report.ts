import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DailyReportModalPage } from '../daily-report-modal/daily-report-modal';

/**
 * Generated class for the DailyReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * See https://github.com/pauloedsr/ionic3-datepicker.
 */

@IonicPage()
@Component({
  selector: 'page-daily-report',
  templateUrl: 'daily-report.html',
})
export class DailyReportPage {
  public localDate: Date = new Date();
  public initDate: Date = new Date();
  public initDate2: Date = new Date(2015, 1, 1);
  public disabledDates: Date[] = [new Date(2018, 11, 14)];

  public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
  public min: Date = new Date()

  public name: string;
  public comment: string;
  public rangeValue1: number = 3;
  public rangeValue2: number = 3;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DailyReportPage');
  }

  openModal(Num) {
    let modalObject = [{ title: '氏名', value: this.name }];
    console.log(modalObject);
    let dailyReportModal = this.modalCtrl.create(DailyReportModalPage, modalObject);
    dailyReportModal.present();
  }

  public Log(stuff): void {
    console.log(stuff);
  }

  public event(data: Date): void {
    this.localDate = data;
  }

  public setDate(date: Date) {
    console.log(date);
    this.initDate = date;
  }

}
