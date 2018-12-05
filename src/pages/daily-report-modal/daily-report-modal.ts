import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DailyReportModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-report-modal',
  templateUrl: 'daily-report-modal.html',
})
export class DailyReportModalPage {
  public modalContents: string = "";

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    let getParams = this.params.get("modalObject");
    for (let param of getParams.contents) {
      if (param.value != undefined) {
        this.modalContents += param.value + "\n";
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
