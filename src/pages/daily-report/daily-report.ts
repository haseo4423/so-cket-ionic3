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
  /* カレンダー用の変数群 */
  public weekString: Array<String> = ['日', '月', '火', '水', '木', '金', '土'];
  public localeString: { weekdays: Array<String>, months: Array<String> } = {
    weekdays: this.weekString,
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  };
  public initDate: Date = new Date();
  // カレンダー上にマーキングする日付。日報を作成した日付の履歴表示に使えるかも。
  public markedDates: Date[] = [new Date(2016, 11, 14)];
  // カレンダー自体のフォーマットは日本的じゃないので表示用に値を作る
  public displayDate: String = this.dateFormat(this.initDate);

  /* その他項目用の変数群 */
  public name: string;
  public dsToday: number = 0;
  public dsItem: string;
  public comment: string;
  // dream sourceプロバイダーのアイテムを格納する。
  public segments: any = [];
  // スライダーゲージの項目情報を格納する。
  // 項目数が可変のためオブジェクト配列
  public rangeContents: { type: string, value: number }[] = [];

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
      // localStorageに保存済みがあれば展開する。
      let modalObject = JSON.parse(localStorage.getItem('modalObject'));
      this.name = modalObject.name;
      let num = modalObject.dsToday;
      this.dsToday = num - 1;
      for (let content of modalObject.contents) {
        this.rangeContents.push({ type: content.type, value: content.value });
      }
      this.comment = modalObject.comment;
    } else {
      // 無ければスライダーゲージの項目の初期セットを作る。
      this.rangeContents = [
        { type: "今日のDS意識度", value: 3 },
        { type: "今日の業務進捗", value: 3 },
        { type: "今日の体調", value: 3 },
        { type: "今日のモチベーション", value: 3 }
      ];
    }
    // 今日のDSを選択する。
    this.dsItem = this.segments[this.dsToday].item;
  }

  openModal() {
    /* 画面項目をobjectにしてlocalStorageに保存とmodalに値渡しをする */
    let num = this.dsToday;
    num++;// 配列の添字に1を足したいんだけど何故か文字結合になってしまうからこうする。
    let objectArray = [];
    for (let content of this.rangeContents) {
      objectArray.push({ type: content.type, value: content.value });
    }
    let modalObject = {
      displayDate: this.displayDate,
      name: this.name,
      dsToday: num,
      dsHeading: this.segments[this.dsToday].heading,
      contents: objectArray,
      comment: this.comment,
    };
    localStorage.setItem('modalObject', JSON.stringify(modalObject));
    let dailyReportModal = this.modalCtrl.create(DailyReportModalPage, { modalObject });
    dailyReportModal.present();
  }

  public setDate(date: Date) {
    // カレンダーから日付が押されたら値を更新する。
    this.initDate = date;
    this.displayDate = this.dateFormat(date);
  }

  public setDsItem() {
    // プルダウンからDSが選択されたら文章を更新する。
    this.dsItem = this.segments[this.dsToday].item;
  }

  // dateFormat date型の日付をフォーマットする。
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
