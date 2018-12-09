import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ToastController } from 'ionic-angular';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';

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
  public clipboard: any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController
  ) {
    let getParams = this.params.get("modalObject");
    for (let param of getParams.contents) {
      if (param.value != undefined) {
        this.modalContents += param.value + "\n";
      }
    }
    this.clipboard = new Clipboard('#cpyBtn');
    this.clipboard.on('success', () => this.showMsg(toastCtrl));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showMsg(toastCtrl: ToastController) {
    let toast = toastCtrl.create({
      message: 'クリップボードにコピーしました',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
