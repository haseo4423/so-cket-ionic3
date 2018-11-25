import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyReportModalPage } from './daily-report-modal';

@NgModule({
  declarations: [
    DailyReportModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyReportModalPage),
  ],
})
export class DailyReportModalPageModule {}
