import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DailyReportModalPage } from '../daily-report-modal/daily-report-modal';
import { DreamSourceProvider } from '../../providers/dream-source/dream-source';

/**
 * Generated class for the DailyReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * See https://github.com/pauloedsr/ionic3-datepicker.
 */

@IonicPage({
  name: 'daily-report',
  segment: 'daily-report'
})
@Component({
  selector: 'page-daily-report',
  templateUrl: 'daily-report.html',
  providers: [DreamSourceProvider],
})
export class DailyReportPage {
  weekString: Array<String> = ['日', '月', '火', '水', '木', '金', '土'];
  public initDate: Date = new Date();
  public disabledDates: Date[] = [new Date(2018, 11, 14)];
  public displayDate: String = this.dateFormat(this.initDate);

  public name: string;
  public dsToday: number;
  public dsItem: string;
  public rangeValue1: number = 3;
  public rangeValue2: number = 3;
  public comment: string;
  public segments: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public dreamSource: DreamSourceProvider
  ) {
    this.segments = this.dreamSource.getMainSegmentItems();
  }

  ionViewWillEnter() {
    if (localStorage.getItem('modalObject')) {
      let modalObject = JSON.parse(localStorage.getItem('modalObject'));
      this.name = modalObject.name;
      let num = modalObject.dsToday;
      this.dsToday = num - 1;
      for (let content of modalObject.contents) {
        this.rangeValue1 = content.value;
      }
      this.comment = modalObject.comment;
    }
    if (this.dsToday != undefined) this.dsItem = this.segments[this.dsToday].items[0];
  }

  openModal() {
    let num = this.dsToday;
    num++;
    let modalObject = {
      displayDate: this.displayDate,
      name: this.name,
      dsToday: num,
      dsHeading: this.segments[this.dsToday].heading[0],
      contents: [
        { type: "今日のDS意識度", value: this.rangeValue1 },
        { type: "今日の調子", value: this.rangeValue2 },
      ],
      comment: this.comment,
    };
    localStorage.setItem('modalObject', JSON.stringify(modalObject));
    let dailyReportModal = this.modalCtrl.create(DailyReportModalPage, { modalObject });
    dailyReportModal.present();
  }

  public setDate(date: Date) {
    this.initDate = date;
    this.displayDate = this.dateFormat(date);
  }

  public setDsItem() {
    this.dsItem = this.segments[this.dsToday].items[0];
  }

  // dateFormat 関数の定義
  dateFormat(date) {
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
  }

}
