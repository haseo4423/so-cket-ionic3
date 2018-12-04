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
  public localDate: Date = new Date();
  public initDate: Date = new Date();
  public disabledDates: Date[] = [new Date(2018, 11, 14)];
  public displayDate: String = this.dateFormat(this.initDate);

  public name: string;
  public comment: string;
  public rangeValue1: number = 3;
  public rangeValue2: number = 3;
  public segments: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public dreamSource: DreamSourceProvider
  ) { }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DailyReportPage');
    this.segments = this.dreamSource.getMainSegmentItems();
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
    this.displayDate = this.dateFormat(data);
  }

  public setDate(date: Date) {
    console.log(date);
    this.initDate = date;
    this.displayDate = this.dateFormat(date);
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
    return y + '年' + m + '月' + d + '日 (' + wNames[w] + ')';
  }

}
