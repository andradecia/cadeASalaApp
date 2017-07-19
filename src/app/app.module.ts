import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'; 
import { IonicStorageModule } from '@ionic/storage';

import {AwsUtil} from '../providers/aws.service';
import {DisciplinaService} from '../providers/disciplina.service';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LocalizacaoPage} from '../pages/localizacao/localizacao'
import {Disciplinas} from '../components/disciplinas/disciplinas'
import {Detalhe} from '../components/detalhe/detalhe'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoursesService } from '../providers/courses/courses.service';
import { DatesPipe } from '../pipes/dates/dates';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LocalizacaoPage,
    Disciplinas,
    Detalhe,
    DatesPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LocalizacaoPage,
    Disciplinas,
    Detalhe
  ],
  providers: [
    DisciplinaService,
    AwsUtil,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoursesService
  ]
})
export class AppModule {}
