import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DreamSourcePage } from './dream-source';

@NgModule({
  declarations: [
    DreamSourcePage,
  ],
  imports: [
    IonicPageModule.forChild(DreamSourcePage),
  ],
})
export class DreamSourcePageModule {}
