import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TimeRegistrationPage } from '../pages/time-registration/time-registration';
import { DailyReportPage } from '../pages/daily-report/daily-report';
import { DreamSourcePage } from '../pages/dream-source/dream-source';
import { ConfigurationPage } from '../pages/configuration/configuration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MockProvider } from '../providers/mock/mock';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TimeRegistrationPage,
    DailyReportPage,
    DreamSourcePage,
    ConfigurationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TimeRegistrationPage,
    DailyReportPage,
    DreamSourcePage,
    ConfigurationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MockProvider
  ]
})
export class AppModule { }
