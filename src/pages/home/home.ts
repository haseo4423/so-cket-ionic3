import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  doRefresh(refresher) {
    // this.currentPage = 1;
    setTimeout(() => {
      // this.qiitaServiceProvider.getQiitaItems(this.currentPage, this.queryOption)
      //   .subscribe(items => {
      //     this.qiitaItems = items;
      //     console.log(items);
      //   },
      //     err => console.log(err),
      //     () => { });

      refresher.complete();
    }, 500);
  }

}
