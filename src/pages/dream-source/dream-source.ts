import { ViewChild, Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DreamSourceProvider } from '../../providers/dream-source/dream-source';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

/**
 * Generated class for the DreamSourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'dream-source',
  segment: 'dream-source'
})
@Component({
  selector: 'page-dream-source',
  templateUrl: 'dream-source.html',
  providers: [DreamSourceProvider],
})
export class DreamSourcePage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('tabmenu') tabmenu: any;
  public segments: any = [];
  public activeIndex: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dreamSource: DreamSourceProvider
  ) { }

  ionViewDidLoad() {
    this.segments = this.dreamSource.getSegmentItems();
  }

  change(idx) {
    this.activeIndex = idx;
    this.slides.slideTo(this.activeIndex, 500);
  }
  onSlideChangeStart() {
    let index = this.slides.getActiveIndex();
    // しきい値チェック。タブメニューをはみ出してたらリターン
    if (this.tabmenu.nativeElement.children.length <= index) {
      return;
    }
    this.activeIndex = index;

    // タブメニューの移動
    let start = this.tabmenu.nativeElement.scrollLeft;
    let end = this.tabmenu.nativeElement.children[index].offsetLeft;
    let dir = 1;
    // 進行方向を決定(1：進む、-1：戻る)
    if (start > end) {
      dir = dir * -1;
    }
    // 移動量を決める。
    let speed = Math.abs(end - start) / 20;
    let cnt = 0;
    // endの位置に来るまでループ
    let obs = Observable.interval(1).subscribe((x) => {
      cnt = cnt + (speed * dir);
      this.tabmenu.nativeElement.scrollLeft = start + cnt;
      // 進む場合
      if ((start + cnt) >= end && dir == 1) {
        obs.unsubscribe();
      }
      // 戻る場合
      if ((start + cnt) <= end && dir == -1) {
        obs.unsubscribe();
      }
    });
  }

}
